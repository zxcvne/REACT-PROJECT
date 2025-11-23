import LoginHeader from "@/app/components/layout/LoginHeader";
import Ranking from "@/app/components/layout/Ranking";
import Link from "next/link";

export default function loginUser() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <LoginHeader />
      <div className="flex flex-col items-center justify-center mt-50">
        <h1 className="font-bold text-3xl m-10">Next.js 활용 프로젝트</h1>
        <p className="text-lg ">
          데이터 CRUD, 로그인 기능을 구현한 템플릿 입니다.
        </p>
      </div>
      <Ranking />
    </div>
  );
}
