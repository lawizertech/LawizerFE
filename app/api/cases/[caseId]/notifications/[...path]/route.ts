import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@/lib/supabase/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export async function GET(req: NextRequest, { params }: { params: Promise<{ caseId: string; path: string[] }> }) {
  try {
    const resolvedParams = await params;
    const { caseId, path } = resolvedParams;
    const pathStr = path.join("/");
    const url = new URL(req.url);
    const queryString = url.search;

    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    
    if (session?.access_token) {
      headers["Authorization"] = `Bearer ${session.access_token}`;
    }

    const targetUrl = `${BACKEND_URL}/notifications/case/${caseId}/${pathStr}${queryString}`;
    const res = await fetch(targetUrl, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("[/api/cases/:caseId/notifications proxy GET] Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to fetch notifications backend" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ caseId: string; path: string[] }> }) {
  try {
    const resolvedParams = await params;
    const { caseId, path } = resolvedParams;
    const pathStr = path.join("/");
    const body = await req.json();

    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    
    if (session?.access_token) {
      headers["Authorization"] = `Bearer ${session.access_token}`;
    }

    const targetUrl = `${BACKEND_URL}/notifications/case/${caseId}/${pathStr}`;
    const res = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("[/api/cases/:caseId/notifications proxy POST] Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to post notifications backend" }, { status: 500 });
  }
}
