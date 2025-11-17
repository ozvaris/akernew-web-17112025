// src/app/(panel)/layout.tsx
"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/lib/authContext";

/**
 * Panel layout:
 * - Eğer loading ise: tam sayfa loading ekranı
 * - Eğer user yoksa: /login sayfasına yönlendirir
 * - Eğer user varsa: Sidebar + Content ile paneli gösterir
 */
export default function PanelLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Login değilse /login sayfasına yönlendir
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?next=%2F");
    }
  }, [loading, user, router]);

  // Oturum bilgisi yüklenirken tam sayfa skeleton/spinner
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-sky-50">
        <Header />
        <main className="flex-1 w-full max-w-[1920px] mx-auto py-6 px-4 md:px-6">
          <div className="h-full rounded-xl border border-blue-100 bg-white/80 shadow-sm flex items-center justify-center">
            <div className="space-y-3 text-center">
              <div className="mx-auto h-8 w-8 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin" />
              <p className="text-sm text-blue-800/80">
                Oturum kontrol ediliyor...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // user yoksa ve redirect çalışıyorsa ekrana bir şey basma
  if (!user) {
    return null;
  }

  // user varsa panel layout'u göster
  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      <Header />

      {/* Header ile Footer arasındaki alan tüm yüksekliği kaplasın */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto py-6 px-4 md:px-6">
        {/* Sidebar + Content alanı, yükseklik esnek */}
        <div className="flex h-full flex-col md:flex-row gap-4 md:gap-6 items-stretch">
          {/* Sol menü: tüm content yüksekliğini kaplar */}
          <aside className="md:w-64 w-full md:flex-shrink-0 border border-blue-100 rounded-xl bg-blue-50/70 shadow-sm flex flex-col">
            <Sidebar />
          </aside>

          {/* Content: çerçeve her zaman tüm content alanını kaplasın */}
          <section className="flex-1 rounded-xl shadow-sm border border-blue-100 bg-white/95 p-4 md:p-6 flex flex-col">
            <div className="flex-1">{children}</div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

