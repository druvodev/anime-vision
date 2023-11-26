import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

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
      <body
        className={`${dmSans.className} max-w-7xl mx-auto bg-[rgb(15,17,23)]`}
      >
        <Hero />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
