import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-cyan-700 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="font-bold text-3xl text-yellow-400 hover:text-yellow-600">
            Vocabulary
          </div>
        </Link>
        <div className="flex grow justify-start">
          <Link href={"/voca"} className="hover:font-bold ml-20">
            단어암기
          </Link>
        </div>
        <div className="space-x-4">
          {/* app>board>page.tsx */}
          <Link href="/signup" className="hover:font-bold">
            회원가입
          </Link>
          <Link href="/login" className="hover:font-bold">
            로그인
          </Link>
        </div>
      </nav>
    </div>
  );
}
