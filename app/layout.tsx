import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Pulse",
  description: "Track real-time stock prices, get personalized alerts and explore detailed company insights.",
};

/**
 * Application root layout that provides the global HTML structure, font CSS variables, and a dark theme container while rendering page content and a global Toaster.
 *
 * @param children - The page or app content to render inside the layout's body.
 * @returns The root HTML element containing the application body and global Toaster.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Toaster />
      </body>
    </html>
  );
}