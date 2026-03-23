import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { hotelWelcomeInfo } from "@/lib/welcome-book-data"

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hotel Natural Sevgi</h3>
            <p className="mb-6 leading-relaxed">
              Tu descanso seguro cerca al Aeropuerto El Dorado. Comodidad, ubicación estratégica y atención
              personalizada.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>{hotelWelcomeInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>{hotelWelcomeInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>{hotelWelcomeInfo.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Accesos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/libro-digital-bienvenida" className="hover:text-secondary transition-colors">
                  Libro Digital
                </Link>
              </li>
              <li>
                <a
                  href="https://direct-book.com/properties/hotelnaturalsevgi?locale=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Reservar Ahora
                </a>
              </li>
              <li>
                <a
                  href="https://hotelnaturalsevgi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Sitio Oficial
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="https://www.instagram.com/hotelnaturalsevgi?igsh=cXNrYzcxNDhsNWN5" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="https://www.facebook.com/hotelnaturalsevgi" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">WhatsApp Directo</h5>
              <Button
                variant="outline"
                className="border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90"
                asChild
              >
                <a href={hotelWelcomeInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {hotelWelcomeInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p>&copy; 2026 Hotel Natural Sevgi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
