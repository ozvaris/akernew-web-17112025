// src/app/(panel)/ayarlar/page.tsx

export const metadata = {
  title: "Ayarlar",
};

export default function AyarlarPage() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        Ayarlar
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Temaa, bildirim tercihleri, entegrasyon ayarları gibi yapılandırma
        seçeneklerini bu sayfada toplayabilirsin.
      </p>
    </div>
  );
}
