// /app/api/voca/[ch]/route.ts
import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { ch: string } }
) {
  try {
    const { ch } = await params;
    const chNum = parseInt(ch, 10);
    const [rows] = await db.query("select * from voca where ch = ?", [chNum]);

    if ((rows as any[]).length === 0) {
      return NextResponse.json([], { status: 200 });
    }
    return NextResponse.json(rows);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
