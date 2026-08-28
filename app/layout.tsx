import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Space_Mono,
  Exo_2,
} from "next/font/google";
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
  metadataBase: new URL("https://sanjit-dash.vercel.app"),

  title: {
    default: "Sanjit Dash — Backend Engineer",
    template: "%s | Sanjit Dash",
  },

  description:
    "Backend Engineer focused on Python, FastAPI, backend systems, software architecture, automation, and AI agents.",

  alternates: {
    canonical: "https://sanjit-dash.vercel.app",
  },

  openGraph: {
    title: "Sanjit Dash — Backend Engineer",
    description:
      "Backend Engineer focused on Python, FastAPI, backend systems, software architecture, automation, and AI agents.",
    url: "https://sanjit-dash.vercel.app",
    siteName: "Sanjit Dash",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sanjit Dash — Backend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanjit Dash — Backend Engineer",
    description:
      "Backend Engineer focused on Python, FastAPI, backend systems, software architecture, automation, and AI agents.",
     images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
