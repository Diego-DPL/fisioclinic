import React from 'react'
import { Mail, Instagram } from "lucide-react"
import Logo_Full_blanco from "../assets/Logo_Full_blanco.png"

export default function Footer() {
  return (
    <footer className="bg-green-principal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <img src={Logo_Full_blanco} alt="FisioClinic Logo" className="h-16" />
              </div>
            </div>
            <p className="text-white mb-4">Tu bienestar, nuestra prioridad.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-100">
              <p>fisioclinicmurcia@gmail.com</p>
              <a
                href="https://www.instagram.com/fisioclinicmurcia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-secundario transition-colors"
              >
                @fisioclinicmurcia
              </a>
              <p>Av. Príncipe de Asturias, 3, Murcia, España</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fisioclinicmurcia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-principal rounded-full flex items-center justify-center hover:bg-green-secundario transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-principal rounded-full flex items-center justify-center hover:bg-green-secundario transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-principal mt-8 pt-8 text-center">
          <p className="text-white">© 2025 FisioClinic Murcia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
