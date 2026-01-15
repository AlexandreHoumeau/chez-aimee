import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chez Aimée",
  description: "Salon de manucure et pédicure à Bordeaux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
