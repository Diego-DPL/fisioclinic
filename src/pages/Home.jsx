import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Heart, Stethoscope, Activity, Users, Mail, Instagram, MapPin, CheckCircle, Star, ArrowRight, Phone, User } from "lucide-react"
import antonioImg from "../assets/Antonio_Sanchez_Logo.webp"
import ivanImg from "../assets/Ivan_Muñoz_Logo.webp"
import PilatesImg from "../assets/Pilapes.webp"
import EcografoImg from "../assets/Ecografo.webp"
import CookieConsent from '../components/Cookies.jsx';

const testimonials = [
  { quote: "El trato fue inmejorable y la recuperación de mi lesión de rodilla fue más rápida de lo que esperaba. ¡Grandes profesionales!", name: "María García", city: "Murcia" },
  { quote: "Gracias a las clases de pilates con reformer he mejorado muchísimo mi postura y han desaparecido mis dolores de espalda. Totalmente recomendado.", name: "Juan Pérez", city: "Alcantarilla" },
  { quote: "Utilizan tecnología muy avanzada que me ayudó a entender perfectamente mi lesión. El plan de tratamiento personalizado fue clave.", name: "Laura Martínez", city: "Molina de Segura" },
  { quote: "Un equipo muy cercano y profesional. Me sentí en las mejores manos desde el primer día. ¡Mi centro de fisioterapia de confianza!", name: "Carlos Sánchez", city: "Murcia" },
]

