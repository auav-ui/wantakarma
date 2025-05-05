import type { Metadata } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/elements/Navbar/Navbar";

const ethnocentric = localFont({
  src: [
    {
      path: "../public/fonts/Ethnocentric.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ethnocentric",
  display: "swap",
});

const ttSquares = localFont({
  src: [
    {
      path: "../public/fonts/TTSquaresCondensed.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TTSquaresCondensed Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tt-squares",
  display: "swap",
});

const soraSans = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUAV UI",
  description: "Autonomous Aerial Unmanned Vehicle",

  icons: "/logo-triangle.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ethnocentric.variable} ${ttSquares.variable} ${soraSans.variable} antialiased min-h-screen max-w-[1920px] mx-auto border border-accents-grey-4`}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
