import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alen Peršić — Web Team Lead",
    template: "%s — Alen Peršić",
  },
  description:
    "Web Team Lead in Zagreb. Next.js, Java, Flutter, and AI-assisted delivery — from esports platforms with EA and ESL FACEIT to large-scale learning products.",
  keywords: [
    "Alen Peršić",
    "Web Team Lead",
    "Next.js",
    "Zagreb",
    "Software Developer",
  ],
  authors: [{ name: "Alen Peršić" }],
  openGraph: {
    title: "Alen Peršić — Web Team Lead",
    description:
      "Portfolio of Alen Peršić, Web Team Lead based in Zagreb, Croatia.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${instrument.variable} ${geistMono.variable} bg-ink font-sans text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
