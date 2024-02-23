import type { Metadata } from "next";
import "./globals.scss";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "M.A.G",
  description: "Artist's official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
