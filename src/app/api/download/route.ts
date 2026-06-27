import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { error: "Downloads are disabled because database integration is removed." },
    { status: 404 },
  );
}
