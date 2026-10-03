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
  title: "Yohannes Belai — A little corner of the internet",
  description:
    "Ethiopian roots. Maryland home. Basketball, faith, building things, and figuring out my 20s. Come say what’s up.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yohannes Belai",
    title: "Hey, I’m Yohannes.",
    description:
      "Basketball, faith, building things, and figuring out my 20s. Maryland / DMV.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yohannes Belai — A little corner of the internet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey, I’m Yohannes.",
    description: "A little corner of the internet. Maryland / DMV.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5ef",
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
