import Link from "next/link";

export default function LoginHeader() {
  return (
    <div className="bg-cyan-700 text-white p-4">
      <nav className="container mx-auto flex items-center">
        <Link href="/">
          <div className="font-bold text-3xl text-yellow-400 hover:text-yellow-600  flex-none ">
            Vocabulary
          </div>
        </Link>
        <div className="flex grow justify-start">
          <Link href={"/voca"} className="hover:font-bold ml-20">
            단어암기
          </Link>
          <Link href={"/createBook"} className="hover:font-bold mx-10">
            단어장 만들기
          </Link>
          <Link href={"/game"} className="hover:font-bold">
            게임하기
          </Link>
        </div>
        <div className=" flex-none">
          {/* app>board>page.tsx */}
          <Link href="/mypage" className="hover:font-bold">
            MYPAGE
          </Link>
        </div>
      </nav>
    </div>
  );
}
