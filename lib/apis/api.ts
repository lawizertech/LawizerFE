import { backendApi } from "./axios";
import { publicApi } from "@/lib/auth/publicApi";

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
    const res = await backendApi.get(`/api/user/profile`, {
      baseURL: window.location.origin, // hit Next.js proxy on same origin
      params: { uid },
    });
    console.log("getUserProfile success res.data:", res.data);
    return {
      success: true,
      ...res.data?.profile,
    };
  } catch (err: any) {
    console.error("getUserProfile error:", err?.response?.data || err.message);
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
    const res = await publicApi.post(
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

/**
 * Login endpoint - sends Supabase JWT and refresh token to backend
 * Backend will:
 * 1. Validate JWT with Supabase
 * 2. Set HttpOnly cookie with refresh token
 * 3. Return user profile
 */
import axios from "axios";

export const loginUser = async (idToken: string, refreshToken?: string, requestedRole?: string) => {
  try {
    const res = await axios.post(
      `/api/auth/login`,
      { 
        idToken,
        refreshToken, // Include refresh token for HttpOnly cookie
        requestedRole,
      },
      {
        headers: { Authorization: `Bearer ${idToken}` },
        withCredentials: true,
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

export const expertLogin = async (idToken: string, refreshToken?: string) => {
  try {
    const res = await axios.post(
      `/api/expert/login`,
      { idToken, refreshToken },
      {
        headers: { Authorization: `Bearer ${idToken}` },
        withCredentials: true,
      }
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
