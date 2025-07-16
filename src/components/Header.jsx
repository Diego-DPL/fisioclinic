import React, { useState } from 'react'
import { Phone, Calendar, Menu, X } from "lucide-react"
import Logo_Full_verde from "../assets/Logo_Full_verde.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="bg-white/90 shadow-sm border-b border-green-secundario sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <img src={Logo_Full_verde} alt="FisioClinic Logo" className="h-12 md:h-16" />
          </div>
          <nav className="hidden lg:flex flex-grow justify-center md:space-x-4 lg:space-x-14">
            <a onClick={() => scrollToSection('inicio')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Inicio
            </a>
            <a onClick={() => scrollToSection('servicios')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Servicios
            </a>
            <a onClick={() => scrollToSection('equipo')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Equipo
            </a>
            <a onClick={() => scrollToSection('contacto')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Contacto
            </a>
          </nav>
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <a
              href="https://wa.me/691179230"
              className="flex items-center space-x-2 bg-green-principal hover:bg-green-secundario text-white px-3 sm:px-4 py-2 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline text-sm sm:text-base font-medium">691 179 230</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 border border-green-principal text-green-principal hover:bg-green-50 hover:border-green-secundario hover:text-black px-3 sm:px-4 py-2 rounded-full transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline text-sm sm:text-base font-medium">Cita online</span>
            </button>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-7 h-7 text-green-principal" /> : <Menu className="w-7 h-7 text-green-principal" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white flex flex-col items-center space-y-6 py-8 border-t border-green-100">
            <a onClick={() => scrollToSection('inicio')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Inicio
            </a>
            <a onClick={() => scrollToSection('servicios')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Servicios
            </a>
            <a onClick={() => scrollToSection('equipo')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Equipo
            </a>
            <a onClick={() => scrollToSection('contacto')} className="cursor-pointer text-lg text-green-principal hover:text-green-secundario font-bold transition-colors">
              Contacto
            </a>
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
