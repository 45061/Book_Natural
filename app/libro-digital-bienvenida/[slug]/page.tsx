import type { Metadata } from "next"
import { notFound } from "next/navigation"

import WelcomeBookSectionPage, { type SectionSlug } from "@/components/welcome-book-section-page"
import WelcomeBookPage from "@/components/welcome-book-page"
import WelcomeBookStructuredData from "@/components/welcome-book-structured-data"

const validSlugs = new Set([
  "wifi",
  "check-in",
  "desayuno",
  "parqueadero",
  "ubicacion",
  "restaurantes",
  "planes",
  "contacto",
])

const metadataBySlug: Record<SectionSlug, Metadata> = {
  wifi: {
    title: "WiFi del Hotel | Libro de Bienvenida Natural Sevgi",
    description: "Consulta el nombre de la red WiFi y la clave del Hotel Natural Sevgi dentro del libro digital de bienvenida.",
  },
  "check-in": {
    title: "Check-in y Llegada | Libro de Bienvenida Natural Sevgi",
    description: "Informacion de llegada, check-in y recomendaciones para ingresar al Hotel Natural Sevgi sin contratiempos.",
  },
  desayuno: {
    title: "Desayuno | Libro de Bienvenida Natural Sevgi",
    description: "Horarios y referencia del desayuno para huespedes del Hotel Natural Sevgi en Bogota.",
  },
  parqueadero: {
    title: "Parqueadero | Libro de Bienvenida Natural Sevgi",
    description: "Consulta disponibilidad, referencia de tarifa e informacion del parqueadero del Hotel Natural Sevgi.",
  },
  ubicacion: {
    title: "Ubicacion del Hotel | Libro de Bienvenida Natural Sevgi",
    description: "Direccion, referencia con el aeropuerto y lugares utiles cercanos al Hotel Natural Sevgi en Bogota.",
  },
  restaurantes: {
    title: "Restaurantes Cercanos | Libro de Bienvenida Natural Sevgi",
    description: "Restaurantes recomendados cerca del Hotel Natural Sevgi para almorzar, cenar o comer algo rapido.",
  },
  planes: {
    title: "Planes en Bogota | Libro de Bienvenida Natural Sevgi",
    description: "Lugares recomendados y actividades cerca del Hotel Natural Sevgi para aprovechar tu visita a Bogota.",
  },
  contacto: {
    title: "Contacto del Hotel | Libro de Bienvenida Natural Sevgi",
    description: "Canales de contacto y ayuda rapida para huespedes del Hotel Natural Sevgi durante su estancia.",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (!validSlugs.has(params.slug)) {
    return {}
  }

  const baseMetadata = metadataBySlug[params.slug as SectionSlug]

  return {
    ...baseMetadata,
    openGraph: {
      title: typeof baseMetadata.title === "string" ? baseMetadata.title : "Libro de Bienvenida | Hotel Natural Sevgi",
      description: baseMetadata.description ?? "",
      type: "article",
      url: `/libro-digital-bienvenida/${params.slug}`,
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
      title: typeof baseMetadata.title === "string" ? baseMetadata.title : "Libro de Bienvenida | Hotel Natural Sevgi",
      description: baseMetadata.description ?? "",
      images: ["https://hotelnaturalsevgi.com/wp-content/uploads/2024/11/sala-de-espera-en-recepcion.jpg"],
    },
    alternates: {
      canonical: `/libro-digital-bienvenida/${params.slug}`,
    },
  }
}

export default function WelcomeBookDetailPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.has(params.slug)) {
    notFound()
  }

  const pageMetadata = metadataBySlug[params.slug as SectionSlug]
  const title =
    typeof pageMetadata.title === "string" ? pageMetadata.title : "Libro de Bienvenida | Hotel Natural Sevgi"
  const description = pageMetadata.description ?? "Informacion util para huespedes del Hotel Natural Sevgi."

  return (
    <>
      <WelcomeBookStructuredData slug={params.slug} title={title} description={description} />
      <div className="md:hidden">
        <WelcomeBookSectionPage slug={params.slug as SectionSlug} />
      </div>
      <div className="hidden md:block">
        <WelcomeBookPage />
      </div>
    </>
  )
}