const serviciosDetalle = {
  fisioterapia: {
    titulo: "Fisioterapia personalizada",
    descripcion: "Tratamientos individualizados basados en evidencia científica",
    hover: "Recupera tu movilidad y elimina el dolor con tratamientos personalizados. Especializados en lesiones deportivas, dolores crónicos de espalda, cuello y articulaciones. Técnicas avanzadas adaptadas a tus necesidades.",
    icon: Heart,
    to: "/fisioterapia-personalizada",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  osteopatia: {
    titulo: "Osteopatía",
    descripcion: "Técnicas manuales para el equilibrio corporal integral",
    hover: "Recupera el equilibrio natural de tu cuerpo. Tratamiento efectivo para migrañas, dolor cervical, lumbar y problemas digestivos. Terapia manual que identifica y trata la causa raíz de tu malestar.",
    icon: Stethoscope,
    to: "/osteopatia",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  ecografia: {
    titulo: "Ecografía musculoesquelética",
    descripcion: "Diagnóstico por imagen para tratamientos precisos",
    hover: "Diagnóstico preciso en tiempo real para tu lesión. Visualizamos tendones, músculos y articulaciones. Tratamiento guiado por ecografía para resultados más rápidos y efectivos.",
    icon: Activity,
    to: "/ecografia-musculoesqueletica",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  pilates: {
    titulo: "Pilates terapéutico Reformer",
    descripcion: "Ejercicio terapéutico con máquina especializada",
    hover: "Fortalece tu cuerpo y previene futuras lesiones con Pilates Reformer. Sesiones individuales, en pareja o en grupos reducidos (máx. 6 personas) por niveles con máquina profesional.",
    icon: Users,
    to: "/pilates-terapeutico",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
}

export default function FisioClinicLanding() {
  const [ivanOpen, setIvanOpen] = useState(false)
  const [antonioOpen, setAntonioOpen] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setMapLoaded(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    if (mapRef.current) observer.observe(mapRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CookieConsent privacyUrl="/src/assets/POLITICA DE COOKIES 2024.docx" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative bg-green-principal overflow-hidden py-20 md:py-28">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(64,250,217,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Gradient orb */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-green-secundario/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-claro/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-claro rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">Centro en Murcia · Av. Príncipe de Asturias</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Tu centro de{' '}
                <span className="text-green-claro">fisioterapia</span>,{' '}
                <span className="text-green-claro">osteopatía</span> y{' '}
                <span className="text-green-claro">pilates</span> terapéutico
              </h1>

              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Fisioterapia basada en evidencia con tecnología avanzada y pilates terapéutico con máquina Reformer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://go.fisiotrack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-principal font-bold text-lg shadow-lg hover:bg-green-claro transition-all duration-300"
                >
                  Reserva tu cita
                </a>
                <a
                  href="https://wa.me/+34684708394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 border border-white/40 text-white font-bold text-lg hover:bg-white/25 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  684 708 394
                </a>
              </div>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-1">
                <div className="flex items-center gap-2 text-white/65">
                  <CheckCircle className="w-4 h-4 text-green-claro flex-shrink-0" />
                  <span className="text-sm">Fisioterapeutas colegiados</span>
                </div>
                <div className="flex items-center gap-2 text-white/65">
                  <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                  <span className="text-sm">Más de 300 pacientes</span>
                </div>
                <div className="flex items-center gap-2 text-white/65">
                  <Activity className="w-4 h-4 text-green-claro flex-shrink-0" />
                  <span className="text-sm">Tecnología avanzada</span>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative mt-12 lg:mt-0 max-w-lg mx-auto w-full">
              <div className="absolute -inset-4 bg-green-secundario/20 blur-2xl rounded-3xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={PilatesImg}
                  alt="Pilates terapéutico Reformer en FisioClinic Murcia"
                  className="w-full h-auto block"
                  fetchPriority="high"
                  width={853}
                  height={640}
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ────────────────────────────────────────────────────── */}
      <section id="ubicacion" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full mb-4">Ubicación</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Nuestra Ubicación</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuéntranos en Av. Príncipe de Asturias, 3, Murcia. Con parking público cercano.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl rounded-3xl">
              <div ref={mapRef} style={{ minHeight: '450px' }}>
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.483987479918!2d-1.139888923679808!3d38.01258997192661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381c60718c38b%3A0x7c9b8b6b1b1b1b1b!2sAv.%20Pr%C3%ADncipe%20de%20Asturias%2C%203%2C%2030007%20Murcia!5e0!3m2!1ses!2ses!4v1620000000000"
                    width="100%" height="450" style={{ border: 0 }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de FisioClinic"
                  />
                ) : (
                  <div className="w-full h-[450px] bg-gray-100 rounded-3xl flex items-center justify-center" role="status">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2 text-green-principal" />
                      <p className="text-sm font-medium">Cargando mapa...</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            <div className="mt-6 text-center">
              <p className="text-lg text-green-principal mb-4">
                <span className="font-semibold">Dirección:</span> Av. Príncipe de Asturias, 3, 30007, Murcia
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://www.google.com/maps/dir//Av.+Pr%C3%ADncipe+de+Asturias,+3,+30007+Murcia" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-principal hover:bg-green-secundario text-white w-full sm:w-auto rounded-full">
                    <MapPin className="mr-2 h-4 w-4" /> Ver en Google Maps
                  </Button>
                </a>
                <a href="https://maps.app.goo.gl/g6Gn9TWxyke6hghs5" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-green-principal text-green-principal hover:bg-green-secundario hover:border-green-secundario hover:text-white bg-transparent w-full sm:w-auto rounded-full">
                    <MapPin className="mr-2 h-4 w-4" /> Parking cercano
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full mb-4">Servicios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">¿En qué podemos ayudarte?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos tratamientos especializados con las técnicas más avanzadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(serviciosDetalle).map(([key, s]) => {
              const Icon = s.icon
              return (
                <Link key={key} to={s.to} className="block group">
                  <div
                    className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white h-full flex flex-col"
                    onMouseEnter={() => setHoveredService(key)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Top accent */}
                    <div className="h-1.5 bg-gradient-to-r from-green-principal to-green-secundario flex-shrink-0" />
                    <div className="p-7 flex flex-col flex-1">
                      <div className={`w-14 h-14 ${s.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${s.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-green-principal mb-3">{s.titulo}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.descripcion}</p>
                      <div className="mt-5 flex items-center text-green-principal text-sm font-semibold">
                        <span>Saber más</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-green-principal text-white p-7 rounded-2xl flex flex-col justify-center transition-opacity duration-300 ${hoveredService === key ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <p className="text-sm leading-relaxed mb-4">{s.hover}</p>
                      <span className="text-xs font-semibold text-green-claro flex items-center gap-1">
                        Haz clic para saber más <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ NOSOTROS ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full">¿Por qué FisioClinic?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal leading-tight">
                Fisioterapia basada en evidencia, tecnología avanzada y atención personalizada
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Tecnología de vanguardia', desc: 'Equipos de ecografía y técnicas de diagnóstico avanzadas para un diagnóstico preciso en tiempo real.' },
                  { title: 'Tratamiento 100% personalizado', desc: 'Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades específicas.' },
                  { title: 'Profesionales especializados', desc: 'Fisioterapeutas titulados con formación continua y más de 10 años de experiencia clínica.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-green-claro/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-principal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-principal mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <img
                    src={EcografoImg}
                    alt="Ecógrafo profesional en FisioClinic Murcia"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    width={448}
                    height={600}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8 h-64">
                  <img
                    src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80"
                    alt="Sesión de fisioterapia personalizada"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-principal text-white rounded-2xl px-5 py-3 shadow-xl text-center z-10 whitespace-nowrap">
                <p className="font-bold text-sm">Diagnóstico con ecografía</p>
                <p className="text-green-claro text-xs mt-0.5">Tecnología de última generación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────────────── */}
      <section id="equipo" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full mb-4">Nuestro equipo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Profesionales a tu servicio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fisioterapeutas colegiados con amplia experiencia, en constante formación para ofrecerte el mejor servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">

            {/* Antonio */}
            <div className="group">
              <Card className="border-0 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <CardContent className="p-0 relative overflow-hidden" style={{ height: '420px' }}>
                  <img
                    src={antonioImg}
                    alt="Antonio Sánchez González - Fisioterapeuta y Osteópata"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    width={500}
                    height={420}
                  />
                  {/* Name overlay always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pointer-events-none">
                    <h3 className="text-white font-bold text-xl">Antonio Sánchez</h3>
                    <p className="text-green-claro text-sm font-medium mt-0.5">Fisioterapeuta & Osteópata</p>
                  </div>
                  {/* Specialties overlay on hover */}
                  <div
                    id="antonio-overlay"
                    onClick={() => setAntonioOpen(false)}
                    className={`absolute inset-0 bg-white/97 backdrop-blur-sm text-left transform transition-transform duration-300 ease-in-out z-10
                      ${antonioOpen ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'}
                      group-hover:translate-y-0 group-hover:pointer-events-auto`}
                    aria-hidden={!antonioOpen}
                    role="region"
                    aria-labelledby="antonio-especialidades"
                  >
                    <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto h-full p-6">
                      <h4 id="antonio-especialidades" className="text-lg font-bold text-green-principal">Antonio Sánchez</h4>
                      <p className="text-green-secundario text-sm font-medium mb-4">Fisioterapeuta & Osteópata</p>
                      <ul className="text-gray-700 text-sm space-y-2.5">
                        {[
                          'Graduado en Fisioterapia.',
                          'Máster en Osteopatía por la Escuela de Osteopatía de Madrid.',
                          'Máster en Envejecimiento.',
                          'Máster en Ecografía y Fisioterapia Invasiva.',
                          'Formación de postgrado en Punción Seca, Neuromodulación y Electroneuroacupuntura.',
                          'Especialista en columna vertebral: hernia discal lumbar y cervical, protrusión discal y discopatías.',
                          'Especialista en migrañas y cefaleas mediante abordaje manual e intervencionista.',
                          'Drenaje linfático manual. Especialista en linfedema y complicaciones post cáncer de mama.',
                          'Pilates terapéutico adaptado a patología de columna.',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-principal mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAntonioOpen(true)}
                    className="absolute inset-0 w-full h-full opacity-0"
                    aria-label="Ver información de Antonio"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Iván */}
            <div className="group">
              <Card className="border-0 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <CardContent className="p-0 relative overflow-hidden" style={{ height: '420px' }}>
                  <img
                    src={ivanImg}
                    alt="Iván Muñoz García - Fisioterapeuta y Osteópata"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    width={500}
                    height={420}
                  />
                  {/* Name overlay always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pointer-events-none">
                    <h3 className="text-white font-bold text-xl">Iván Muñoz</h3>
                    <p className="text-green-claro text-sm font-medium mt-0.5">Fisioterapeuta & Osteópata</p>
                  </div>
                  {/* Specialties overlay on hover */}
                  <div
                    id="ivan-overlay"
                    onClick={() => setIvanOpen(false)}
                    className={`absolute inset-0 bg-white/97 backdrop-blur-sm text-left transform transition-transform duration-300 ease-in-out z-10
                      ${ivanOpen ? 'translate-y-0 pointer-events-auto' : 'translate-y-full pointer-events-none'}
                      group-hover:translate-y-0 group-hover:pointer-events-auto`}
                    aria-hidden={!ivanOpen}
                    role="region"
                    aria-labelledby="ivan-especialidades"
                  >
                    <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto h-full p-6">
                      <h4 id="ivan-especialidades" className="text-lg font-bold text-green-principal">Iván Muñoz</h4>
                      <p className="text-green-secundario text-sm font-medium mb-4">Fisioterapeuta & Osteópata · Col. 2370</p>
                      <ul className="text-gray-700 text-sm space-y-2.5">
                        {[
                          'Fisioterapeuta y osteópata, colegiado n°2370, con más de 10 años en el sector.',
                          'Especialista en terapia manual y miofascial aplicada a patología de espalda.',
                          'Experto en fisioterapia deportiva y "return to play".',
                          'Especialista en trabajo de la ATM (articulación temporomandibular).',
                          'Especialista en terapia invasiva ecográfica (EPI y neuromodulación).',
                          'Formación en pilates reformer aplicado a la patología.',
                          'Tratamiento de cervicalgia, lumbalgia, tendinopatía, mareos, vértigo, manguito rotador y cefaleas.',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-principal mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIvanOpen(true)}
                    className="absolute inset-0 w-full h-full opacity-0"
                    aria-label="Ver información de Ivan"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ────────────────────────────────────────────────────── */}
      <section id="opiniones" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full mb-4">Opiniones</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">Lo que dicen nuestros pacientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map(({ quote, name, city }, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-5 text-[15px]">"{quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-principal/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-green-principal" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{name}</p>
                      <p className="text-gray-400 text-xs">{city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-green-claro/20 text-green-principal text-sm font-semibold rounded-full mb-4">Contacto</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reserva tu cita</h2>
              <p className="text-lg text-gray-600 mb-6">
                Contáctanos para más información o para agendar tu primera consulta
              </p>
              <a
                href="https://wa.me/+34684708394"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1dba59] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-green-secundario/20 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                        <Input placeholder="Tu nombre" className="border-gray-200 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                        <Input placeholder="Tu teléfono" className="border-gray-200 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                      <Input type="email" placeholder="tu@email.com" className="border-gray-200 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                      <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} className="border-gray-200 rounded-xl" />
                    </div>
                    <Button className="w-full bg-green-principal hover:bg-green-secundario text-white py-3 text-lg rounded-full transition-colors">
                      Enviar consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 lg:pt-2">
                <h3 className="text-2xl font-bold text-green-principal">Información de contacto</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'fisioclinicmurcia@gmail.com', href: 'mailto:fisioclinicmurcia@gmail.com' },
                    { icon: Instagram, label: 'Instagram', value: '@fisioclinicmurcia', href: 'https://www.instagram.com/fisioclinicmurcia' },
                    { icon: MapPin, label: 'Ubicación', value: 'Av. Príncipe de Asturias, 3, Murcia', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-11 h-11 bg-green-secundario/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-principal" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                        {href ? (
                          <a href={href} className="font-semibold text-gray-800 hover:text-green-principal transition-colors text-sm">{value}</a>
                        ) : (
                          <p className="font-semibold text-gray-800 text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-green-principal to-green-principal/90 p-6 rounded-2xl text-white">
                  <h4 className="font-bold mb-3 text-lg">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2.5">
                    {[
                      'Fisioterapeutas titulados y especializados',
                      'Tecnología de diagnóstico avanzada',
                      'Tratamientos 100% personalizados',
                      'Pilates terapéutico con máquina Reformer',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                        <CheckCircle className="w-4 h-4 text-green-claro flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
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
