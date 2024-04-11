import type { Metadata } from "next";
import "./globals.scss";

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
        {children}
      </body>
    </html>
  );
}
