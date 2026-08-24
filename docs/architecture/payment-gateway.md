# Payment Gateway Integration Guide

**Stack**: Razorpay · NestJS (backend) · Next.js (frontend)  
**Status**: Backend complete ✅ — Frontend Razorpay wiring **missing** (see gap analysis)

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Environment Variables](#2-environment-variables)
3. [Payment Flow — Step by Step](#3-payment-flow--step-by-step)
4. [Backend API Reference](#4-backend-api-reference)
5. [Next.js Proxy Routes](#5-nextjs-proxy-routes)
6. [Gap Analysis — What Needs to Be Built](#6-gap-analysis--what-needs-to-be-built)
7. [Implementation Guide](#7-implementation-guide)
8. [Error Handling Reference](#8-error-handling-reference)
9. [Testing Checklist](#9-testing-checklist)

---

## 1. Architecture Overview

```
BROWSER                          NEXT.JS (same origin)       NESTJS BACKEND          RAZORPAY
──────────                       ──────────────────────       ──────────────          ────────
                                                                                       
1. User clicks "Book Now"                                                              
   ↓                                                                                   
2. BookServiceTab.tsx                                                                  
   calls POST /api/user/start-process                                                  
   ↓                                       → POST /user/start-process                 
                                             CasesService.startProcess()              
                                             Creates case (pending_payment)           
                                             Creates Razorpay order          →  orders.create()
                                             Creates payments row                     
                                             Returns { order, keyId, process }  ←─────┘
                                         ←─────────────────────────────────────        
3. Frontend loads Razorpay SDK                                                         
   Opens Razorpay checkout popup                                                       
   User pays (UPI / Card / NetBanking)                                                 
   ↓                                                                                   
4. Razorpay returns handler payload                                                    
   { razorpay_payment_id,                                                              
     razorpay_order_id,                                                                
     razorpay_signature }                                                              
   ↓                                                                                   
5. Frontend calls POST /api/payments/verify                                            
   ↓                                       → POST /payments/verify                    
                                             Validates HMAC signature                 
                                             Updates payment → "verified"             
                                             Updates case → "paid"                    
                                         ← { success: true }                          
6. Frontend shows success screen                                                       
   Redirects to /user/dashboard?tab=services                                          
                                                                                       
────────── PARALLEL / ASYNC ───────────────────────────────────────────────────────────
                                                                                       
   Razorpay Webhook (server-to-server)                                                 
   POST /api/webhooks/razorpay  →  /payments/webhook                                  
   Verifies signature, updates DB (fallback reconciliation)                            
```

---

## 2. Environment Variables

### Frontend `.env.local`

```env
# Razorpay — only the PUBLIC key goes in the browser
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_TDmZY1F0wOyLxH

# Backend base URL (used by all proxy routes)
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

> **Rule**: `RAZORPAY_SECRET` and `RAZORPAY_WEBHOOK_SECRET` must **never** be
> referenced in browser code. They exist in `.env.local` only for server-side
> Next.js route handlers.

### Backend `.env`

```env
RAZORPAY_KEY_ID=rzp_test_TDmZY1F0wOyLxH
RAZORPAY_SECRET=u9vPtAxsw5EyfLuj82W6ZWqk
RAZORPAY_WEBHOOK_SECRET=your-razorpay-webhook-secret
```

---

## 3. Payment Flow — Step by Step

### Step 1 — Create Order (POST /api/user/start-process)

The frontend triggers this when the user confirms a service purchase. The
backend creates both the database `case` record and the Razorpay order atomically.

**Request**
```http
POST /api/user/start-process
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "serviceCode": "itr-filing",
  "clientDetails": {
    "fullName": "Rohan Sharma",
    "email": "rohan@example.com",
    "phone": "9876543210"
  },
  "urgency": "NORMAL"
}
```

**Success Response** `200 OK`
```json
{
  "success": true,
  "process": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "processCode": "550e8400-e29b-41d4-a716-446655440000",
    "status": "pending_payment"
  },
  "order": {
    "id": "order_PzFq7Yb1EM5K3N",
    "amount": 149900,
    "currency": "INR"
  },
  "keyId": "rzp_test_TDmZY1F0wOyLxH"
}
```

> `order.amount` is in **paise** (₹1499 → 149900). Do not convert it yourself —
> pass it directly to the Razorpay options object.

---

### Step 2 — Open Razorpay Checkout

Load the Razorpay SDK script and open the checkout modal using the order data
returned in Step 1.

```typescript
const options = {
  key: orderData.keyId,             // From backend response
  amount: orderData.order.amount,   // Paise — do not multiply
  currency: orderData.order.currency,
  name: "Lawizer",
  description: service.title,
  order_id: orderData.order.id,     // Razorpay order ID
  handler: async (response) => {
    // Step 3 — verify payment
    await verifyPayment(response, orderData.process.processCode);
  },
  prefill: {
    name: user.name,
    email: user.email,
    contact: user.phone,
  },
  theme: { color: "#c92c41" },
  modal: {
    ondismiss: () => {
      // User closed the modal without paying — handle gracefully
      setPaymentState("idle");
    },
  },
};

const rzp = new (window as any).Razorpay(options);
rzp.on("payment.failed", (response) => {
  setPaymentError(response.error.description);
  setPaymentState("failed");
});
rzp.open();
```

---

### Step 3 — Verify Payment (POST /api/payments/verify)

Called inside the Razorpay `handler` callback after successful payment.

**Request**
```http
POST /api/payments/verify
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "razorpay_payment_id": "pay_PzFq8Abc123XYZ",
  "razorpay_order_id":   "order_PzFq7Yb1EM5K3N",
  "razorpay_signature":  "abc123...hmac_sha256",
  "processCode":         "550e8400-e29b-41d4-a716-446655440000"
}
```

**Success Response** `200 OK`
```json
{
  "success": true,
  "message": "Payment verified and case activated successfully"
}
```

After this call succeeds:
- The `payments` row status becomes `"verified"`
- The `cases` row status becomes `"paid"`
- The user can now access the service workspace

---

### Step 4 — Show Result & Redirect

On success, show a confirmation screen for 2 seconds, then redirect:
```
router.push("/user/dashboard?tab=services")
```

On failure, display the error message from Razorpay and allow retry.

---

## 4. Backend API Reference

All routes are prefixed with `/api` (NestJS global prefix).

### POST `/api/user/start-process`

Creates the case and a Razorpay order. Returns the order details needed to
open the payment modal.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `serviceCode` | `string` | ✅ | Matches `services.service_id` in DB |
| `clientDetails.fullName` | `string` | ✅ | Pre-filled from auth context |
| `clientDetails.email` | `string` | ✅ | Pre-filled from auth context |
| `clientDetails.phone` | `string` | ✅ | Pre-filled from auth context |
| `urgency` | `"NORMAL" \| "URGENT"` | ❌ | Defaults to `"NORMAL"` |

**Headers**: `Authorization: Bearer <accessToken>`

**Error cases**:
- `400` — `serviceCode` missing
- `401` — Token missing or invalid
- `400` — Razorpay order creation failed (Razorpay API error)

---

### POST `/api/payments/verify`

Verifies the HMAC-SHA256 signature of the payment, then atomically marks the
payment and case as paid.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `razorpay_payment_id` | `string` | ✅ | From Razorpay handler callback |
| `razorpay_order_id` | `string` | ✅ | From Razorpay handler callback |
| `razorpay_signature` | `string` | ✅ | From Razorpay handler callback |
| `processCode` | `string` | ✅ | The `process.processCode` from start-process |

**Headers**: `Authorization: Bearer <accessToken>`

**Error cases**:
- `400` — Signature mismatch (payment tampered)
- `400` — Payment record not found for this order
- `400` — Any required field missing
- `401` — Token missing or invalid

---

### GET `/api/payments/history`

Returns the authenticated user's full payment history sorted by date
descending.

**Headers**: `Authorization: Bearer <accessToken>`

**Success Response**
```json
{
  "success": true,
  "history": [
    {
      "id": "uuid",
      "serviceTitle": "ITR Filing",
      "razorpayOrderId": "order_PzFq7Yb1EM5K3N",
      "razorpayPaymentId": "pay_PzFq8Abc123XYZ",
      "amount": "1499.00",
      "status": "verified",
      "createdAt": "2026-07-18T10:30:00.000Z",
      "verifiedAt": "2026-07-18T10:31:05.000Z"
    }
  ]
}
```

**Payment status values**:

| Status | Meaning |
|--------|---------|
| `created` | Order created, payment not attempted yet |
| `verified` | Payment received and signature validated |
| `failed` | Payment attempted but failed or signature mismatch |

---

### POST `/api/payments/webhook`

Razorpay calls this directly (server-to-server). It is a **backend-only** route
— the frontend never calls it. It acts as a reconciliation fallback in case the
user closes the browser before the `handler` fires.

**Header**: `x-razorpay-signature: <hmac>` (set by Razorpay)

Events handled:
- `order.paid` — Updates payment to `verified`, case to `paid`
- `payment.failed` — Updates payment to `failed`

---

## 5. Next.js Proxy Routes

These server-side route handlers sit between the browser and the backend,
forwarding the auth token while keeping secrets server-side.

### Existing Routes ✅

| Route | File | Purpose |
|-------|------|---------|
| `POST /api/user/start-process` | `app/api/user/start-process/route.ts` | Creates case + Razorpay order |
| `POST /api/payments/verify` | `app/api/payments/verify/route.ts` | Verifies payment signature |
| `GET /api/payments/history` | `app/api/payments/history/route.ts` | Fetches payment history |

### Missing Route ❌

| Route | File | Purpose |
|-------|------|---------|
| `POST /api/webhooks/razorpay` | `app/api/webhooks/razorpay/route.ts` | Proxies Razorpay webhooks to backend |

The webhook proxy needs special handling — it must forward the **raw body**
(not parsed JSON) to the backend so the HMAC signature remains valid:

```typescript
// app/api/webhooks/razorpay/route.ts
import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  const signature = req.headers.get("x-razorpay-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // Forward raw body — DO NOT call req.json() first
  const rawBody = await req.arrayBuffer();

  const backendRes = await fetch(`${BASE}/payments/webhook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-razorpay-signature": signature,
    },
    body: rawBody,
  });

  const data = await backendRes.json().catch(() => ({}));
  return NextResponse.json(data, { status: backendRes.status });
}
```

Register this URL in your Razorpay Dashboard:
```
https://your-domain.com/api/webhooks/razorpay
```

---

## 6. Gap Analysis — What Needs to Be Built

### Current State of `BookServiceTab.tsx`

`handleConfirmPurchase()` calls `POST /api/user/start-process` and then
immediately shows `orderSuccess = true` **without opening Razorpay or calling
verify**. The payment is never actually collected.

```typescript
// ❌ CURRENT — skips Razorpay entirely
const handleConfirmPurchase = async () => {
  await fetch("/api/user/start-process", { ... });
  setOrderSuccess(true);   // No Razorpay modal, no verify call
};
```

### What Needs to Change

| # | Component / File | Gap | Fix needed |
|---|-----------------|-----|------------|
| 1 | `BookServiceTab.tsx` | No Razorpay SDK loaded | Load script dynamically in `useEffect` |
| 2 | `BookServiceTab.tsx` | `handleConfirmPurchase` does not open Razorpay | Replace with 3-step flow: create order → open Razorpay → verify |
| 3 | `BookServiceTab.tsx` | No per-step payment state machine | Add `"idle" \| "creating" \| "paying" \| "verifying" \| "success" \| "failed"` state |
| 4 | `BookServiceTab.tsx` | No error handling for payment failure | Handle `payment.failed` event and show retry UI |
| 5 | `BookServiceTab.tsx` | Selected `paymentMethod` is unused | Pass `config.display.blocks` to Razorpay options |
| 6 | `app/api/payments/create-order/` | Directory exists but `route.ts` is missing | Not needed — `start-process` already creates the order |
| 7 | `app/api/webhooks/razorpay/` | Webhook proxy missing | Create route as shown in Section 5 |
| 8 | Proxy routes (`verify`, `start-process`) | Use legacy `renew-token` for token refresh | Replace with `/api/auth/refresh` cookie flow |

---

## 7. Implementation Guide

### 7.1 — Load the Razorpay Script

Add a custom hook so the SDK is loaded once and ready before the checkout
modal opens.

```typescript
// hooks/useRazorpay.ts
import { useEffect, useState } from "react";

export function useRazorpay(): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).Razorpay) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);
  }, []);

  return loaded;
}
```

---

### 7.2 — Payment State Machine

Replace the two booleans `submittingOrder` / `orderSuccess` with a single
state string so each UI step is explicit and the user always gets the right
feedback.

```typescript
type PaymentState =
  | "idle"       // Default — user viewing modal
  | "creating"   // Calling POST /api/user/start-process
  | "paying"     // Razorpay modal open, waiting for user
  | "verifying"  // Calling POST /api/payments/verify
  | "success"    // Payment verified, case activated
  | "failed";    // Any error occurred

const [paymentState, setPaymentState] = useState<PaymentState>("idle");
const [paymentError, setPaymentError] = useState<string | null>(null);
```

---

### 7.3 — Replace `handleConfirmPurchase`

This is the complete replacement for the current broken implementation.

```typescript
const razorpayReady = useRazorpay();

const handleConfirmPurchase = async () => {
  if (!selectedService || !razorpayReady) return;

  setPaymentState("creating");
  setPaymentError(null);

  try {
    const { getAccessToken } = await import("@/lib/auth/tokenStore");
    const token = getAccessToken();

    // ── Step 1: Create case + Razorpay order ──────────────────────────────
    const orderRes = await fetch("/api/user/start-process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        serviceCode: selectedService.serviceCode,
        clientDetails: {
          fullName: user?.name || "Client",
          email: user?.email || "",
          phone: (user as any)?.phone || "9999999999",
        },
        urgency: "NORMAL",
      }),
    });

    if (!orderRes.ok) {
      const err = await orderRes.json().catch(() => ({}));
      throw new Error(err.message || "Failed to create order");
    }

    const orderData = await orderRes.json();

    if (!orderData.success) {
      throw new Error(orderData.message || "Failed to create order");
    }

    // ── Step 2: Open Razorpay checkout modal ──────────────────────────────
    setPaymentState("paying");

    await new Promise<void>((resolve, reject) => {
      const options = {
        key: orderData.keyId,
        amount: orderData.order.amount,   // Already in paise
        currency: orderData.order.currency,
        name: "Lawizer",
        description: selectedService.title,
        order_id: orderData.order.id,
        // Map the UI payment method selector to Razorpay display options
        config: {
          display: {
            blocks: {
              utib: {
                name: "Pay using UPI",
                instruments: [
                  { method: paymentMethod === "upi" ? "upi" : paymentMethod === "card" ? "card" : "netbanking" },
                ],
              },
            },
            sequence: ["block.utib"],
            preferences: { show_default_blocks: paymentMethod === "netbanking" },
          },
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: (user as any)?.phone || "",
        },
        theme: { color: "#c92c41" },
        modal: {
          ondismiss: () => {
            // User closed without paying — return to idle so they can retry
            setPaymentState("idle");
            resolve();
          },
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          // ── Step 3: Verify payment signature ───────────────────────────
          setPaymentState("verifying");

          try {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                processCode: orderData.process.processCode,
              }),
            });

            const verifyData = await verifyRes.json().catch(() => ({}));

            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.message || "Payment verification failed");
            }

            setPaymentState("success");
            setTimeout(() => {
              setIsCheckoutOpen(false);
              setPaymentState("idle");
              router.push("/user/dashboard?tab=services");
            }, 2000);

            resolve();
          } catch (verifyErr: any) {
            setPaymentError(verifyErr.message || "Verification failed");
            setPaymentState("failed");
            reject(verifyErr);
          }
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        setPaymentError(response.error.description || "Payment failed");
        setPaymentState("failed");
        reject(new Error(response.error.description));
      });
      rzp.open();
    });
  } catch (err: any) {
    if (paymentState !== "idle") {
      setPaymentError(err.message || "Something went wrong");
      setPaymentState("failed");
    }
  }
};
```

---

### 7.4 — Update the Modal UI

Replace the two old `submittingOrder` / `orderSuccess` booleans in the modal
body with a switch on `paymentState`.

```tsx
{/* Inside the modal — replaces the existing ternary */}
{paymentState === "success" ? (
  <div className="p-10 text-center space-y-4">
    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
      <CheckCircle2 className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-gray-900">Payment Successful!</h3>
    <p className="text-xs text-gray-500 max-w-xs mx-auto">
      Your service is now active. Redirecting to your workspace...
    </p>
  </div>
) : paymentState === "failed" ? (
  <div className="p-8 space-y-4">
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
      <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
      <p className="text-sm font-semibold text-red-800">Payment Failed</p>
      <p className="text-xs text-red-600 mt-1">{paymentError}</p>
    </div>
    <button
      onClick={() => { setPaymentState("idle"); setPaymentError(null); }}
      className="w-full py-3 bg-[#c92c41] hover:bg-[#a8233a] text-white font-bold text-sm rounded-xl"
    >
      Try Again
    </button>
  </div>
) : (
  // ... existing form body (pricing, contact, payment method, submit button)

  // Replace the submit button with:
  <button
    onClick={handleConfirmPurchase}
    disabled={!razorpayReady || paymentState !== "idle"}
    className="w-full py-3.5 bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-gray-300 text-white font-bold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
  >
    {paymentState === "creating" && (
      <><Loader2 className="w-4 h-4 animate-spin" /> Preparing your order...</>
    )}
    {paymentState === "verifying" && (
      <><Loader2 className="w-4 h-4 animate-spin" /> Confirming payment...</>
    )}
    {paymentState === "idle" && (
      <><Zap className="w-4 h-4 fill-white" /> Confirm & Pay ₹{selectedService.price.toLocaleString("en-IN")}</>
    )}
    {!razorpayReady && "Loading payment gateway..."}
  </button>
)}
```

---

### 7.5 — Create the Webhook Proxy Route

```typescript
// app/api/webhooks/razorpay/route.ts
import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  const signature = req.headers.get("x-razorpay-signature");

  if (!signature) {
    return NextResponse.json(
      { success: false, message: "Missing webhook signature" },
      { status: 400 }
    );
  }

  // Forward the raw body exactly as received — DO NOT parse as JSON first
  // Parsing would break the HMAC signature verification on the backend
  const rawBody = await req.arrayBuffer();

  try {
    const backendRes = await fetch(`${BASE}/payments/webhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-razorpay-signature": signature,
      },
      body: rawBody,
    });

    const data = await backendRes.json().catch(() => ({ success: true }));
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err) {
    console.error("[webhook] Error forwarding to backend:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
```

Register this URL in **Razorpay Dashboard → Webhooks**:
```
https://your-domain.com/api/webhooks/razorpay
```
Select events: `order.paid` and `payment.failed`.

---

### 7.6 — Add Payment API Functions to `lib/apis/api.ts`

Keep payment calls consistent with the rest of the API layer.

```typescript
// Add to lib/apis/api.ts

export interface StartProcessPayload {
  serviceCode: string;
  clientDetails: { fullName: string; email: string; phone: string };
  urgency?: "NORMAL" | "URGENT";
}

export interface StartProcessResponse {
  success: boolean;
  process: { id: string; processCode: string; status: string };
  order: { id: string; amount: number; currency: string };
  keyId: string;
}

export const startProcess = async (
  payload: StartProcessPayload
): Promise<StartProcessResponse> => {
  const res = await serverApi.post("/api/user/start-process", payload);
  return res.data;
};

export interface VerifyPaymentPayload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  processCode: string;
}

export const verifyPayment = async (
  payload: VerifyPaymentPayload
): Promise<{ success: boolean; message: string }> => {
  const res = await serverApi.post("/api/payments/verify", payload);
  return res.data;
};

export const getPaymentHistory = async (): Promise<{
  success: boolean;
  history: Array<{
    id: string;
    serviceTitle: string;
    razorpayOrderId: string | null;
    razorpayPaymentId: string | null;
    amount: string;
    status: string;
    createdAt: string | null;
    verifiedAt: string | null;
  }>;
}> => {
  const res = await serverApi.get("/api/payments/history");
  return res.data;
};
```

Then replace the raw `fetch()` calls in `BookServiceTab` and
`TransactionsTab` with these typed helpers. `serverApi` from `privateApi.ts`
automatically injects the Authorization header and handles 401 refresh.

---

### 7.7 — Fix Proxy Routes: Replace Legacy Token Renewal

Both `verify/route.ts` and `start-process/route.ts` currently use the legacy
`/auth/renew-token` pattern. They should instead let `privateApi`'s interceptor
handle refresh automatically — or in server-side routes, forward the cookie.

The minimal fix is to update the auth refresh call in server-side routes to use
the new `/auth/refresh` endpoint:

```typescript
// Replace this in start-process/route.ts and verify/route.ts:
async function renewToken(authHeader: string) {
  const renewRes = await fetch(`${BASE}/auth/renew-token`, { ... });
  return renewData?.newToken || null;
}

// With this:
async function refreshAccessToken(req: Request): Promise<string | null> {
  const cookieHeader = req.headers.get("cookie") || "";
  const refreshRes = await fetch(`${BASE}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": cookieHeader,   // Forward HttpOnly refreshToken cookie
    },
    credentials: "include",
  });
  if (!refreshRes.ok) return null;
  const data = await refreshRes.json().catch(() => null);
  return data?.accessToken ?? null;
}
```

> **Note**: For server-to-server calls, you need to explicitly forward the
> `Cookie` header from the incoming request since the HttpOnly cookie won't be
> sent automatically.

---

## 8. Error Handling Reference

### Razorpay SDK Errors

The `payment.failed` event payload structure:

```typescript
{
  error: {
    code: "BAD_REQUEST_ERROR",        // Error class
    description: "Payment failed",    // Human-readable — show to user
    source: "customer",               // "customer" | "bank" | "gateway"
    step: "payment_authorization",
    reason: "payment_failed",
    metadata: {
      order_id: "order_...",
      payment_id: "pay_..."
    }
  }
}
```

Common `reason` values and what to show the user:

| `reason` | User message |
|----------|-------------|
| `payment_failed` | Payment declined. Please try a different payment method. |
| `payment_cancelled` | Payment cancelled. Your booking was not confirmed. |
| `payment_error` | Something went wrong with the payment. Please retry. |
| `invalid_vpa` | Invalid UPI ID. Please check and try again. |
| `insufficient_funds` | Insufficient funds. Please try a different method. |
| `bank_not_available` | Your bank is temporarily unavailable. Try a different method. |

---

### Backend Verification Errors

| HTTP | `message` | What it means | Frontend action |
|------|-----------|---------------|-----------------|
| `400` | "Payment verification failed: signature mismatch" | Response data was tampered with | Show "Payment could not be verified. Contact support." |
| `400` | "Payment record not found for this order" | DB and Razorpay are out of sync | Show "Order not found. Contact support." |
| `400` | "Missing required payment verification parameters" | Bug — verify all four fields are sent | Log to console, show generic error |
| `401` | "Authorization token missing" | Token expired mid-checkout | Trigger silent refresh then retry |

---

### Network / Fetch Errors

Wrap all `fetch` calls in try/catch and handle these cases:

```typescript
catch (err: any) {
  if (err.name === "TypeError" && err.message.includes("fetch")) {
    setPaymentError("Network error. Please check your connection and retry.");
  } else {
    setPaymentError(err.message || "Something went wrong. Please retry.");
  }
  setPaymentState("failed");
}
```

---

## 9. Testing Checklist

### Local Testing Setup

1. Start the backend with test Razorpay keys:
   ```bash
   cd /Users/suvanghosh/Supabase-host
   RAZORPAY_KEY_ID=rzp_test_TDmZY1F0wOyLxH RAZORPAY_SECRET=u9vPtAxsw5EyfLuj82W6ZWqk npm run start:dev
   ```

2. Start the frontend:
   ```bash
   cd /Users/suvanghosh/LawizerFE
   npm run dev
   ```

3. Ensure `.env.local` has:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_TDmZY1F0wOyLxH
   ```

### Razorpay Test Cards

| Scenario | Card Number | CVV | Expiry |
|----------|-------------|-----|--------|
| Success | `4111 1111 1111 1111` | Any | Any future |
| Authentication required | `4000 0000 0000 3220` | Any | Any future |
| Failure (insufficient funds) | `5104 0155 5555 5558` | Any | Any future |
| Failure (card declined) | `4000 0000 0000 0002` | Any | Any future |

### Test UPI

Use `success@razorpay` as the UPI ID to simulate a successful UPI payment in
test mode.

### Functional Test Scenarios

| Scenario | Steps | Expected Result |
|----------|-------|----------------|
| Happy path — UPI | Login → Book Now → select UPI → pay → verify | `paymentState === "success"`, case status `paid`, redirect to dashboard |
| Happy path — Card | Login → Book Now → select Card → pay → verify | Same as above |
| User closes modal | Open Razorpay modal → click × | `paymentState === "idle"`, modal stays open for retry |
| Payment failure | Use declined card | `paymentState === "failed"`, error message shown, "Try Again" button appears |
| Network error on verify | Block `/api/payments/verify` in DevTools → pay | `paymentState === "failed"`, error message shown |
| Expired token during checkout | Expire access token manually → pay | Token refreshes silently, flow continues |
| Double-click submit | Click "Confirm & Pay" twice quickly | Second click ignored (button disabled during `"creating"` state) |

### Verify DB State After Each Test

```sql
-- Check case status
SELECT id, case_type, status FROM cases ORDER BY created_at DESC LIMIT 5;

-- Check payment record
SELECT id, razorpay_order_id, razorpay_payment_id, status, amount
FROM payments ORDER BY created_at DESC LIMIT 5;
```

After a successful payment:
- `cases.status` = `"paid"`
- `payments.status` = `"verified"`
- `payments.razorpay_payment_id` = populated
- `payments.verified_at` = timestamp

After a failed payment:
- `cases.status` = `"pending_payment"`
- `payments.status` = `"failed"`

---

## Data Model Quick Reference

```
services         ← Static service catalog
  service_id     ← serviceCode used in start-process
  price          ← Amount in INR (backend multiplies × 100 for paise)

cases            ← One per booking attempt
  client_id      ← Authenticated user's UID
  case_type      ← serviceCode
  status         ← pending_payment → paid → completed

payments         ← One per case
  case_id        ← Foreign key to cases
  razorpay_order_id  ← From Razorpay orders.create()
  razorpay_payment_id ← From Razorpay handler callback
  status         ← created → verified | failed
  amount         ← In INR (not paise)
  verified_at    ← Timestamp of successful verification
```

---

## Dependency to Install

The Razorpay checkout script is loaded dynamically via the `useRazorpay` hook
(no npm package needed). There is no `npm install` required for the Razorpay
checkout integration.

The backend already uses `razorpay` npm package — no change needed there.

---

*Last updated: July 2026 · Backend: NestJS + Razorpay · Frontend: Next.js 14*
