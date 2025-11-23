import Link from "next/link";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-50">
        <h1 className="font-bold text-3xl m-10">Next.js 활용 프로젝트</h1>
        <p className="text-lg ">
          데이터 CRUD, 로그인 기능을 구현한 템플릿 입니다.
        </p>
        <p className=" text-center">
          로그인 시 더 많은 기능을 사용할 수 있습니다.
        </p>
      </div>
      <Footer />
    </div>
  );
}
