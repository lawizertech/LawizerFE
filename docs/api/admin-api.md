# 🛡️ Lawizer Admin Panel API & Integration Guide

This document contains master admin credentials, base URLs, authentication headers, and comprehensive API specifications for integrating the **Lawizer Admin Panel**.

---

## 🔑 1. Master Admin Credentials

| Parameter | Value |
| :--- | :--- |
| **Admin Email** | `admin@lawizer.com` |
| **Admin Password** | `AdminPassword123!` |
| **Admin Role** | `admin` |
| **Master Admin User ID** | `097761d6-a9ad-4a17-8910-2500c303628a` |

---

## 🌐 2. Base URLs & Authentication Headers

| Target Layer | Base URL |
| :--- | :--- |
| **NestJS Backend API** | `http://localhost:4000/api` *(or production domain)* |
| **Next.js Web Proxy API** | `http://localhost:3000/api` |

### Required Authorization Header
For all protected admin routes, attach the `accessToken` returned during admin login:
```http
Authorization: Bearer <ACCESS_TOKEN>
Content-Type: application/json
```

---

## 🔐 3. Authentication APIs

### 1. Admin Login
- **Endpoint:** `POST /api/admin/login` *(or `/api/auth/login`)*
- **Access:** Public
- **Request Body:**
  ```json
  {
    "email": "admin@lawizer.com",
    "password": "AdminPassword123!"
  }
  ```
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "accessToken": "eyJhbGciOiJFUzI1Ni...",
    "refreshToken": "bbzirtyy...",
    "data": {
      "id": "097761d6-a9ad-4a17-8910-2500c303628a",
      "name": "Lawizer Master Admin",
      "email": "admin@lawizer.com",
      "role": "admin"
    }
  }
  ```

---

## 👥 4. User (Client) Management APIs

### 1. Get All Registered Clients
- **Endpoint:** `GET /api/admin/users`
- **Access:** Admin / Authenticated
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "373a1176-112f-4a78-aa99-d8bfc00a1d96",
        "name": "Aditya Sharma",
        "email": "aditya.client@lawizer.com",
        "phone": "+919876543210",
        "role": "client",
        "created_at": "2026-07-20T05:30:00.000Z"
      }
    ]
  }
  ```

### 2. Get Single User Profile
- **Endpoint:** `GET /api/auth/profile?uid=<USER_ID>`
- **Access:** Admin / Authenticated

---

## ⚖️ 5. External Experts / Legal Professionals APIs

### 1. Get All Registered Experts
- **Endpoint:** `GET /api/admin/experts`
- **Access:** Admin / Authenticated
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "b247e686-0631-4a1c-9adf-9559af1d919d",
        "name": "CA Rajesh Varma",
        "email": "rajesh.varma@lawizer.com",
        "phone": "+919876543211",
        "role": "professional",
        "created_at": "2026-07-20T05:30:00.000Z"
      }
    ]
  }
  ```

### 2. Register New Expert Account
- **Endpoint:** `POST /api/auth/signup` *(or `/api/auth/register`)*
- **Request Body:**
  ```json
  {
    "uid": "<SUPABASE_AUTH_UID>",
    "name": "CA Rajesh Varma",
    "email": "rajesh.varma@lawizer.com",
    "phoneNumber": "+919876543211",
    "role": "professional"
  }
  ```

---

## 📑 6. Cases & Service Requests APIs

### 1. Get All Cases & Requests
- **Endpoint:** `GET /api/admin/cases`
- **Access:** Admin / Authenticated
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "25a099be-bc52-4a8f-83b6-47b669e5ac6d",
        "case_type": "Corporate Legal & Tax Consultation",
        "status": "in_progress",
        "created_at": "2026-07-20T11:48:42.866Z",
        "client": {
          "id": "373a1176-112f-4a78-aa99-d8bfc00a1d96",
          "name": "Aditya Sharma",
          "email": "aditya.client@lawizer.com"
        },
        "professional": {
          "id": "b247e686-0631-4a1c-9adf-9559af1d919d",
          "name": "CA Rajesh Varma",
          "email": "rajesh.varma@lawizer.com"
        }
      }
    ]
  }
  ```

### 2. Assign / Reassign Expert to Case
- **Endpoint:** `POST /api/admin/assign` *(or `/api/admin/assign-case`)*
- **Access:** Admin / Authenticated
- **Request Body:**
  ```json
  {
    "caseId": "25a099be-bc52-4a8f-83b6-47b669e5ac6d",
    "professionalId": "b247e686-0631-4a1c-9adf-9559af1d919d",
    "clientId": "373a1176-112f-4a78-aa99-d8bfc00a1d96",
    "caseType": "Corporate Legal & Tax Consultation",
    "title": "Corporate Tax Compliance Case"
  }
  ```
- **Response (`200 OK`):** Returns updated case row with client & assigned expert relations attached. Updates real-time listeners across client & expert dashboards instantly.

---

## 📁 7. Case Documents Management APIs

### 1. Upload Case Document
- **Endpoint:** `POST /api/user/services/:serviceId/upload`
- **Content-Type:** `multipart/form-data`
- **Form Fields:**
  - `documentKey`: `"general_document"` *(or specific key)*
  - `file`: `<BINARY_FILE_BUFFER>`
- **Response (`200 OK`):** Uploads directly to Supabase Storage bucket `case_documents` and indexes metadata in PostgreSQL `case_documents` table.

### 2. Get Case Documents
- **Endpoint:** `GET /api/documents?caseId=<CASE_ID>`
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "documents": [
      {
        "id": "c0e4c9a4-4683-46d2-b5c8-534e8a3523a0",
        "caseId": "25a099be-bc52-4a8f-83b6-47b669e5ac6d",
        "name": "Tax_Filing_2026.pdf",
        "fileUrl": "https://jtrrfhmnonxnjrkeydvl.supabase.co/storage/v1/object/public/case_documents/...",
        "createdAt": "2026-07-20T14:10:35.397Z"
      }
    ]
  }
  ```

### 3. Delete Document
- **Endpoint:** `DELETE /api/documents/:documentId`
- **Response (`200 OK`):** Removes file from Supabase Storage and deletes database index row.

---

## 💳 8. Transactions & Billing APIs

### 1. Get All Payments & Transactions
- **Endpoint:** `GET /api/admin/transactions`
- **Access:** Admin / Authenticated
- **Response (`200 OK`):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "pay_12345",
        "case_id": "25a099be-bc52-4a8f-83b6-47b669e5ac6d",
        "amount": 999,
        "status": "captured",
        "created_at": "2026-07-20T11:48:42.866Z",
        "case": {
          "client": {
            "name": "Aditya Sharma",
            "email": "aditya.client@lawizer.com"
          }
        }
      }
    ]
  }
  ```

---

## 🧪 9. Ready-to-Run cURL Examples

```bash
# 1. Admin Login
curl -X POST http://localhost:4000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@lawizer.com","password":"AdminPassword123!"}'

# 2. Get All Users
curl http://localhost:4000/api/admin/users

# 3. Get All Experts
curl http://localhost:4000/api/admin/experts

# 4. Get All Cases
curl http://localhost:4000/api/admin/cases

# 5. Assign Case to Expert
curl -X POST http://localhost:4000/api/admin/assign \
  -H "Content-Type: application/json" \
  -d '{
    "caseId": "25a099be-bc52-4a8f-83b6-47b669e5ac6d",
    "professionalId": "b247e686-0631-4a1c-9adf-9559af1d919d"
  }'

# 6. Get All Transactions
curl http://localhost:4000/api/admin/transactions
```
