import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ========================================
   Typography System — Michelin Edition
   Playfair Display: elegant serif for headings
   Inter: clean sans-serif for body and UI
   Extended weight range for ultra-light treatments
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
  weight: ["200", "300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "PÚA Brasa y Vino | Restaurante Premium en Chilpancingo",
  description:
    "Experiencia gastronómica de autor. Cortes premium a la brasa, mariscos contemporáneos y una selecta carta de vinos. Reserva tu mesa en PÚA Brasa y Vino.",
  keywords:
    "PÚA, Brasa y Vino, restaurante Chilpancingo, fine dining, cortes premium, vino, steakhouse, cocina contemporánea",
  icons: { icon: "/logo-hero.png", apple: "/logo-hero.png" },
  openGraph: {
    title: "PÚA Brasa y Vino | Restaurante Premium",
    description:
      "Donde el fuego encuentra la sofisticación. Cortes a la brasa, cocina de autor y vinos selectos en Chilpancingo.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=630&q=85&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "PÚA Brasa y Vino — Restaurante Premium en Chilpancingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PÚA Brasa y Vino | Restaurante Premium",
    description: "Cortes a la brasa, cocina de autor y vinos selectos en Chilpancingo.",
    images: ["https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=630&q=85&auto=format&fit=crop"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "PÚA Brasa y Vino",
  "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=85&auto=format",
  "description": "Experiencia gastronómica de autor en Chilpancingo. Cortes premium a la brasa, cocina contemporánea y una selecta carta de vinos.",
  "url": "https://puabrasayvino.com",
  "telephone": "+527471090227",
  "email": "contacto.puabv@gmail.com",
  "priceRange": "$$$$",
  "servesCuisine": ["Mexicana Contemporánea", "Parrilla", "Mariscos"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Lázaro Cárdenas, C. Eduardo Mendoza No. 15-11, Lote 35",
    "addressLocality": "Chilpancingo de los Bravo",
    "addressRegion": "Guerrero",
    "postalCode": "39060",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.5429,
    "longitude": -99.4972
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "13:00",
      "closes": "01:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/puabrasayvino",
    "https://www.instagram.com/puabrasayvino/",
    "https://www.tiktok.com/@pua.restaurante"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
