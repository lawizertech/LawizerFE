import { backendApi } from "./axios";

interface ProfilePayload {
  uid: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  city?: string;
  state?: string;
  photoURL?: string;
}

interface ScheduleCallPayload {
  expertId: string;
  expertName: string;
  rate?: string;
}

/* -------------------------------------------------------------------------- */
/*                           🔄 TOKEN RENEW FUNCTION                           */
/* -------------------------------------------------------------------------- */

const renewToken = async (): Promise<string | null> => {
  try {
    const oldToken = localStorage.getItem("token");
    if (!oldToken) return null;

    const res = await backendApi.get("/auth/renew-token", {
      headers: { Authorization: `Bearer ${oldToken}` },
    });

    if (res.data?.newToken) {
      localStorage.setItem("token", res.data.newToken);
      return res.data.newToken;
    }

    return null;
  } catch (err) {
    console.error("Renew token error:", err);
    return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                              🔹 getUserProfile                              */
/* -------------------------------------------------------------------------- */

export const getUserProfile = async (uid: string) => {
  try {
    const res = await backendApi.get(`/auth/profile`, {
      params: { uid },
    });

    return res.data.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      // retry with fresh token
      const retryRes = await backendApi.get(`/auth/profile`, {
        params: { uid },
        headers: { Authorization: `Bearer ${newToken}` },
      });

      return retryRes.data.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
      errorData: err?.response?.data,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                                  🔹 initUser                                */
/* -------------------------------------------------------------------------- */

export const signupUser = async (
  name: string,
  email: string,
  password: string,
  phoneNumber: string
) => {
  try {
    const res = await backendApi.post(`/auth/signup`, {
      name,
      email,
      password,
      phoneNumber,
    });
    return res.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.post(
        `/auth/init-user`,
        { name, email, password },
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return retryRes.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           🔹 completeUserProfile                            */
/* -------------------------------------------------------------------------- */

export const completeUserProfile = async (
  idToken: string,
  formData: ProfilePayload
) => {
  try {
    const res = await backendApi.post(`/auth/complete-profile`, formData, {
      headers: { Authorization: `Bearer ${idToken}` },
    });

    return res.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.post(
        `/auth/complete-profile`,
        formData,
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return retryRes.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                                  🔹 loginUser                               */
/* -------------------------------------------------------------------------- */

export const loginUser = async (idToken: string) => {
  try {
    const res = await backendApi.post(
      `/auth/login`,
      { idToken },
      {
        headers: { Authorization: `Bearer ${idToken}` },
      }
    );

    return {
      success: true,
      ...res.data,
    };
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.post(
        `/auth/login`,
        { idToken },
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return { success: true, ...retryRes.data };
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           🔹 scheduleCall API                              */
/* -------------------------------------------------------------------------- */

export const scheduleCall = async (
  payload: ScheduleCallPayload,
  type: "adv" | "ca"
) => {
  try {
    const endpoint =
      type === "adv"
        ? "/consultation/schedule-adv-consultation"
        : "/consultation/schedule-ca-consultation";

    const res = await backendApi.post(endpoint, payload);

    return res.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const endpoint =
        type === "adv" ? "/call/schedule-adv" : "/call/schedule-ca";

      const retryRes = await backendApi.post(endpoint, payload);

      return retryRes.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           🔹 getUserBookings API                            */
/* -------------------------------------------------------------------------- */

export const getUserBookings = async () => {
  try {
    const res = await backendApi.get("/consultation/fetch-consultations");

    return res.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.get(
        "/consultation/fetch-consultations",
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return retryRes.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           🔹 advocateLogin API                              */
/* -------------------------------------------------------------------------- */
export const advLoginUser = async (idToken: string) => {
  try {
    const res = await backendApi.post(
      `/advocate/login`,
      { idToken },
      {
        headers: { Authorization: `Bearer ${idToken}` },
      }
    );

    return {
      success: true,
      ...res.data,
    };
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.post(
        `/advocate/login`,
        { idToken },
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return { success: true, ...retryRes.data };
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           🔹 advocateCompleteProfile API                   */
/* -------------------------------------------------------------------------- */
export const advCompleteProfile = async (payload: {
  expertId: string;
  name: string;
  role: string;
  img?: string;
  gender?: string;
  location?: string;
  experience?: string;
}) => {
  try {
    const res = await backendApi.post("/advocate/complete-profile", payload);
    return res.data;
  } catch (err: any) {
    const errorCode = err?.response?.data?.errorCode;

    if (errorCode === "TOKEN_EXPIRED") {
      const newToken = await renewToken();
      if (!newToken) return err.response.data;

      const retryRes = await backendApi.post(
        "/advocate/complete-profile",
        payload,
        {
          headers: { Authorization: `Bearer ${newToken}` },
        }
      );

      return retryRes.data;
    }

    return {
      success: false,
      message: err?.response?.data?.message,
      errorCode,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                         🔹 Fetch Advocate Dashboard Metrics               */
/* -------------------------------------------------------------------------- */
export const userPasswordReset = async (email: string) => {
  try {
    const res = await backendApi.post("/auth/sendPasswordReset", {
      email: email,
    });

    return {
      success: true,
      ...res.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to reset link",
      errorCode: err?.response?.data?.errorCode || null,
    };
  }
};
