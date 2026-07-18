import { backendApi } from "./axios";

interface ProfilePayload {
  uid: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  city?: string;
  state?: string;
  photoURL?: string;
  hasPassword?: boolean;
}

interface ScheduleCallPayload {
  expertId: string;
  expertName: string;
  rate?: string;
}

/* -------------------------------------------------------------------------- */
/* 🔹 getUserProfile */
/* -------------------------------------------------------------------------- */

export const getUserProfile = async (uid: string) => {
  try {
    const res = await backendApi.get(`/auth/profile`, {
      params: { uid },
    });
    return res.data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
      errorData: err?.response?.data,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 signupUser */
/* -------------------------------------------------------------------------- */

export const signupUser = async (idToken: string, uid: string, name: string, email: string, phoneNumber: string) => {
  try {
    const res = await backendApi.post(
      `/auth/signup`,
      {
        uid,
        name,
        email,
        phoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );
    return res.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 completeUserProfile */
/* -------------------------------------------------------------------------- */

export const completeUserProfile = async (authToken: string, formData: ProfilePayload) => {
  try {
    const res = await backendApi.post(`/auth/complete-profile`, formData, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return res.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 loginUser */
/* -------------------------------------------------------------------------- */

export const loginUser = async (idToken: string) => {
  try {
    const res = await backendApi.post(
      `/auth/login`,
      { idToken },
      {
        headers: { Authorization: `Bearer ${idToken}` },
      },
    );
    return {
      success: true,
      ...res.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 scheduleCall API */
/* -------------------------------------------------------------------------- */

export const scheduleCall = async (payload: ScheduleCallPayload) => {
  try {
    const res = await backendApi.post("/user/consultations", payload);
    return res.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 getUserBookings API */
/* -------------------------------------------------------------------------- */

export const getUserBookings = async () => {
  try {
    const res = await backendApi.get("/user/consultations");
    return res.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 expertLogin API */
/* -------------------------------------------------------------------------- */

export const expertLogin = async (idToken: string) => {
  try {
    const res = await backendApi.post("/expert/login", { idToken });
    return {
      success: true,
      ...res.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/* 🔹 expertCompleteProfile API */
/* -------------------------------------------------------------------------- */

export const expertCompleteProfile = async (payload: {
  expertId: string;
  name: string;
  role: string;
  img?: string;
  gender?: string;
  location?: string;
  experience?: string;
}) => {
  try {
    const res = await backendApi.post("/admin/experts/complete-profile", {
      uid: payload.expertId,
      name: payload.name,
      role: payload.role,
      img: payload.img,
      gender: payload.gender,
      location: payload.location,
      experience: payload.experience,
    });
    return res.data;
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode: err?.response?.data?.errorCode,
    };
  }
};
