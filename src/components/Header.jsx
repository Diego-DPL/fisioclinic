import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Phone, Calendar, Menu, X } from "lucide-react"
import Logo_Full_verde from "../assets/Logo_Full_verde.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
    
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false);
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-green-principal focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:font-bold"
      >
        Saltar al contenido principal
      </a>
      <header className="bg-white/90 shadow-sm border-b border-green-secundario sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <img src={Logo_Full_verde} alt="FisioClinic Logo" className="h-12 md:h-16" width={196} height={64} />
          </Link>
          <nav aria-label="Navegación principal" className="hidden lg:flex flex-grow justify-center md:space-x-4 lg:space-x-14">
            <button type="button" onClick={() => scrollToSection('inicio')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Inicio
            </button>
            <button type="button" onClick={() => scrollToSection('servicios')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Servicios
            </button>
            <button type="button" onClick={() => scrollToSection('equipo')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Equipo
            </button>
            <button type="button" onClick={() => scrollToSection('contacto')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Contacto
            </button>
          </nav>
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <a
              href="https://wa.me/+34684708394"
              aria-label="Llamar o enviar WhatsApp al 684 708 394"
              className="flex items-center space-x-2 bg-green-principal hover:bg-green-secundario text-white px-3 sm:px-4 py-2 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-sm sm:text-base font-medium">684 708 394</span>
            </a>
            <button
              onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              aria-label="Reservar cita online"
              className="flex items-center space-x-2 border border-green-principal text-green-principal hover:bg-green-50 hover:border-green-secundario hover:text-black px-3 sm:px-4 py-2 rounded-full transition-colors"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-sm sm:text-base font-medium">Cita online</span>
            </button>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                aria-expanded={isMenuOpen}
                className="p-2"
              >
                {isMenuOpen ? <X className="w-7 h-7 text-green-principal" aria-hidden="true" /> : <Menu className="w-7 h-7 text-green-principal" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav aria-label="Navegación móvil" className="lg:hidden bg-white flex flex-col items-center space-y-6 py-8 border-t border-green-100">
            <button type="button" onClick={() => scrollToSection('inicio')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Inicio
            </button>
            <button type="button" onClick={() => scrollToSection('servicios')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Servicios
            </button>
            <button type="button" onClick={() => scrollToSection('equipo')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Equipo
            </button>
            <button type="button" onClick={() => scrollToSection('contacto')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors bg-transparent border-none">
              Contacto
            </button>
          </nav>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex bg-black/40 items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-green-principal mb-4">
              Cita online próximamente
            </h3>
            <p className="text-gray-600 mb-6">
              La reserva de citas online estará disponible muy pronto. ¡Gracias por tu paciencia!
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-green-principal hover:bg-green-secundario text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
