import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { OPEN_SANS as fontFamily } from "@/next.fonts";

import WithNavBar from "@/components/withNavBar";
import WithFooter from "@/components/withFooter";

import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "M.A.G",
  description: "Artist's official website",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html
      className={fontFamily.className}
      lang="en"
    >
      <body
        className="min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <WithNavBar />

        <div
          className="max-w-8xl min-w-[320px] w-full mx-auto flex-grow"
        >
          {children}
        </div>

        <WithFooter />
      </body>
    </html>
  )
};

export default RootLayout;