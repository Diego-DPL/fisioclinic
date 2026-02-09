import React, { useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle, Heart, Clock, Award, MapPin, Phone, Calendar } from "lucide-react"
import { Link } from 'react-router-dom'

export default function FisioterapiaPersonalizada() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Fisioterapia Personalizada en Murcia Centro | FisioClinic Av. Príncipe de Asturias"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fisioterapia personalizada en Murcia centro, Av. Príncipe de Asturias 3, cerca del Zigzag. Tratamiento individualizado para lesiones deportivas, dolor de espalda y rehabilitación. ¡Reserva cita!')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-principal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-claro/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Servicio Especializado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fisioterapia Personalizada en Murcia Centro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Recupera tu movilidad y elimina el dolor con tratamientos individualizados basados en evidencia científica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserva tu Primera Cita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent"
                onClick={() => window.location.href = '#contacto'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Consulta sin Compromiso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación destacada */}
      <section className="py-8 bg-green-secundario/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-green-principal">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Av. Príncipe de Asturias 3, Murcia Centro</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-principal/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Cerca del Zigzag</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-principal/30"></div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Cita el mismo día</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es la Fisioterapia Personalizada */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-6">
                ¿Qué es la Fisioterapia Personalizada?
              </h2>
              <div className="w-24 h-1 bg-green-claro mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                La <strong>fisioterapia personalizada</strong> es un enfoque terapéutico individualizado donde cada tratamiento se diseña específicamente para ti, basándose en tu condición única, objetivos personales y estilo de vida.
              </p>
              
              <p className="text-lg leading-relaxed">
                En <strong>FisioClinic Murcia</strong>, ubicados en Av. Príncipe de Asturias 3, cerca del Zigzag en pleno centro de Murcia, no aplicamos protocolos genéricos. Realizamos una evaluación completa de tu situación para crear un plan de tratamiento que se adapte a tus necesidades específicas.
              </p>

              <Card className="bg-green-secundario/10 border-green-claro/30 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-principal mb-4 flex items-center">
                    <Heart className="mr-3 h-7 w-7 text-green-claro" />
                    Nuestro Enfoque en Murcia Centro
                  </h3>
                  <p className="text-lg text-gray-700">
                    Combinamos <strong>técnicas manuales avanzadas</strong> con tecnología de última generación, incluyendo ecografía musculoesquelética, para ofrecer el mejor tratamiento de fisioterapia en Murcia. Cada sesión está diseñada para acelerar tu recuperación y prevenir futuras lesiones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patologías que tratamos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Patologías que Tratamos con Fisioterapia
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experiencia comprobada en el tratamiento de múltiples condiciones musculoesqueléticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Lesiones Deportivas",
                  descripcion: "Esguinces, roturas fibrilares, tendinitis, rehabilitación post-cirugía deportiva"
                },
                {
                  titulo: "Dolor de Espalda",
                  descripcion: "Lumbalgia, ciática, hernias discales, contracturas musculares, dolor crónico"
                },
                {
                  titulo: "Dolor Cervical",
                  descripcion: "Cervicalgia, latigazo cervical, dolor de cuello por posturas, mareos cervicales"
                },
                {
                  titulo: "Lesiones de Hombro",
                  descripcion: "Tendinitis del manguito rotador, capsulitis adhesiva, dolor de hombro"
                },
                {
                  titulo: "Problemas de Rodilla",
                  descripcion: "Condromalacia rotuliana, esguinces de ligamentos, tendinitis rotuliana"
                },
                {
                  titulo: "Rehabilitación Post-Operatoria",
                  descripcion: "Recuperación tras cirugías ortopédicas, implantes, fracturas"
                },
                {
                  titulo: "Dolor Articular",
                  descripcion: "Artrosis, artritis, rigidez articular, limitación de movilidad"
                },
                {
                  titulo: "Fascitis Plantar",
                  descripcion: "Dolor en la planta del pie, espolón calcáneo, problemas de pisada"
                },
                {
                  titulo: "Dolores Crónicos",
                  descripcion: "Fibromialgia, dolor muscular persistente, tensión crónica"
                }
              ].map((patologia, index) => (
                <Card key={index} className="border-green-claro/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-claro/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-green-principal" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-principal mb-2">
                          {patologia.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {patologia.descripcion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Nuestro Método de Trabajo en FisioClinic Murcia
              </h2>
              <p className="text-xl text-gray-600">
                Un proceso estructurado para garantizar tu recuperación completa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Evaluación Inicial Completa
                </h3>
                <p className="text-gray-600">
                  Realizamos una valoración exhaustiva de tu historial médico, condición actual y objetivos de recuperación. Incluye pruebas funcionales y análisis postural.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Diagnóstico Preciso
                </h3>
                <p className="text-gray-600">
                  Identificamos la causa raíz de tu dolor o lesión utilizando técnicas avanzadas de evaluación y, cuando es necesario, ecografía musculoesquelética.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Plan de Tratamiento Personalizado
                </h3>
                <p className="text-gray-600">
                  Diseñamos un programa específico con técnicas de terapia manual, ejercicios terapéuticos y tratamientos tecnológicos adaptados a ti.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Seguimiento y Prevención
                </h3>
                <p className="text-gray-600">
                  Monitorizamos tu evolución en cada sesión y te enseñamos estrategias para prevenir futuras lesiones y mantener los resultados a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas que utilizamos */}
      <section className="py-16 md:py-20 bg-green-secundario/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Técnicas de Fisioterapia Avanzadas
              </h2>
              <p className="text-xl text-gray-600">
                Combinamos lo mejor de la fisioterapia tradicional con la tecnología más moderna
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-4">
                    Terapia Manual Especializada
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Manipulaciones articulares de alta velocidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Movilizaciones articulares y neurales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Terapia miofascial y liberación de puntos gatillo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Masaje terapéutico profundo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-4">
                    Fisioterapia Invasiva
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Punción seca para puntos gatillo miofasciales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Electrolisis percutánea intratisular (EPI)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Neuromodulación percutánea</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Todas guiadas por ecografía para máxima precisión</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-4">
                    Ejercicio Terapéutico
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Programas de fortalecimiento progresivo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Rehabilitación funcional y readaptación deportiva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Ejercicios de control motor y estabilización</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Pilates terapéutico con máquina Reformer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-4">
                    Tecnología Avanzada
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Ecografía musculoesquelética diagnóstica</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Tratamientos guiados por imagen en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Diatermia de alta frecuencia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span>Electroterapia y TENS</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                ¿Por Qué Elegir FisioClinic en Murcia Centro?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Fisioterapeutas Especializados
                  </h3>
                  <p className="text-gray-600">
                    Profesionales colegiados con más de 10 años de experiencia y formación continua en las técnicas más avanzadas de fisioterapia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Ubicación Céntrica en Murcia
                  </h3>
                  <p className="text-gray-600">
                    Situados en Av. Príncipe de Asturias 3, cerca del Zigzag en pleno centro de Murcia. Fácil acceso y parking cercano para tu comodidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Atención Rápida
                  </h3>
                  <p className="text-gray-600">
                    Ofrecemos citas el mismo día o en 24-48 horas. No esperes semanas con dolor, te atendemos cuando más lo necesitas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-green-principal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Recuperar tu Bienestar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agenda tu primera cita de fisioterapia en nuestro centro de Murcia. Tratamiento personalizado desde la primera sesión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Cita Online
              </Button>
              <Link to="/#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent w-full"
                >
                  Más Información
                </Button>
              </Link>
            </div>
            <p className="text-white/80 mt-6">
              📍 Av. Príncipe de Asturias 3 - Murcia Centro (cerca del Zigzag)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
