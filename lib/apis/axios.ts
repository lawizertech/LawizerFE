/**
 * lib/apis/axios.ts — compatibility re-exports
 *
 * All code that previously imported serverApi / backendApi from this file
 * continues to work without change. Internally they now use the new
 * in-memory token store and proper 401-refresh interceptors defined in
 * lib/auth/privateApi.ts.
 *
 * Going forward, prefer importing directly from:
 *   - "@/lib/auth/publicApi"  — unauthenticated requests (login, signup)
 *   - "@/lib/auth/privateApi" — authenticated requests with auto-refresh
 */

export { serverApi } from "@/lib/auth/privateApi";
export { privateApi as backendApi } from "@/lib/auth/privateApi";
