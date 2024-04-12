import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { OPEN_SANS } from "@/next.fonts";

import "@/styles/base.scss";

export const metadata: Metadata = {
  title: "M.A.G",
  description: "Artist's official website",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {

  return (
    <html className={OPEN_SANS.className} lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;