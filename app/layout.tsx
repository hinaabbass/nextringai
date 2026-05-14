import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Barlow,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextRing AI — AI Receptionist for Roofing Contractors",
  description:
    "Stop losing roofing jobs from missed calls. NextRing AI answers 24/7, books appointments, follows up leads, and helps UK roofers close more jobs automatically.",
  keywords: [
    "AI receptionist",
    "roofing leads",
    "roofing contractor software",
    "AI call answering",
    "roofing business automation",
    "roofing appointment booking",
    "roofing CRM",
    "NextRing AI",
  ],
  authors: [{ name: "NextRing AI" }],
  creator: "NextRing AI",
  publisher: "NextRing AI",
  icons: {
    icon: "/public/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
