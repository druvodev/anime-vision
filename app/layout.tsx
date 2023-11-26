import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Hero from "@/components/Hero";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vision",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} max-w-7xl mx-auto bg-[#0F1117]`}>
        <Hero />
        <main>{children}</main>
      </body>
    </html>
  );
}
