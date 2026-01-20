import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Rammetto_One } from "next/font/google"

const SITE_URL = "https://chez-aimee.vercel.app"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const rammetto = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rammetto",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Salon de manucure à Bordeaux – Chez Aimée",
    template: "%s | Chez Aimée",
  },

  description:
    "Salon de manucure à Bordeaux spécialisé en gel, semi-permanent, capsule Gel X et nail art. Prenez rendez-vous en ligne.",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Chez Aimée",
    title: "Salon de manucure à Bordeaux – Chez Aimée",
    description:
      "Gel, semi-permanent et nail art à Bordeaux. Réservation en ligne.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Salon de manucure à Bordeaux – Chez Aimée",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`bg-background antialiased ${poppins.variable} ${rammetto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
