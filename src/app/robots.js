/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots */

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://atalabaris.vercel.app")

export default function robots() {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  return {
    rules: [
      {
        userAgent: '*',
        ...(isMaintenance ? { disallow: ['/'] } : { allow: '/', disallow: [] }),
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
