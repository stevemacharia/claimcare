import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
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
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
