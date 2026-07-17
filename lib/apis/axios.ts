import axios from "axios";

/* ===================== SHARED TOKEN RENEW ===================== */

const renewToken = async (): Promise<string | null> => {
  try {
    const oldToken = localStorage.getItem("token");
    if (!oldToken) return null;

    // Use a direct axios call to avoid request interceptors on the renew endpoint itself
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/renew-token`, {
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

const attachAuthToken = (config: any) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
};

/* ===================== NEXT.JS SERVER API ===================== */
/* Calls /api/* → same origin */

export const serverApi = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

serverApi.interceptors.request.use(attachAuthToken);

/* ===================== BACKEND / FIREBASE API ===================== */
/* Calls external backend directly */

export const backendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

backendApi.interceptors.request.use(attachAuthToken);

// Automatic Token Expired Interceptor
backendApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err?.response?.data?.errorCode === "TOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await renewToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return backendApi(originalRequest);
      }
    }
    return Promise.reject(err);
  }
);
