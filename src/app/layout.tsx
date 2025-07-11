import type { Metadata } from "next";
import { Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const gloria = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gloria'
});

export const metadata: Metadata = {
  title: "Dear Brethren",
  description: "Christian community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gloria.variable}>
      <body className="font-gloria">
        {children}
      </body>
    </html>
  );
}
