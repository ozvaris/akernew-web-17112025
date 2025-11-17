// src/components/LoginForm.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetchApi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const qc = useQueryClient();
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/";

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: async (body: { email: string; password: string }) => {
      await fetchApi("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cache: "no-store",
        traceName: "client:/api/login",
      });
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["profile"] });
      router.replace(next);
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login.mutateAsync({ email, password });
  }

  return (
    <div className="max-w-md w-full mx-auto bg-white/90 rounded-3xl shadow-lg shadow-blue-100 p-6 md:p-8">
      <h1 className="flex items-center gap-2 text-3xl font-bold mb-7 text-blue-900">
        <Image
          src="http://localhost:3000/media/dev-images/AKER-PATENT-LOGO_1.png"
          alt="Aker"
          width={44}
          height={44}
          className="inline-block"
        />
        ProKVK Giriş Sayfası
      </h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* E-posta */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-base font-medium text-blue-800"
          >
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-base text-blue-900 shadow-sm outline-none 
                       transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-300"
            placeholder="ornek@prokvk.com"
            required
          />
        </div>

        {/* Şifre */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-base font-medium text-blue-800"
          >
            Şifre
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-base text-blue-900 shadow-sm outline-none 
                       transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-300"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm md:text-base text-blue-800/80 pt-1">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-md border border-blue-200 text-blue-600 focus:ring-blue-300"
            />
            <span>Beni hatırla</span>
          </label>

          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            Şifremi unuttum
          </button>
        </div>

        {login.isError && (
          <p className="text-sm md:text-base text-red-600">
            Giriş başarısız. Lütfen bilgilerinizi kontrol edin.
          </p>
        )}

        {/* Giriş butonu */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={login.isPending}
            className="w-full inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-base font-semibold text-white 
                       shadow-md shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 
                       active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
                       disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {login.isPending ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </div>
      </form>

      {/* Alt linkler: Ana Sayfa & Yeni Üye aynı satırda */}
      <div className="mt-5 border-t border-blue-100 pt-4 text-xs md:text-sm text-blue-800/80">
        <div className="flex items-center justify-between">
          <Link
            href="http://www.prokvk.com.tr"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span className="text-lg leading-none">←</span>
            <span>Ana Sayfa</span>
          </Link>

          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
          >
            Yeni Üye
          </Link>
        </div>
      </div>
    </div>
  );
}
