// /app/voca/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ChapterType {
  ch: number;
}

export default function VocaPage() {
  const [chapters, setChapters] = useState<ChapterType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`/api/voca`);
        // ↑ /api/voca/[ch] 말고 /api/voca 엔드포인트로
        if (!response.ok) throw new Error("Failed to fetch chapters");
        const data = await response.json();
        setChapters(data);
      } catch (e) {
        console.error(e);
        setChapters(null);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (!chapters || chapters.length === 0) return <div>Not Found</div>;

  return (
    <div>
      <h1 className="font-bold text-3xl m-10">단어 암기</h1>
      <div className="grid grid-cols-2 gap-4 m-10">
        {chapters.map((item) => (
          <Link key={item.ch} href={`/voca/${item.ch}`}>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Day{item.ch}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
