"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email && senha) {
      localStorage.setItem("auth", "true");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🔐 Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 rounded mb-6"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
