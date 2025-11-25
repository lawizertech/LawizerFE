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
