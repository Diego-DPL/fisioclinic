import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Heart, Stethoscope, Activity, Users, Mail, Instagram, MapPin, CheckCircle, Star } from "lucide-react"
import antonioImg from "../assets/Antonio_Fisio_3.png"
import ivanImg from "../assets/Ivan_Fisio-removebg.png"
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import VideoPromo from "../assets/Video_Promo_proxima_apertura.mp4"
import CookieConsent from '../components/Cookies.jsx';

export default function FisioClinicLanding() {
  const [ivanOpen, setIvanOpen] = useState(false)
  const [antonioOpen, setAntonioOpen] = useState(false)

  return (
    <>
      <CookieConsent privacyUrl="/src/assets/POLITICA DE COOKIES 2024.docx" />
        {/* Hero Seccion */}
        <section id="inicio" className="bg-green-principal py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                        {/* <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            Próxima apertura en Murcia
                        </div> */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Tu centro de <span className="text-green-claro">FISIOTERAPIA</span>, <span className="text-green-claro">OSTEOPATIA</span> y <span className="text-green-claro">PILATES</span> terapéutico
                        </h1>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                            Fisioterapia basada en evidencia con tecnología avanzada y pilates terapéutico con máquina Reformer
                        </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-4 text-lg rounded-full"
                            onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
                        >
                            Reserva tu cita
                        </Button>
                        {/* <Button
                            variant="outline"
                            size="lg"
                            className="border-marron-oscuro text-marron-oscuro hover:bg-marron-claro px-8 py-4 text-lg rounded-full bg-transparent"
                        >
                            Conoce más
                        </Button> */}
                    </div>
                </div>
                <div className="relative mt-12 lg:mt-0 max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-green-secundario/50 blur-md rounded-3xl transform scale-105"></div>
                    <video
                        src={VideoPromo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-2xl shadow-lg w-full h-auto relative z-10"
                    />
                </div>
                </div>
            </div>
        </section>

        {/* Ubicacion Section */}
        <section id="ubicacion" className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Nuestra Ubicación</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Encuéntranos en Av. Príncipe de Asturias, 3, Murcia. Con parking público cercano.
            </p>
            </div>

            <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-green-100 shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.483987479918!2d-1.139888923679808!3d38.01258997192661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381c60718c38b%3A0x7c9b8b6b1b1b1b1b!2sAv.%20Pr%C3%ADncipe%20de%20Asturias%2C%203%2C%2030007%20Murcia!5e0!3m2!1ses!2ses!4v1620000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de FisioClinic"
                ></iframe>
                </div>
            </Card>
                <div className="mt-6 text-center">
                <p className="text-lg text-green-principal mb-4">
                    <span className="font-semibold">Dirección:</span> Av. Príncipe de Asturias, 3, 30007, Murcia
                </p>
                <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://www.google.com/maps/dir//Av.+Pr%C3%ADncipe+de+Asturias,+3,+30007+Murcia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd6381c60718c38b:0x7c9b8b6b1b1b1b1b?sa=X" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-principal hover:bg-green-secundario text-white w-full sm:w-auto">
                        <MapPin className="mr-2 h-4 w-4" /> Ver en Google Maps
                    </Button>
                    </a>

                    <a href="https://maps.app.goo.gl/g6Gn9TWxyke6hghs5" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-green-principal text-green-principal hover:bg-green-secundario hover:border-green-secundario hover:text-white bg-transparent w-full sm:w-auto">
                        <MapPin className="mr-2 h-4 w-4" /> Parking cercano
                    </Button>
                    </a>
                </div>
            </div>
            </div>
            </div>
        </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Nuestros servicios</h2>
            <p className="text-lg md:text-xl text-green-principal max-w-2xl mx-auto">
              Ofrecemos tratamientos especializados con las técnicas más avanzadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-claro/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 mt-8 text-center">
                <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-principal" />
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">Fisioterapia personalizada</h3>
                <p className="text-gray-600">Tratamientos individualizados basados en evidencia científica</p>
              </CardContent>
            </Card>

            <Card className="border-green-claro/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 mt-8 text-center">
                <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-green-principal" />
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">Osteopatía</h3>
                <p className="text-gray-600">Técnicas manuales para el equilibrio corporal integral</p>
              </CardContent>
            </Card>

            <Card className="border-green-claro/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 mt-8 text-center">
                <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-green-principal" />
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">Ecografía musculoesquelética</h3>
                <p className="text-gray-600">Diagnóstico por imagen para tratamientos precisos</p>
              </CardContent>
            </Card>

            <Card className="border-green-claro/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 mt-8 text-center">
                <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-principal" />
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">Pilates terapéutico Reformer</h3>
                <p className="text-gray-600">Ejercicio terapéutico con máquina especializada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valor Diferencial Section */}
      <section className="py-16 md:py-20 bg-green-secundario/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal leading-tight">
                Fisioterapia basada en evidencia, tecnología avanzada y atención personalizada
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-secundario mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-principal mb-2">Tecnología de vanguardia</h3>
                    <p className="text-gray-600">Equipos de ecografía y técnicas de diagnóstico avanzadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-secundario mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-principal mb-2">Tratamiento personalizado</h3>
                    <p className="text-gray-600">Cada paciente recibe un plan de tratamiento único</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-secundario mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-principal mb-2">Profesionales especializados</h3>
                    <p className="text-gray-600">Fisioterapeutas titulados con formación continua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
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
        <section id="equipo" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Nuestro equipo</h2>
            <p className="text-lg md:text-xl text-green-principal max-w-3xl mx-auto">
              Fisioterapeutas colegiados con amplia experiencia en el sector, en constante formación para ofrecerte el mejor servicio.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <Card className="border-green-100 overflow-hidden text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8 relative group overflow-hidden ">
                <div className="relative z-0 mb-6 h-[-15%]">
                  <img
                    src={antonioImg}
                    alt="Antonio Sanchez Gonzalez"
                    className="object-cover"
                  />
                </div>

                <div className="z-0 ">
                  <h3 className="text-xl font-semibold text-green-principal mb-2">Antonio Sánchez González</h3>
                  <p className="text-green-principal font-medium mb-3 ">Fisioterapeuta y Osteópata</p>
                  <p className="text-gray-600 text-sm px-4 ">Especialista en terapia manual y en ecografía musculoesquelética</p>
                  {/* botón móvil para abrir overlay */}
                  <div className="mt-4 sm:hidden">
                    <button
                      type="button"
                      onClick={() => setAntonioOpen(true)}
                      className="bg-green-principal text-white px-4 py-2 rounded-full text-sm w-full"
                      aria-expanded={antonioOpen}
                      aria-controls="antonio-overlay"
                    >
                      Más info
                    </button>
                  </div>
                </div>

                <div
                  id="ivan-overlay"
                  onClick={() => setAntonioOpen(false)}
                  className={`absolute inset-0 bg-white/95 p-6 text-left transform transition-transform duration-300 ease-in-out z-10
                    ${ivanOpen ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'}
                    group-hover:translate-y-0 group-hover:pointer-events-auto
                    focus-within:translate-y-0 focus-within:pointer-events-auto`}
                  aria-hidden={!antonioOpen}
                  role="region"
                  aria-labelledby="ivan-especialidades"
                >
                  {/* contenedor interior evita que clicks dentro cierren y permite scroll */}
                  <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto max-h-[75vh] sm:max-h-full p-0">
                    <h4 id="ivan-especialidades" className="text-lg font-semibold text-green-principal mb-2">Especialidades</h4>
                    <ul className="text-gray-700 text-sm space-y-3 mt-2 pb-6">
                      <li>🩺 Graduado en Fisioterapia.</li>
                      <li>🦴 Máster en Osteopatía por la Escuela de Osteopatía de Madrid.</li>
                      <li>👴 Máster en Envejecimiento.</li>
                      <li>📡 Máster en Ecografía y Fisioterapia Invasiva.</li>
                      <li>💉 Formación de postgrado en Punción Seca, Neuromodulación y Electroneguroacupuntura.</li>
                      <li>🧠 Especialista en tratamiento de la columna vertebral: hernia discal lumbar y cervical, protrusión discal y discopatías.</li>
                      <li>🤕 Especialista en el tratamiento de migrañas y cefaleas mediante abordaje manual e intervencionista.</li>
                      <li>🎗️ Curso de drenaje linfático manual. Especialista en el tratamiento de complicaciones secundarias al cáncer de mama (linfedema, neuralgias y limitación de movilidad).</li>
                      <li className="mt-2">🧘‍♀️ Pilates terapéutico adaptado a patología de columna.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 overflow-hidden text-center hover:shadow-lg transition-shadow duration-300 ">
              <CardContent className="p-6 md:p-8 relative group overflow-hidden ">
                <div className="relative z-0 mb-6 h-[-15%]">
                  <img
                    src={ivanImg}
                    alt="Ivan Muñoz Garcia"
                    className="object-cover"
                  />
                </div>

                <div className="z-0 ">
                  <h3 className="text-xl font-semibold text-green-principal mb-2">Ivan Muñoz Garcia</h3>
                  <p className="text-green-principal font-medium mb-3 ">Fisioterapeuta y Osteópata</p>
                  <p className="text-gray-600 text-sm px-4 ">Experto en pilates terapéutico y rehabilitación</p>
                  {/* botón móvil para abrir overlay */}
                  <div className="mt-4 sm:hidden">
                    <button
                      type="button"
                      onClick={() => setIvanOpen(true)}
                      className="bg-green-principal text-white px-4 py-2 rounded-full text-sm w-full"
                      aria-expanded={ivanOpen}
                      aria-controls="ivan-overlay"
                    >
                      Más info
                    </button>
                  </div>
                </div>

                <div
                  id="ivan-overlay"
                  onClick={() => setIvanOpen(false)}
                  className={`absolute inset-0 bg-white/95 p-6 text-left transform transition-transform duration-300 ease-in-out z-10
                    ${ivanOpen ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'}
                    group-hover:translate-y-0 group-hover:pointer-events-auto
                    focus-within:translate-y-0 focus-within:pointer-events-auto`}
                  aria-hidden={!ivanOpen}
                  role="region"
                  aria-labelledby="ivan-especialidades"
                >
                  {/* contenedor interior evita que clicks dentro cierren y permite scroll */}
                  <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto max-h-[75vh] sm:max-h-full p-0">
                    <h4 id="ivan-especialidades" className="text-lg font-semibold text-green-principal mb-2">Especialidades</h4>

                    <ul className="text-gray-700 text-sm space-y-3 mt-2 pb-6">
                      <li>🩺 Fisioterapeuta y osteópata, colegiado n°2370, con más de 10 años en el sector de la fisioterapia.</li>
                      <li>🤲 Especialista en terapia manual y en terapia miofascial a la patología de espalda.</li>
                      <li>🏃‍♂️ Experto en fisioterapia deportiva y "return to play".</li>
                      <li>🦷 Especialista en trabajo de la ATM (articulación temporomandibular).</li>
                      <li>💉 Especialista en terapia invasiva ecográfica (EPI y neuromodulación)</li>
                      <li>🧘‍♂️ Formación en pilates reformer aplicado a la patología.</li>
                      <li className="mt-2">📋 Cervicalgia, lumbalgia, tendinopatía, mareos, vértigo, lesión del manguito rotador, dolor de cabeza.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>


            </div>
          </div>
        </section>

      {/* Opiniones Section */}
      <section id="opiniones" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Opiniones de nuestros pacientes</h2>
            <p className="text-lg md:text-xl text-green-principal max-w-2xl mx-auto">
              La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reserva tu cita</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Contáctanos para más información o para agendar tu primera consulta
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-green-secundario/20 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 mt-8 gap-4">
                      <div >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                        <Input placeholder="Tu nombre" className="border-green-secundario/20 " />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                        <Input placeholder="Tu teléfono" className="border-green-secundario/20 " />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        className="border-green-secundario/20 "
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                      <Textarea
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={4}
                        className="border-green-secundario/20 "
                      />
                    </div>
                    <Button className="w-full bg-green-principal hover:bg-green-secundario text-white py-3 text-lg rounded-full">
                      Enviar consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8 mt-12 lg:mt-0">
                <div>
                  <h3 className="text-2xl font-semibold text-green-principal mb-6">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-secundario/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-principal" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">fisioclinicmurcia@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-secundario/20 rounded-full flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-green-principal" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Instagram</p>
                        <p className="text-gray-600">@fisioclinicmurcia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-secundario/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-principal" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Ubicación</p>
                        <p className="text-gray-600">Murcia, España</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-secundario/20 p-6 rounded-2xl">
                  <h4 className="font-semibold text-green-principal mb-3">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-secundario" />
                      <span>Fisioterapeutas titulados y especializados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-secundario" />
                      <span>Tecnología de diagnóstico avanzada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-secundario" />
                      <span>Tratamientos personalizados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-secundario" />
                      <span>Pilates terapéutico con máquina Reformer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
