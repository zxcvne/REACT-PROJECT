"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("username", data.username);
      alert("로그인 성공");
      window.location.href = "/loginUser";
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mt-50">LOGIN</h2>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b p-2 mb-2 block mt-10 w-100"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-b p-2 mb-2 block mt-3 w-100"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 mt-10 w-100 hover:bg-blue-700 rounded"
      >
        LOGIN
      </button>
      <p className="text-blue-800 mt-5 hover:text-blue-400 ">
        Forgot Password?
      </p>
    </div>
  );
}
