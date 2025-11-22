import Link from "next/link";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-3xl m-10">Next.js 활용 프로젝트</h1>
      <p className="mx-10 text-lg ">
        단어 공부, 데이터 CRUD, 로그인 기능을 구현한 템플릿 입니다.
      </p>
      <h2 className="font-bold text-3xl m-10">단어 암기 하기</h2>
      <Link href={`/voca`}>
        <button className="mx-10 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          바로가기 ▶
        </button>
      </Link>
      <p className="mt-50 text-center">
        로그인 시 더 많은 기능을 사용할 수 있습니다.
      </p>
      <Footer />
    </div>
  );
}
