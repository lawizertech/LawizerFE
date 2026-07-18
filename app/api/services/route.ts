import { NextResponse } from "next/server";
import { getAllServices } from "@/lib/apis/services";

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json({
      success: true,
      services,
    });
  } catch (error) {
    console.error("GET /api/services error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
