import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { OPEN_SANS as fontFamily } from "@/next.fonts";

import "@/styles/base.scss";
import WithNavBar from "@/components/withNavBar";

export const metadata: Metadata = {
  title: "M.A.G",
  description: "Artist's official website",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {

  return (
    <html className={fontFamily.className} lang="en">
      <body suppressHydrationWarning>
        <WithNavBar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;