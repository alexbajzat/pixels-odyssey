import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";



export const metadata: Metadata = {
  title: "My micro-SaaS expedition | Pixels Odyssey",
  description: "My micro-SaaS expedition * Pixels Odyssey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.className} bg-zinc-900 `}
      >
        {children}
      </body>
    </html>
  );
}
