/**
 * In-memory access token store.
 *
 * The access token is intentionally stored as a plain module-level variable.
 * It lives only in memory — never in localStorage, sessionStorage, or cookies —
 * so it cannot be exfiltrated by XSS scripts that read persistent storage.
 *
 * The trade-off: the token is lost on page refresh. This is expected and correct.
 * AuthContext calls /api/auth/refresh on mount to silently restore the session
 * using the HttpOnly refresh cookie that only the server can read.
 */

let _accessToken: string | null = null;

export function getAccessToken(): string | null {
  return _accessToken;
}

export function setAccessToken(token: string | null): void {
  _accessToken = token;
}

export function clearAccessToken(): void {
  _accessToken = null;
}
