// /app/api/voca/chapters/route.ts
import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // DB에서 모든 chapter 조회 (중복 제거)
    const chapters = await db.query("SELECT ch FROM voca");

    return NextResponse.json(chapters);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "챕터 조회 실패" }, { status: 500 });
  }
}
