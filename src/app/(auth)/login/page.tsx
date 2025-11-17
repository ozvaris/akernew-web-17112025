// src/app/(auth)/login/page.tsx
// Server bileşen: login'liyse profil'e yönlendirir
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("access")?.value;
  if (hasAccess) redirect("/profile");
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
      {/* İstersen burada max-width sınırlamasını da koruyabilirsin */}
      <div className="w-full px-4">
        <LoginForm />
      </div>
    </div>
  );
}
