/**
 * publicApi — Axios instance for unauthenticated requests.
 *
 * Used for: login, signup, public endpoints.
 * Does NOT attach an Authorization header.
 * Does NOT have a 401 retry interceptor.
 */

import axios from "axios";

export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // allows Set-Cookie from backend during login
});
