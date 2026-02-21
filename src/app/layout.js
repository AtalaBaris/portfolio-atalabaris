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

export const metadata = {
  title: isMaintenance ? "Under maintenance — Barış Atala" : "Barış Atala",
  description: "Software Engineer - Portfolio",
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
