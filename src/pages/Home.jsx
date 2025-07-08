import React from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Heart, Stethoscope, Activity, Users, Mail, Instagram, MapPin, CheckCircle, Star } from "lucide-react"
import antonioImg from "../assets/Antonio.jpeg"
import ivanImg from "../assets/Ivan.png"

export default function FisioClinicLanding() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
    {/* Header */}
        <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">FisioClinic</h1>
              <p className="text-sm text-green-600">Murcia</p>
            </div>
            </div>
                <nav className="hidden md:flex space-x-8 mx-auto">
                <a href="#inicio" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Inicio
                </a>
                <a href="#servicios" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Servicios
                </a>
                <a href="#equipo" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Equipo
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Contacto
                </a>
            </nav>
            <a
                href="https://wa.me/691179230"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors"
            >
                <span className="text-sm font-medium">691 179 230</span>
            </a>
            <div className="hidden md:block w-[120px]"></div>
          </div>
          
        </header>

        {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Próxima apertura en Murcia
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Tu centro de <span className="text-green-600">fisioterapia</span> y pilates terapéutico
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fisioterapia basada en evidencia con tecnología avanzada y pilates terapéutico con máquina Reformer
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full"
                  onClick={() => scrollToSection("contacto")}
                >
                  Reserva tu cita
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Conoce más
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                  alt="Pilates terapéutico con máquina Reformer"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos tratamientos especializados con las técnicas más avanzadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fisioterapia personalizada</h3>
                <p className="text-gray-600">Tratamientos individualizados basados en evidencia científica</p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Osteopatía</h3>
                <p className="text-gray-600">Técnicas manuales para el equilibrio corporal integral</p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ecografía musculoesquelética</h3>
                <p className="text-gray-600">Diagnóstico por imagen para tratamientos precisos</p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pilates terapéutico Reformer</h3>
                <p className="text-gray-600">Ejercicio terapéutico con máquina especializada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valor Diferencial Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Fisioterapia basada en evidencia, tecnología avanzada y atención personalizada
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tecnología de vanguardia</h3>
                    <p className="text-gray-600">Equipos de ecografía y técnicas de diagnóstico avanzadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tratamiento personalizado</h3>
                    <p className="text-gray-600">Cada paciente recibe un plan de tratamiento único</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Profesionales especializados</h3>
                    <p className="text-gray-600">Fisioterapeutas titulados con formación continua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=300&q=80"
                  alt="Ecógrafo profesional"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=300&q=80"
                  alt="Técnicas manuales de fisioterapia"
                  className="rounded-2xl shadow-lg mt-8 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section id="equipo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro equipo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todos nuestros instructores de pilates son fisioterapeutas titulados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={antonioImg}
                    alt="Antonio Sanchez Gonzalez"
                    className="w-[150px] h-[150px] rounded-full mx-auto shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Antonio Sanchez Gonzalez</h3>
                <p className="text-green-600 font-medium mb-3">Fisioterapeuta y Osteópata</p>
                <p className="text-gray-600 text-sm">Especialista en terapia manual y en ecografía musculoesquelética</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={ivanImg}
                    alt="Ivan Muñoz Garcia"
                    className="w-[150px] h-[150px] rounded-full mx-auto shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ivan Muñoz Garcia</h3>
                <p className="text-green-600 font-medium mb-3">Fisioterapeuta Deportivo</p>
                <p className="text-gray-600 text-sm">Experto en pilates terapéutico y rehabilitación</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reserva tu cita</h2>
              <p className="text-xl text-gray-600">
                Contáctanos para más información o para agendar tu primera consulta
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-green-100 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                        <Input placeholder="Tu nombre" className="border-green-200 focus:border-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                        <Input placeholder="Tu teléfono" className="border-green-200 focus:border-green-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                      <Textarea
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={4}
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full">
                      Enviar consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">fisioclinicmurcia@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Instagram</p>
                        <p className="text-gray-600">@fisioclinicmurcia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Ubicación</p>
                        <p className="text-gray-600">Murcia, España</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Fisioterapeutas titulados y especializados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Tecnología de diagnóstico avanzada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Tratamientos personalizados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Pilates terapéutico con máquina Reformer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">FisioClinic</h3>
                  <p className="text-sm text-green-400">Murcia</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Tu bienestar, nuestra prioridad.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>fisioclinicmurcia@gmail.com</p>
                <p>@fisioclinicmurcia</p>
                <p>Murcia, España</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 FisioClinic Murcia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
