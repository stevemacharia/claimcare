import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// src/app/layout.tsx
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "CLAIM CARE",
  description: "Insurance Claim Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          <main className=''>
            <SessionProvider>{children}</SessionProvider>
          </main>
        <Footer/>
      </body>
    </html>
  );
}
