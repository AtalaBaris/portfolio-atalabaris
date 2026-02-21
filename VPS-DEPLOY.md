# VPS’e deploy (GitHub → sunucu)

GitHub’a attıktan sonra VPS’te çalıştırmak için adımlar.

## 1. GitHub’a atmadan önce

- **`.env.local`** commit edilmiyor (`.gitignore`’da). Gizli bilgileri (Formspree ID vb.) VPS’te ortam değişkeni olarak tanımlayacaksın.
- Repo’yu push ederken sadece kod gitsin; `.env`, `.env.local` dosyaları repo’da olmasın.

## 2. VPS’te kurulum

Sunucuda Node.js 18+ yüklü olsun. Örnek (Ubuntu/Debian):

```bash
# Projeyi klonla
git clone https://github.com/KULLANICI/portfolio-atalabaris.git
cd portfolio-atalabaris

# Bağımlılıklar
npm ci

# Ortam değişkenleri (mutlaka ayarla)
export NEXT_PUBLIC_SITE_URL=https://sitedomain.com
# İsteğe bağlı:
# export NEXT_PUBLIC_FORMSPREE_ID=xxx
# export NEXT_PUBLIC_MAINTENANCE_MODE=true

# Build
npm run build

# Çalıştır (port 3000)
npm run start
```

**Önemli:** VPS’te `VERCEL_URL` yok; sitemap, robots ve OG linkleri için **`NEXT_PUBLIC_SITE_URL`**’i canlı domain’inle (örn. `https://barisatala.com`) ayarla.

## 3. Sürekli çalışması (PM2 örneği)

```bash
npm install -g pm2
# Build’i zaten yaptıysan:
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## 4. Nginx reverse proxy (isteğe bağlı)

80/443’ten Nginx, arkada Next’i 3000’de çalıştırabilir:

```nginx
server {
    listen 80;
    server_name sitedomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

SSL için `certbot` ile Let’s Encrypt kullanılabilir.

## 5. Güncelleme (repo’dan çekip yeniden build)

```bash
cd portfolio-atalabaris
git pull
npm ci
npm run build
pm2 restart portfolio
```

---

**Özet:** GitHub’a atarken `.env.local` ve diğer env dosyaları zaten ignore’da. VPS’te `NEXT_PUBLIC_SITE_URL` tanımla, `npm ci` → `npm run build` → `npm run start` (veya PM2) yeterli.
