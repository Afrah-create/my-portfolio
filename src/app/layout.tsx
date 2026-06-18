import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import ThemeProvider from "@/components/providers/ThemeProvider";
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
    <html lang="en" id="top" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} pb-page font-sans antialiased`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:top-[max(1rem,env(safe-area-inset-top))] focus:left-[max(1rem,env(safe-area-inset-left))]"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
