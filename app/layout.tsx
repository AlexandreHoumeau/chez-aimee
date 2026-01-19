import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Rammetto_One } from 'next/font/google'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chez Aimée",
  description: "Salon de manucure et pédicure à Bordeaux",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const rammetto = Rammetto_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rammetto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-background antialiased ${poppins.variable} ${rammetto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
