import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching mock career applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch career applications" },
      { status: 500 },
    );
  }
}
