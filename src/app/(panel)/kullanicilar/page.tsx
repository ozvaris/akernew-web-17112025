// src/app/(panel)/kullanicilar/page.tsx

export const metadata = {
  title: "Kullanıcılar",
};

export default function KullanicilarPage() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        Kullanıcılar
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Kullanıcı listesi, roller, yetkiler veya davet linkleri gibi öğeleri
        burada gösterebilirsin. İleride tablo + pagination eklemek için uygun
        bir alan.
      </p>
    </div>
  );
}
