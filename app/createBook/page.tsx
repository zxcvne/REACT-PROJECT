"use client";
import { useState } from "react";

export default function createBook() {
  const [inputs, setInputs] = useState({
    name: "",
    theme: "",
  });
  const { name, theme } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl text-center mt-10">단어장 생성하기</h2>
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="단어장 이름"
          className="border w-300 mt-10 p-3"
          onChange={onChange}
        />
        <input
          type="text"
          name="theme"
          value={theme}
          placeholder="태마"
          className="border w-300 mt-5 p-3"
          onChange={onChange}
        />
      </form>
      <div className="text-center">
        <button className="bg-blue-500 text-white p-2 mt-10 w-50 hover:bg-blue-700 rounded">
          생성하기
        </button>
      </div>
    </div>
  );
}
