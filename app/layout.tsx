import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./lib/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portofolio | Ikmal Mumtaz Anwarullah",
  description: "Portfolio profesional modern dengan Next.js",
  metadataBase: new URL("https://example.com"), // ganti saat deploy
  openGraph: {
    title: "Portofolio | Ikmal Mumtaz Anwarullah",
    description: "Portfolio profesional modern dengan Next.js",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main className="container pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
