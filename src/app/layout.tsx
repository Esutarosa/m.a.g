import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { OPEN_SANS as fontFamily } from "@/config/fonts";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "M.A.G",
  description: "Artist's official website",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html className={fontFamily.className} lang="en">
      <body className="min-h-screen min-w-[320px] flex flex-col antialiased">
        {children}
      </body>
    </html>
  )
};

export default RootLayout;