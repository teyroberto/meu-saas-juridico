"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1 className="text-2xl font-bold">🏠 Início</h1>
      <p className="text-gray-600 mt-2">
        Bem-vindo ao sistema jurídico.
      </p>
    </div>
  );
}
