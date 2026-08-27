import type { Metadata } from "next";
import {Geist, Geist_Mono,  Manrope, Space_Mono, Exo_2 } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const quintessential = localFont({
  src: [
    {
      path: "../public/fonts/Quintessential-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-quintessential",
});
const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjit — Backend Engineer",
  description:
    "Backend Engineer focused on Python, FastAPI, systems, architecture, automation, and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} ${quintessential.variable} ${exo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}