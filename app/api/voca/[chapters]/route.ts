// /app/api/voca/[chapter]/route.ts
import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { chapter: string } }
) {
  try {
    const { chapter } = params;

    const vocas = await db.query(
      "SELECT id, eng, kor, ch FROM voca WHERE ch = ? ORDER BY id ASC",
      [chapter]
    );

    if (vocas.length === 0) {
      return NextResponse.json(
        { error: "해당 챕터의 단어가 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(vocas);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "단어 조회 실패" }, { status: 500 });
  }
}
