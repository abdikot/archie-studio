"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader/>
        <>{children}</>
      </body>
    </html>
  );
}