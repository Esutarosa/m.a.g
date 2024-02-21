import type { Metadata } from "next";
import "./globals.scss";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
