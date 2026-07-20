/**
 * privateApi — Axios instance for authenticated requests.
 *
 * Request interceptor:  reads the access token from memory and injects it
 *                       as `Authorization: Bearer <token>`.
 *
 * Response interceptor: handles 401 Unauthorized responses.
 *   - Exactly ONE refresh call is made regardless of how many concurrent
 *     requests fail simultaneously (the isRefreshing / failedQueue pattern).
 *   - A _retry flag on the config prevents infinite refresh loops.
 *   - If the refresh itself fails, all queued requests are rejected and
 *     the user is considered logged out.
 *
 * We call the refresh through /api/auth/refresh (the Next.js proxy), which
 * forwards the HttpOnly refresh cookie to the backend without exposing it
 * to JavaScript.
 */

import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getAccessToken, setAccessToken } from "./tokenStore";

// ─── Extend AxiosRequestConfig with our _retry flag ──────────────────────────

interface RetryableConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// ─── Queue management ─────────────────────────────────────────────────────────

let isRefreshing = false;

type QueueEntry = {
  resolve: (token: string) => void;
  reject: (reason?: unknown) => void;
};

let failedQueue: QueueEntry[] = [];

function processQueue(error: unknown, token: string | null): void {
  failedQueue.forEach((entry) => {
    if (error) {
      entry.reject(error);
    } else {
      entry.resolve(token as string);
    }
  });
  failedQueue = [];
}

// ─── Reusable 401 Interceptor Attacher ────────────────────────────────────────

function attach401Interceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config as RetryableConfig;

      const is401 = error?.response?.status === 401;
      const alreadyRetried = originalRequest?._retry === true;

      if (!is401 || alreadyRetried) {
        return Promise.reject(error);
      }

      // Mark this request so it is never retried a second time.
      originalRequest._retry = true;

      if (isRefreshing) {
        // A refresh is already in flight — queue this request until it resolves.
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return instance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // This is the first 401 — start the refresh.
      isRefreshing = true;

      try {
        // POST to our Next.js proxy. The browser automatically includes the
        // HttpOnly refresh cookie in this same-origin request.
        const res = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        const newToken: string = res.data.accessToken;
        setAccessToken(newToken);
        processQueue(null, newToken);

        // Retry the original request with the new token.
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        // Refresh failed — clear auth state and reject all queued requests.
        setAccessToken(null);
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
  );
}

// ─── Axios instances ──────────────────────────────────────────────────────────

export const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const serverApi = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

attach401Interceptor(privateApi);
attach401Interceptor(serverApi);
