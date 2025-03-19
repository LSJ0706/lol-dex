import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/commons/Header";

export const metadata: Metadata = {
  title: "LOL 백과사전",
  description: "LOL 백과사전",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
