import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barış Atala",
  description: "Software Engineer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme') || 'dark';
                var isLight = t === 'light' || (t === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isLight) document.documentElement.classList.add('light');
                else document.documentElement.classList.remove('light');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background font-sans text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
