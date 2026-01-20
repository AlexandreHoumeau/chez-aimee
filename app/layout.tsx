import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Rammetto_One } from 'next/font/google'
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://chez-aimee.vercel.app"),
  title: {
    default: "Chez Aimée - Salon de manucure à Bordeaux",
    template: "%s | Chez Aimée",
  },

  description:
    "Salon de manucure à Bordeaux spécialisé en gel, semi-permanent et nail art. Prenez rendez-vous pour des ongles élégants et durables.",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://chez-aimee.vercel.app",
    siteName: "Chez Aimée",
    title: "Salon de manucure à Bordeaux",
    description:
      "Gel, semi-permanent et nail art à Bordeaux. Manucure professionnelle et soignée.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Salon de manucure à Bordeaux",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Salon de manucure à Bordeaux",
    description:
      "Manucure, gel et semi-permanent à Bordeaux. Prenez rendez-vous.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://chez-aimee.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },
}


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
