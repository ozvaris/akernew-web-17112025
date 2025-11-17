// src/app/(panel)/firma-bilgileri/page.tsx

export const metadata = {
  title: "Firma Bilgileri",
};

export default function FirmaBilgileriPage() {
  return (
    <form className="flex h-full flex-col space-y-6">
      {/* Başlık */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-blue-900 mb-1">
          Firma Bilgileri (Aşağıdaki alanlar demo amaçlı doldurulmuştur. )
        </h1>
      </div>

      {/* Form alanları */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 flex-1">
        {/* Genel Bilgiler */}
        <div className="rounded-xl border border-blue-100 bg-white p-4 md:p-5 shadow-sm flex flex-col">
          <h2 className="text-base md:text-lg font-semibold text-blue-900 mb-3">
            Genel Bilgiler
          </h2>
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="firmaAdi"
                className="text-blue-700 font-medium text-sm"
              >
                Firma Adı
              </label>
              <input
                id="firmaAdi"
                name="firmaAdi"
                type="text"
                defaultValue="Aker Danışmanlık ve Eğitim Hizmetleri Ltd. Şti."
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="ticariUnvan"
                className="text-blue-700 font-medium text-sm"
              >
                Ticari Ünvan
              </label>
              <input
                id="ticariUnvan"
                name="ticariUnvan"
                type="text"
                defaultValue="Aker Consulting & Training"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="vergiDairesi"
                className="text-blue-700 font-medium text-sm"
              >
                Vergi Dairesi
              </label>
              <input
                id="vergiDairesi"
                name="vergiDairesi"
                type="text"
                defaultValue="Üsküdar"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col gap-1 md:flex-row md:gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="vergiNo"
                  className="text-blue-700 font-medium text-sm"
                >
                  Vergi No
                </label>
                <input
                  id="vergiNo"
                  name="vergiNo"
                  type="text"
                  defaultValue="123 456 78 90"
                  className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="mersisNo"
                  className="text-blue-700 font-medium text-sm"
                >
                  Mersis No
                </label>
                <input
                  id="mersisNo"
                  name="mersisNo"
                  type="text"
                  defaultValue="0 1234 5678 0000 0012"
                  className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="rounded-xl border border-blue-100 bg-white p-4 md:p-5 shadow-sm flex flex-col">
          <h2 className="text-base md:text-lg font-semibold text-blue-900 mb-3">
            İletişim Bilgileri
          </h2>
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="adres"
                className="text-blue-700 font-medium text-sm"
              >
                Adres
              </label>
              <textarea
                id="adres"
                name="adres"
                rows={3}
                defaultValue={
                  "Selami Ali Mah. Eğitim Cad. No: 34/2\nÜsküdar / İstanbul"
                }
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="telefon"
                className="text-blue-700 font-medium text-sm"
              >
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                defaultValue="+90 (216) 555 12 34"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-blue-700 font-medium text-sm"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue="info@akerdanismanlik.com"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="webSite"
                className="text-blue-700 font-medium text-sm"
              >
                Web Sitesi
              </label>
              <input
                id="webSite"
                name="webSite"
                type="url"
                defaultValue="https://www.akerdanismanlik.com"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        {/* Yetkili Kişi */}
        <div className="md:col-span-2 rounded-xl border border-blue-100 bg-white p-4 md:p-5 shadow-sm flex flex-col">
          <h2 className="text-base md:text-lg font-semibold text-blue-900 mb-3">
            Yetkili Kişi
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm md:text-base">
            <div className="space-y-1 flex flex-col">
              <label
                htmlFor="yetkiliAd"
                className="text-blue-700 font-medium text-sm"
              >
                Adı Soyadı
              </label>
              <input
                id="yetkiliAd"
                name="yetkiliAd"
                type="text"
                defaultValue=" Ali Haydar"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="space-y-1 flex flex-col">
              <label
                htmlFor="yetkiliGorev"
                className="text-blue-700 font-medium text-sm"
              >
                Görevi
              </label>
              <input
                id="yetkiliGorev"
                name="yetkiliGorev"
                type="text"
                defaultValue="Genel Müdür / Şirket Ortağı"
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="space-y-1 flex flex-col">
              <label
                htmlFor="yetkiliIletisim"
                className="text-blue-700 font-medium text-sm"
              >
                İletişim
              </label>
              <textarea
                id="yetkiliIletisim"
                name="yetkiliIletisim"
                rows={2}
                defaultValue={"+90 (532) 000 00 00 ali@akerdanismanlik.com"}
                className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
              />
            </div>
          </div>
        </div>
        
      </div>

      {/* Butonlar */}
      <div className="flex justify-end gap-3 pt-4 border-t border-blue-100">
        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
        >
          İptal
        </button>
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
