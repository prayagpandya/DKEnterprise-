import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching mock contact enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact enquiries" },
      { status: 500 },
    );
  }
}
