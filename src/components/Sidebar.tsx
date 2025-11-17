// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/firma-bilgileri", label: "Firma Bilgileri" },
  { href: "/firma-kvk-bilgileri", label: "Firma KVK Bilgileri" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      {/* Başlık */}
      <div className="px-4 py-3 border-b border-blue-100/70 bg-gradient-to-r from-blue-50 to-sky-50 rounded-t-xl">
        <p className="text-xs font-semibold tracking-wide text-blue-500 uppercase">
          Menü
        </p>
      </div>

      {/* Menü */}
      <nav className="flex-1 px-2 py-3 md:py-4 space-y-1 overflow-x-auto md:overflow-y-auto">
        {LINKS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-1 focus-visible:ring-offset-blue-50",
                isActive
                  ? "bg-white/90 text-blue-900 shadow-sm ring-1 ring-blue-100"
                  : "text-blue-800/80 hover:bg-blue-50/80 hover:text-blue-900",
              ].join(" ")}
            >
              {/* Sol tarafta yumuşak bir durum göstergesi */}
              <span
                className={[
                  "h-2 w-2 rounded-full transition-colors",
                  isActive
                    ? "bg-blue-500"
                    : "bg-blue-300/60 group-hover:bg-blue-400",
                ].join(" ")}
              />

              <span className="flex-1 font-medium truncate">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
