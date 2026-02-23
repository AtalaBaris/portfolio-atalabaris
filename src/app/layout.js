import { Geist, Geist_Mono, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import MaintenanceView from "@/components/MaintenanceView";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-handwriting",
});

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://atalabaris.vercel.app");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: isMaintenance ? "Under maintenance — Barış Atala" : "Barış Atala",
    template: "%s — Barış Atala",
  },
  description:
    "Barış Atala — Software Engineer & Full Stack Developer. Portfolio, projects, experience and contact.",
  keywords: ["Barış Atala", "portfolio", "software engineer", "full stack", "developer", "Next.js", "React"],
  authors: [{ name: "Barış Atala", url: siteUrl }],
  creator: "Barış Atala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Barış Atala",
    title: "Barış Atala — Software Engineer",
    description: "Portfolio, projects, experience and contact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barış Atala — Software Engineer",
    description: "Portfolio, projects, experience and contact.",
  },
  robots: {
    index: !isMaintenance,
    follow: !isMaintenance,
    googleBot: { index: !isMaintenance, follow: !isMaintenance },
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f9fafb" }, { media: "(prefers-color-scheme: dark)", color: "#0a0e14" }],
};

export default function RootLayout({ children }) {
  const fontVariables = `${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${caveat.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme') || 'dark';
                var isLight = t === 'light' || (t === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isLight) document.documentElement.classList.add('light');
                else document.documentElement.classList.remove('light');
                var a = localStorage.getItem('accent') || 'indigo';
                document.documentElement.setAttribute('data-accent', a);
              })();
            `,
          }}
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="d89e21d5-bab2-4162-9c63-a33f66b31879"></script>
      </head>
      <body className="antialiased bg-background font-sans text-foreground">
        {isMaintenance ? (
          <MaintenanceView />
        ) : (
          <>
            <Header />
            {children}
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
