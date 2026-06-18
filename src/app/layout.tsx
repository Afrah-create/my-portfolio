import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import { defaultMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-gray-950 focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
