import Navbar from "@/components/Navbar";
import "./globals.css";
import "@/app/a11y-dark.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "葡萄老祖",
  description: "这是葡萄老祖的网站，偶尔写点东西，行过路过不要错过",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <body className={`${inter.className} min-h-screen min-w-[296px]`}>
        <Navbar></Navbar>
        {children}
        <footer className="dark:bg-[--background-start-rgb] font-extralight font-serif text-sm text-center w-full py-4 opacity-60">
          © 2023-present Putaolaozu. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
