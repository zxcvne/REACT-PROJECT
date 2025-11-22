// /app/voca/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Chapter {
  ch: number;
}

export default function VocaPage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch("/api/voca/chapters");
        if (!res.ok) throw new Error("Failed to fetch chapters");
        const data = await res.json();
        setChapters(data);
      } catch (e) {
        console.error(e);
        setError("챕터를 불러올 수 없습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (isLoading) return <div className="m-10 text-lg">로딩 중...</div>;
  if (error) return <div className="m-10 text-lg text-red-500">{error}</div>;
  if (chapters.length === 0)
    return <div className="m-10 text-lg">챕터가 없습니다.</div>;

  return (
    <div>
      <h1 className="font-bold text-3xl m-10">단어 암기 - Day 선택</h1>
      <div className="grid grid-cols-3 gap-4 m-10">
        {chapters.map((chapter) => (
          <Link key={chapter.ch} href={`/voca/${chapter.ch}`}>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Day {chapter.ch}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
