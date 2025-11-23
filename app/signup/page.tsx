"use client";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, phone, address }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("회원가입 성공");
      window.location.href = "/login";
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <h2 className="text-3xl mb-4 font-bold">회원가입</h2>
      <input
        type="text"
        placeholder="name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-100 border p-2 mb-2 block mt-5"
      />
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-100 border p-2 mb-2 block mt-2"
      />
      <input
        type="password"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-100 border p-2 mb-2 block mt-2"
      />
      <input
        type="text"
        placeholder="phone..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-100 border p-2 mb-2 block mt-2"
      />
      <input
        type="text"
        placeholder="address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-100 border p-2 mb-2 block mt-2"
      />
      <button
        onClick={handleSignUp}
        className="w-100 bg-blue-500 text-white p-2 rounded mt-5 hover:bg-blue-700"
      >
        회원가입
      </button>
    </div>
  );
}
