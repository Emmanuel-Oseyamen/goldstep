import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

/*
|--------------------------------------------------------------------------
| GOLDSTEP HOTELS — TYPOGRAPHY
|--------------------------------------------------------------------------
|
| Cormorant Garamond
| → Editorial / luxury display typography
| → Headings, statements, large numbers
|
| Geist
| → Modern interface typography
| → Navigation, buttons, body copy
|
| Geist Mono
| → Small technical / utility information
|
|--------------------------------------------------------------------------
*/

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
|--------------------------------------------------------------------------
| METADATA
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title: {
    default: "Goldstep Hotels",
    template: "%s | Goldstep Hotels",
  },

  description:
    "Goldstep Hotels — exceptional hospitality, beautifully considered spaces, and memorable stays.",

  keywords: [
    "Goldstep Hotels",
    "hotel",
    "luxury hotel",
    "hospitality",
    "rooms",
    "suites",
    "dining",
    "events",
  ],

  authors: [
    {
      name: "Goldstep Hotels",
    },
  ],

  creator: "Goldstep Hotels",

  metadataBase: new URL("https://goldstephotels.com"),

  openGraph: {
    title: "Goldstep Hotels",
    description:
      "Exceptional hospitality. Beautifully considered spaces. Memorable stays.",
    type: "website",
    siteName: "Goldstep Hotels",
  },

  twitter: {
    card: "summary_large_image",
    title: "Goldstep Hotels",
    description:
      "Exceptional hospitality. Beautifully considered spaces. Memorable stays.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/*
|--------------------------------------------------------------------------
| ROOT LAYOUT
|--------------------------------------------------------------------------
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ScrollProgress />
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}