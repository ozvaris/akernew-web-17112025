// src/app/(panel)/egitimler/page.tsx

export const metadata = {
  title: "Eğitimler",
};

export default function EgitimlerPage() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        Eğitimler
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Bu bölümde şirket içi eğitimler, sertifika programları, planlanan
        etkinlikler gibi içerikleri listeleyebilir veya yönetebilirsin.
      </p>
    </div>
  );
}
