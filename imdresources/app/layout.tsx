import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr M medical resources - Your Ultimate Medical Life Companion & Learning Hub",
  description: "The only Biggest Medical Resources' hub on Earth with more than 45,000 Medical and Pharmaceutical Resources & Databases now available globally to our valued subscribers.",
  keywords: "medical resources, USMLE, medical education, pharmaceutical databases, medical learning hub",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
