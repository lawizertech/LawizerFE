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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/profile?uid=${uid}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch profile.");
    }

    return data.data;
  } catch (err: any) {
    console.error("getUserProfile error:", err.message);
    return null;
  }
};

export const initUser = async (idToken: string, uid: string, email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/init-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ uid, email }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to initialize user.");
    }

    return data;
  } catch (err: any) {
    console.error("initUser error:", err.message);
    throw err;
  }
};

export const completeUserProfile = async (
  idToken: string,
  formData: ProfilePayload
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/complete-profile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to complete profile.");
    }

    return data;
  } catch (err: any) {
    console.error("completeUserProfile error:", err.message);
    throw err;
  }
};

export async function loginUser(idToken: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ idToken }),
      }
    );

    const data = await res.json();

    return {
      success: res.ok,
      ...data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
