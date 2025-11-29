import api from "./axios";

interface ProfilePayload {
  uid: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  city?: string;
  state?: string;
  photoURL?: string;
}

export const getUserProfile = async (uid: string) => {
  try {
    const res = await api.get(`/auth/profile`, {
      params: { uid },
    });

    return res.data.data;
  } catch (err: any) {
    console.error("getUserProfile error:", err?.response?.data || err.message);
    return null;
  }
};

export const initUser = async (idToken: string, uid: string, email: string) => {
  try {
    const res = await api.post(
      `/auth/init-user`,
      { uid, email },
      {
        headers: { Authorization: `Bearer ${idToken}` },
      }
    );

    return res.data;
  } catch (err: any) {
    console.error("initUser error:", err?.response?.data || err.message);
    throw err;
  }
};

export const completeUserProfile = async (
  idToken: string,
  formData: ProfilePayload
) => {
  try {
    const res = await api.post(`/auth/complete-profile`, formData, {
      headers: { Authorization: `Bearer ${idToken}` },
    });

    return res.data;
  } catch (err: any) {
    console.error(
      "completeUserProfile error:",
      err?.response?.data || err.message
    );
    throw err;
  }
};

export const loginUser = async (idToken: string) => {
  try {
    const res = await api.post(
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
    return {
      success: false,
      message: err?.response?.data?.message || err.message,
    };
  }
};
