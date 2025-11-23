import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("select distinct ch from voca order by ch");

    if ((rows as any[]).length === 0) {
      return NextResponse.json([], { status: 200 });
    }
    return NextResponse.json(rows);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
