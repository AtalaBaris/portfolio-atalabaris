# Yayın ve SEO Kontrol Listesi

Bu dosya, siteyi yayına almadan önce ve SEO uyumluluğu için yapılanları ve kontrol edilmesi gerekenleri özetler.

## Yapılanlar (bu repoda)

### Sitemap ve robots
- **`src/app/sitemap.js`** — Tüm statik sayfalar ve `/experience/[slug]` URL’leri otomatik sitemap’e ekleniyor. `NEXT_PUBLIC_SITE_URL` veya `VERCEL_URL` ile base URL belirlenir.
- **`src/app/robots.js`** — Tüm botlara izin verilir; bakım modunda (`NEXT_PUBLIC_MAINTENANCE_MODE=true`) tüm sayfalar `disallow`. Sitemap ve host adresi döner.

### Metadata (SEO)
- **Root layout (`src/app/layout.js`)**  
  - `metadataBase`: canonical ve OG URL’leri için.  
  - `title.template`: "Sayfa — Barış Atala".  
  - `description`, `keywords`, `authors`, `creator`.  
  - `openGraph`: type, locale, url, siteName, title, description.  
  - `twitter`: card, title, description.  
  - `robots`: index/follow (bakımda kapatılır).  
  - `alternates.canonical`: "/".  
  - `viewport`: device-width, initialScale, themeColor (light/dark).
- **Sayfa bazlı metadata**  
  - `src/app/projects/layout.js` — title, description, openGraph, canonical.  
  - `src/app/skills/layout.js` — aynı yapı.  
  - `src/app/experience/layout.js` — aynı yapı.  
  - `src/app/contact/layout.js` — aynı yapı.  
  - `src/app/about/layout.js` — aynı yapı.  
- **Dinamik metadata**  
  - `src/app/experience/[slug]/layout.js` — `generateMetadata` ile her deneyim sayfası için title, description, openGraph, canonical.

### Favicon ve PWA
- **`src/app/icon.js`** — 32x32 favicon (BA logosu, accent rengi).
- **`src/app/apple-icon.js`** — 180x180 Apple touch icon.
- **`src/app/manifest.js`** — Web app manifest: name, short_name, description, start_url, display, theme_color, background_color, icons.

### Ortam değişkenleri
- **`.env.example`** — `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_ID`, `NEXT_PUBLIC_MAINTENANCE_MODE` açıklamalı örnek.

---

## Yayına almadan önce kontrol et

1. **Domain / base URL**  
   Canlı domain’i `.env` veya Vercel (veya kullandığın platform) ortam değişkenlerinde `NEXT_PUBLIC_SITE_URL` olarak ayarla (örn. `https://barisatala.com`). Sitemap, robots, OG ve manifest bu değeri kullanır.

2. **Favicon / OG görsel (isteğe bağlı)**  
   Şu an OG’de özel bir görsel yok; paylaşımlarda varsayılan davranış kullanılır. İstersen `layout.js` metadata’sına `openGraph.images` ve `twitter.images` ekleyip `/og.png` veya benzeri bir görsel kullan.

3. **Contact form**  
   Formspree kullanıyorsan `NEXT_PUBLIC_FORMSPREE_ID` değerini production ortamında ayarla.

4. **Canonical URL’ler**  
   Tüm sayfalarda `alternates.canonical` tanımlı; base URL `metadataBase` ile geliyor. Farklı bir domain’de (www / non-www) yayınlıyorsan yönlendirmeyi hosting tarafında yap.

5. **Build**  
   Lokal veya CI’da `npm run build` çalıştırıp hata olmadığını doğula (font indirme hatası sandbox’ta olabilir; gerçek ortamda genelde sorun çıkmaz).

6. **Yayın sonrası hızlı test**  
   - `https://yourdomain.com/sitemap.xml`  
   - `https://yourdomain.com/robots.txt`  
   - `https://yourdomain.com/manifest.webmanifest` (veya Next’in manifest route’u)  
   - Bir sayfayı sosyal medyada / mesajda paylaşıp OG önizlemesini kontrol et.

---

## Referanslar

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js Robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Next.js Manifest](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)
