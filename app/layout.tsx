'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThreeD from "./ThreeD";
// asdasd

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Jose Alfonso Rivera Portfolio",
  description: "Portfolio of Jose Alfonso Rivera created with Next.js. A Full Stack Web Developer and Sofware Developer from Philippines.\nProficiend in JavaScript, Python, Django, PHP and other  different programming. language ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
        <meta name="description" content={metadata.description || ""} />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased realatve w-screen h-screen overflow-hidden`}
      >
        <nav className="sticky top-0 left-0 z-10">
          <Navbar />
        </nav>
        {children}
        <div className="w-full h-full absolute top-0">
          <ThreeD />
        </div>

      </body>
    </html>
  );
}
