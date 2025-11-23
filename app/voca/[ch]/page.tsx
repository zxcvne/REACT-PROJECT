"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface VocaType {
  id: number;
  eng: string;
  kor: string;
  ch: number;
}

export default function VocaDayPage() {
  const params = useParams();
  const chapter = params.ch;

  const [vocas, setVocas] = useState<VocaType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chapter) return;

    const fetchVocas = async () => {
      try {
        const res = await fetch(`/api/voca/${chapter}`);
        if (!res.ok) throw new Error("Failed to fetch vocas");
        const data = await res.json();
        setVocas(data);
      } catch (e) {
        console.error(e);
        setError("단어를 불러올 수 없습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVocas();
  }, [chapter]);

  if (isLoading) return <div className="m-10 text-lg">로딩 중...</div>;
  if (error) return <div className="m-10 text-lg text-red-500">{error}</div>;
  if (vocas.length === 0)
    return <div className="m-10 text-lg">단어가 없습니다.</div>;

  return (
    <div>
      <h1 className="font-bold text-3xl m-10">Day{chapter}</h1>
      <div className="m-10">
        <div className="space-y-2">
          {vocas.map((voca) => (
            <div className="p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
              <h3 className="font-semibold text-lg">{voca.eng}</h3>
              <p className="text-gray-600">{voca.kor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
