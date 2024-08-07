import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Metrics from "./metrics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Numero",
  description: "A worker cooperative design studio committed to creating digital products that transcend barriers of accessibility, location, language, and socioeconomic status.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Metrics />
    </html>
  );
}
