import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ========================================
   Typography System
   Playfair Display: elegant serif for headings
   Inter: clean sans-serif for body and UI
   ======================================== */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PUA Brasa y Vino | Restaurante Premium en Chilpancingo",
  description:
    "Experiencia gastronomica de autor. Cortes premium a la brasa, mariscos contemporaneos y una selecta carta de vinos. Reserva tu mesa en PUA Brasa y Vino.",
  keywords:
    "PUA, Brasa y Vino, restaurante Chilpancingo, fine dining, cortes premium, vino, steakhouse, cocina contemporanea",
  openGraph: {
    title: "PUA Brasa y Vino | Restaurante Premium",
    description:
      "Donde el fuego encuentra la sofisticacion. Cortes a la brasa, cocina de autor y vinos selectos en Chilpancingo.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
