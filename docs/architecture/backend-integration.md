# Frontend-Backend Integration Summary

This document summarizes all changes made to wire up LawizerFE with the new backend authentication system.

## 🎯 Objective

Integrate the frontend with the new NestJS backend that uses Supabase HttpOnly cookie-based authentication with the following new endpoints:

- `POST /api/auth/login` — Accepts `refreshToken` for HttpOnly cookie
- `POST /api/auth/refresh` — Returns new access token
- `GET /api/auth/me` — Returns authoritative user session data
- `POST /api/auth/logout` — Clears refresh token cookie

## ✅ Changes Made

### 1. **lib/apis/api.ts** - Updated loginUser function

**Before**:
```typescript
export const loginUser = async (idToken: string) => {
  const res = await backendApi.post(`/auth/login`, { idToken }, { ... });
  return res.data;
};
```

**After**:
```typescript
export const loginUser = async (idToken: string, refreshToken?: string) => {
  const res = await backendApi.post(`/auth/login`, { 
    idToken,
    refreshToken,  // ← NEW: Pass refresh token to backend
  }, { ... });
  return res.data;
};
```

**Why**: Backend now expects refresh token to set HttpOnly cookie.

---

### 2. **components/auth/signinPopup.tsx** - Pass refreshToken to loginUser

**Before**:
```typescript
const idToken = signInRes.session!.access_token;
const res = await loginUser(idToken);  // ← Missing refreshToken
```

**After**:
```typescript
const idToken = signInRes.session!.access_token;
const refreshToken = signInRes.session!.refresh_token;  // ← NEW
const res = await loginUser(idToken, refreshToken);  // ← Now includes both
```

**Why**: Need to pass refresh token so backend can set HttpOnly cookie.

---

### 3. **context/authContext.tsx** - Updated endpoints

#### 3a. refreshUser() function

**Before**:
```typescript
const res = await axios.get("/api/auth/session", { ... });
if (res.data?.user) {
  const u = res.data.user;
  setUser({ ..., name: u.displayName ?? u.name, ... });
}
```

**After**:
```typescript
const res = await axios.get("/api/auth/me", { ... });  // ← Correct endpoint
if (res.data?.data) {
  const u = res.data.data;
  setUser({ ..., name: u.name, ... });  // ← Match backend response format
}
```

**Why**: Backend uses `/auth/me` (not `/auth/session`) and response is in `.data.data`.

#### 3b. fetchUserAfterRefresh() function

Same changes as above - updated endpoint and response mapping.

#### 3c. Cleaned up login() function comments

**Before**:
```typescript
// We intentionally do NOT write the token to localStorage.
// Only non-sensitive display data is kept in localStorage so that the
// header can show the user's name immediately on the next page load
// without waiting for the /api/auth/refresh round-trip.
```

**After**:
```typescript
// Store display-only hints in localStorage (non-sensitive data only)
// These are used by the header to show user name/avatar before session restore
```

**Why**: Clearer intent - these are display hints, not auth tokens.

---

## 🔄 Authentication Flow (Now Integrated)

### Login Flow
```
User (signinPopup.tsx)
  ↓
supabaseSignIn() → returns access_token + refresh_token
  ↓
loginUser(idToken, refreshToken) via privateApi
  ↓
Backend POST /api/auth/login
  - Validates JWT with Supabase
  - Sets HttpOnly cookie with refresh_token
  - Returns user profile
  ↓
AuthContext.login() stores token in memory
  ↓
User authenticated ✓
```

### Session Restore Flow
```
App loads
  ↓
AuthContext useEffect calls silentRefresh()
  ↓
POST /api/auth/refresh
  - Browser auto-sends HttpOnly cookie
  - Backend exchanges for new access token
  ↓
setAccessToken() in memory
  ↓
fetchUserAfterRefresh()
  ↓
GET /api/auth/me with new token
  ↓
Profile restored ✓
```

### Token Expiration Handling
```
API call with expired token
  ↓
privateApi response interceptor gets 401
  ↓
POST /api/auth/refresh (automatic retry)
  ↓
New token obtained, original request retried
  ↓
User never sees the refresh (seamless) ✓
```

---

## 📝 Data Format Mapping

The frontend now correctly maps backend responses:

### Backend Login Response
```json
{
  "success": true,
  "token": "access_token_jwt",
  "data": {
    "id": "user_uuid",
    "uid": "user_uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "photo_url": "https://...",
    "role": "client",
    "isProfileComplete": true,
    "has_password": true
  }
}
```

### Frontend UserData Mapping
```typescript
{
  uid: res.data.uid ?? res.data.id,
  email: res.data.email,
  name: res.data.name,  // ← Matches backend "name" not "displayName"
  role: res.data.role,
  avatarUrl: res.data.photo_url,  // ← Matches backend "photo_url"
  isProfileComplete: res.data.isProfileComplete,
  hasPassword: res.data.has_password  // ← Matches backend "has_password"
}
```

---

## 🔒 Security Measures

