import type { Metadata } from "next"

import WelcomeBookHome from "@/components/welcome-book-home"
import WelcomeBookPage from "@/components/welcome-book-page"
import WelcomeBookStructuredData from "@/components/welcome-book-structured-data"

const title = "Libro de Bienvenida | Hotel Natural Sevgi"
const description =
  "Guia digital para huespedes del Hotel Natural Sevgi con informacion util de llegada, horarios, servicios, normas del alojamiento y recomendaciones cercanas."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/libro-digital-bienvenida",
    images: [
      {
        url: "https://hotelnaturalsevgi.com/wp-content/uploads/2024/11/sala-de-espera-en-recepcion.jpg",
        width: 1200,
        height: 630,
        alt: "Recepcion del Hotel Natural Sevgi en Bogota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://hotelnaturalsevgi.com/wp-content/uploads/2024/11/sala-de-espera-en-recepcion.jpg"],
  },
  alternates: {
    canonical: "/libro-digital-bienvenida",
  },
}

export default function DigitalWelcomeBookPage() {
  return (
    <>
      <WelcomeBookStructuredData title={title} description={description} />
      <div className="md:hidden">
        <WelcomeBookHome />
      </div>
      <div className="hidden md:block">
        <WelcomeBookPage />
      </div>
    </>
  )
}
