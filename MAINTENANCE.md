# Bakım modu

Siteyi geçici olarak bakım sayfasına almak için:

## Açmak

1. Proje kökünde `.env.local` dosyasına ekleyin (veya hosting ortam değişkenlerine):
   ```bash
   NEXT_PUBLIC_MAINTENANCE_MODE=true
   ```
2. Yeniden build alıp deploy edin:
   ```bash
   npm run build
   ```
3. Tüm ziyaretçiler sadece bakım sayfasını görür (header ve diğer sayfalar gizlenir).

## Kapatmak

1. `NEXT_PUBLIC_MAINTENANCE_MODE` değişkenini kaldırın veya `false` yapın.
2. Tekrar build + deploy edin.

> **Not:** `NEXT_PUBLIC_*` değişkenleri build sırasında uygulamaya gömülür. Bakımı açıp kapatmak için her seferinde yeni bir build ve deploy gerekir.

## Bakım sayfasını özelleştirmek

- Metin ve tasarım: `src/components/MaintenanceView.js`
- Sayfa başlığı (sekme): `src/app/layout.js` içindeki `metadata.title` (bakım durumunda "Bakımda — Barış Atala" kullanılıyor).