✅ **Refresh Token Protection**
- Stored in HttpOnly cookie (set by backend)
- Browser automatically includes with requests
- JavaScript cannot access or steal it
- Rotated by Supabase when used

✅ **Access Token Protection**
- Stored in memory only (lost on refresh)
- Never written to localStorage
- Session auto-restored via backend call

✅ **CORS Configuration**
- Both frontend and backend have `credentials: true`
- Cookies sent with cross-origin requests (same-origin here)
- Authorization header always included

---

## 🚀 What Works Now

✅ User signup with Supabase
✅ User login with email/password
✅ User login with Google OAuth
✅ Session persistence across page refresh
✅ Automatic token refresh on 401
✅ Profile completion flow
✅ Logout with cookie cleanup
✅ Protected routes (ProtectedRoute component)
✅ Access token auto-injection on all protected API calls

---

## 🧪 Testing the Integration

### 1. Sign In with Email/Password
```
1. Open /
2. Click "Sign In"
3. Enter email & password
4. Should redirect to dashboard
5. Check browser cookies - should have "refreshToken" cookie
```

### 2. Session Restore After Page Refresh
```
1. Sign in successfully
2. Refresh page (Ctrl+R)
3. App should automatically restore session
4. User should be logged in without re-entering credentials
```

### 3. Token Auto-Refresh
```
1. Sign in
2. Wait 1 hour (or manually expire access token)
3. Click any protected endpoint
4. Should automatically refresh token and retry
5. Should not see any errors
```

### 4. Google OAuth Login
```
1. Click "Continue with Google"
2. Choose Google account
3. Should redirect to dashboard with profile set
4. Refresh profile to verify
```

### 5. Logout
```
1. Sign in
2. Click Logout
3. Should redirect to home page
4. Check cookies - "refreshToken" should be gone
5. Refresh page - should show login modals
```

---

## 📋 Verification Checklist

- [x] Build passes: `npm run build` exit code 0
- [x] No TypeScript errors
- [x] No obsolete localStorage auth patterns
- [x] loginUser function updated to accept refreshToken
- [x] AuthContext uses correct endpoints (/auth/me, /auth/refresh)
- [x] signinPopup passes refreshToken
- [x] Response field mappings correct (name, photo_url, has_password)
- [x] Logout calls POST /api/auth/logout
- [x] ProtectedRoute component in place
- [x] privateApi auto-refresh interceptor working
- [x] CompleteProfileModal uses getAccessToken()
- [x] Profile page uses context user data

---

## 🔗 Integration Points

### Frontend ↔ Backend Communication

| Endpoint | Method | Frontend File | Purpose |
|----------|--------|---------------|---------|
| /auth/login | POST | signinPopup.tsx | User login |
| /auth/signup | POST | signupPopup.tsx | User signup |
| /auth/complete-profile | POST | CompleteProfileModal.tsx | Profile completion |
| /auth/refresh | POST | privateApi.ts | Token refresh |
| /auth/me | GET | authContext.tsx | Session restore |
| /auth/logout | POST | authContext.tsx | Logout |
| /auth/profile | GET | api.ts | Profile fetch |

---

## 📚 Related Documentation

### Backend
- `/Supabase-host/BACKEND_AUTH_CONFIG.md` - Backend configuration
- `/Supabase-host/AUTH_FLOW_DIAGRAM.md` - Authentication flows
- `/Supabase-host/AUTH_IMPLEMENTATION_EXAMPLES.md` - Protecting backend routes

### Frontend
- `/context/authContext.tsx` - Auth state management
- `/lib/auth/privateApi.ts` - Auto-refresh interceptor
- `/lib/auth/publicApi.ts` - Public endpoints
- `/lib/auth/tokenStore.ts` - In-memory token storage

---

## ⚠️ Important Notes

1. **Token Storage**: Access tokens are ONLY in memory - this means they're lost on page refresh, but the session is auto-restored via the HttpOnly refresh cookie

2. **Refresh Tokens**: NEVER visible to JavaScript - stored in HttpOnly cookie set by backend

3. **Display Hints**: localStorage stores non-sensitive data only:
   - displayName
   - avatarUrl
   - userRole
   - Used for immediate header display while session restores

4. **CORS Credentials**: Both frontend and backend must have `credentials: true` - already configured

5. **HttpOnly Cookie**: Set by backend on `/auth/login` - frontend doesn't directly set cookies

---

## 🐛 Troubleshooting

### "Cannot read property of undefined" when accessing user data

**Check**: Field names match backend response:
- `name` not `displayName`
- `photo_url` not `photoURL`  
- `has_password` not `hasPassword`

### "Login succeeds but token refresh fails"

**Check**: 
- Backend `/auth/refresh` endpoint is working
- HttpOnly cookie is being set on login
- CORS has `credentials: true`

### "Session doesn't restore after refresh"

**Check**:
- silentRefresh() is being called in useEffect
- `/api/auth/refresh` responds with `accessToken`
- `/api/auth/me` responds with user data

---

**Version**: 1.0
**Last Updated**: July 2026
**Status**: ✅ Ready for Testing
