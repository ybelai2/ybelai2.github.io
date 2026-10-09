import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import profile from "@/data/profile.json";
import "./globals.css";

const sans = localFont({
  src: "./fonts/dm-sans.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 1000",
});
const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    {
      path: "./fonts/instrument-serif-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Yohannes Belai — See what others overlook.",
  description:
    "Personal field notes on human behavior, clear thinking, emotional discipline, and a deliberate life. By Yohannes Belai.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yohannes Belai",
    title: "Yohannes Belai — See what others overlook.",
    description:
      "See clearly. Think independently. Move deliberately. Personal notes, principles, and selected work.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yohannes Belai — See what others overlook.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohannes Belai — See what others overlook.",
    description:
      "Personal notes on clear thinking, human behavior, and deliberate action.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d0f",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
