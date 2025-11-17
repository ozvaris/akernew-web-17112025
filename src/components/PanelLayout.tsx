// src/components/PanelLayout.tsx
"use client";

import { useState } from "react";

type MenuId = "company" | "trainings" | "users" | "settings";

const MENU_ITEMS: { id: MenuId; label: string }[] = [
  { id: "company", label: "Firma Bilgileri" },
  { id: "trainings", label: "Eğitimler" },
  { id: "users", label: "Kullanıcılar" },
  { id: "settings", label: "Ayarlar" },
];

export default function PanelLayout() {
  const [active, setActive] = useState<MenuId>("company");

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Sidebar */}
      <aside className="md:w-64 w-full md:flex-shrink-0 border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200 font-semibold text-gray-700">
          Menü
        </div>
        <nav className="flex md:flex-col flex-row md:items-stretch items-start overflow-x-auto md:overflow-visible">
          {MENU_ITEMS.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={[
                  "flex-1 md:flex-none text-sm px-4 py-3 text-left whitespace-nowrap",
                  "transition-colors",
                  isActive
                    ? "bg-gray-100 border-l-4 border-l-blue-600 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-50",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <section className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        {active === "company" && (
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Firma Bilgileri
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Buraya firma adı, adres, iletişim bilgileri, vergi numarası gibi
              alanları ekleyebilirsin. Bu alanı daha sonra form, tablo ya da
              kart bileşenleriyle doldurmak için bir şablon olarak
              kullanabilirsin.
            </p>
          </div>
        )}

        {active === "trainings" && (
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Eğitimler
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Bu bölümde şirket içi eğitimler, sertifika programları, planlanan
              etkinlikler gibi içerikleri listeleyebilir veya yönetebilirsin.
            </p>
          </div>
        )}

        {active === "users" && (
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Kullanıcılar
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Kullanıcı listesi, roller, yetkiler veya davet linkleri gibi
              öğeleri burada gösterebilirsin. İleride tablo + pagination
              eklemek için uygun bir alan.
            </p>
          </div>
        )}

        {active === "settings" && (
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Ayarlar
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Tema, bildirim tercihleri, entegrasyon ayarları gibi yapılandırma
              seçeneklerini bu panelde toplayabilirsin.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
