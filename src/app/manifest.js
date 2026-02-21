/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://atalabaris.vercel.app");

export default function manifest() {
  return {
    name: "Barış Atala — Portfolio",
    short_name: "Barış Atala",
    description: "Software Engineer & Full Stack Developer. Portfolio, projects, experience and contact.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e14",
    theme_color: "#6366f1",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon", type: "image/png", sizes: "32x32", purpose: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180", purpose: "any" },
    ],
  };
}
