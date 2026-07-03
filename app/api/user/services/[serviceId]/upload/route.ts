import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(
 req: Request,
 context: { params: Promise<{ serviceId: string }> },
) {
 try {
 const { serviceId } = await context.params;

 const authHeader = req.headers.get("authorization");
 if (!authHeader) {
 return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
 }

 const formData = await req.formData();
 const backendRes = await fetch(
 `${BASE}/user/services/${serviceId}/upload`,
 {
 method: "POST",
 headers: {
 Authorization: authHeader,
 },
 body: formData,
 },
 );

 const text = await backendRes.text();
 return new NextResponse(text, { status: backendRes.status });
 } catch (err) {
 console.error("Upload error:", err);
 return NextResponse.json(
 { success: false, message: "Internal server error" },
 { status: 500 },
 );
 }
}
