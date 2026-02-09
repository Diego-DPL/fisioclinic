import React, { useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle, Stethoscope, Clock, Award, MapPin, Phone, Calendar, Heart } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Osteopatia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Osteopatía en Murcia Centro | Tratamiento Holístico Av. Príncipe de Asturias"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Osteopatía profesional en Murcia centro, Av. Príncipe de Asturias 3. Tratamiento de migrañas, dolor cervical, lumbar y problemas digestivos. Centro cerca del Zigzag. Reserva cita.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-principal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-claro/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Terapia Manual Especializada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Osteopatía en Murcia Centro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Recupera el equilibrio natural de tu cuerpo con técnicas manuales especializadas. Tratamiento integral de la causa, no solo los síntomas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserva tu Sesión
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent"
                onClick={() => window.location.href = '#contacto'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Consulta Gratuita
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
              <span className="font-medium">Zona Zigzag</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-principal/30"></div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              <span className="font-medium">Osteópatas Titulados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es la Osteopatía */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-6">
                ¿Qué es la Osteopatía?
              </h2>
              <div className="w-24 h-1 bg-green-claro mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                La <strong>osteopatía</strong> es una terapia manual global que trata el cuerpo como una unidad funcional. A diferencia de tratamientos que solo abordan el síntoma local, la osteopatía busca y corrige la <strong>causa raíz</strong> de tu malestar.
              </p>
              
              <p className="text-lg leading-relaxed">
                En <strong>FisioClinic Murcia</strong>, ubicados en Av. Príncipe de Asturias 3, cerca del Zigzag, nuestros osteópatas están formados en la Escuela de Osteopatía de Madrid, garantizando un tratamiento profesional y efectivo basado en años de experiencia clínica.
              </p>

              <Card className="bg-green-secundario/10 border-green-claro/30 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-principal mb-4 flex items-center">
                    <Heart className="mr-3 h-7 w-7 text-green-claro" />
                    Principios de la Osteopatía
                  </h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>El cuerpo es una unidad:</strong> Todos los sistemas están interconectados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>La estructura gobierna la función:</strong> Un problema estructural afecta al funcionamiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Autocuración:</strong> El cuerpo tiene capacidad natural de recuperación</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                Un osteópata no solo trabaja huesos y articulaciones, sino también <strong>músculos, fascias, vísceras y el sistema craneal</strong>. Esta visión holística permite tratar problemas que otros enfoques no consiguen resolver.
              </p>
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
                Problemas que Trata la Osteopatía
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tratamiento efectivo para múltiples condiciones donde la medicina tradicional no siempre encuentra solución
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Migrañas y Cefaleas",
                  descripcion: "Dolores de cabeza tensionales, migrañas crónicas, cefalea cervicogénica mediante técnicas craneales"
                },
                {
                  titulo: "Dolor Cervical",
                  descripcion: "Tortícolis, cervicalgia crónica, latigazo cervical, dolor de cuello persistente"
                },
                {
                  titulo: "Dolor Lumbar",
                  descripcion: "Lumbalgia aguda y crónica, ciática, hernias discales, dolor de espalda baja"
                },
                {
                  titulo: "Problemas Digestivos",
                  descripcion: "Estreñimiento, reflujo gastroesofágico, colon irritable, hinchazón abdominal"
                },
                {
                  titulo: "Vértigos y Mareos",
                  descripcion: "Mareos cervicales, vértigo posicional, problemas de equilibrio"
                },
                {
                  titulo: "Bruxismo y ATM",
                  descripcion: "Dolor de mandíbula, rechinar de dientes, limitación apertura bucal, chasquidos"
                },
                {
                  titulo: "Dolor de Hombro",
                  descripcion: "Capsulitis adhesiva (hombro congelado), tendinitis, dolor articular de hombro"
                },
                {
                  titulo: "Problemas Respiratorios",
                  descripcion: "Dificultad respiratoria, asma, bronquitis de repetición (tratamiento complementario)"
                },
                {
                  titulo: "Embarazo y Postparto",
                  descripcion: "Dolor lumbar durante embarazo, preparación al parto, recuperación postparto"
                },
                {
                  titulo: "Estrés y Ansiedad",
                  descripcion: "Tensión muscular por estrés, contracturas por ansiedad, alteraciones del sueño"
                },
                {
                  titulo: "Lesiones Deportivas",
                  descripcion: "Esguinces, tendinitis, sobrecargas musculares, prevención de lesiones"
                },
                {
                  titulo: "Dolor Articular",
                  descripcion: "Artrosis, rigidez articular, limitación de movilidad en cualquier articulación"
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

      {/* Tipos de Osteopatía */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Nuestras Especialidades en Osteopatía
              </h2>
              <p className="text-xl text-gray-600">
                Dominio de las tres ramas principales de la osteopatía moderna
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto">
                      <Stethoscope className="w-10 h-10 text-green-principal" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-principal mb-4 text-center">
                    Osteopatía Estructural
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Trabaja sobre el <strong>sistema musculoesquelético</strong>: huesos, articulaciones, músculos y ligamentos.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Manipulaciones vertebrales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Movilizaciones articulares</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Técnicas de energía muscular</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Corrección postural</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-green-principal" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-principal mb-4 text-center">
                    Osteopatía Visceral
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Se centra en los <strong>órganos internos</strong> y su relación con el sistema musculoesquelético.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Movilización de órganos digestivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Tratamiento de adherencias</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Mejora de la función digestiva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Problemas respiratorios</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-10 h-10 text-green-principal" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-principal mb-4 text-center">
                    Osteopatía Craneal
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Trabaja sobre el <strong>cráneo y sistema nervioso</strong> con técnicas sutiles y precisas.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Tratamiento de migrañas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Vértigos y mareos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Bruxismo y ATM</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Estrés y ansiedad</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo es una sesión */}
      <section className="py-16 md:py-20 bg-green-secundario/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                ¿Cómo es una Sesión de Osteopatía?
              </h2>
              <p className="text-xl text-gray-600">
                Conoce qué esperar en tu primera visita a nuestro centro en Murcia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Anamnesis Detallada (15 min)
                      </h3>
                      <p className="text-gray-600">
                        Conversamos sobre tu historial médico, síntomas actuales, estilo de vida y objetivos. Es fundamental conocerte para ofrecer el mejor tratamiento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Evaluación Completa (15 min)
                      </h3>
                      <p className="text-gray-600">
                        Realizamos pruebas de movilidad, palpación de tejidos, análisis postural y test específicos para identificar la causa de tu problema.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Tratamiento Osteopático (25-30 min)
                      </h3>
                      <p className="text-gray-600">
                        Aplicamos técnicas manuales específicas: manipulaciones, movilizaciones, trabajo visceral o craneal según tu necesidad. Tratamiento siempre adaptado y respetuoso.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Consejos y Seguimiento (5-10 min)
                      </h3>
                      <p className="text-gray-600">
                        Te explicamos qué hemos hecho, damos pautas para casa (ejercicios, posturas, hábitos) y planificamos el seguimiento según tu evolución.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-white border-green-claro/30">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-green-principal mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-principal mb-3">
                  Duración Total: 60 minutos
                </h3>
                <p className="text-gray-600 text-lg">
                  Dedicamos el tiempo necesario para entenderte y tratarte de forma personalizada. No trabajamos con prisas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Osteopatía Profesional en Murcia Centro
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Formación Especializada
                  </h3>
                  <p className="text-gray-600">
                    Máster en Osteopatía por la Escuela de Osteopatía de Madrid. Más de 10 años de experiencia tratando pacientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Centro en Murcia Centro
                  </h3>
                  <p className="text-gray-600">
                    Av. Príncipe de Asturias 3, cerca del Zigzag. Fácil acceso en transporte público y parking cercano disponible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Tratamiento Integral
                  </h3>
                  <p className="text-gray-600">
                    Combinamos osteopatía con fisioterapia y ejercicio terapéutico para resultados óptimos y duraderos.
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
              Recupera tu Equilibrio Natural
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Reserva tu sesión de osteopatía en Murcia. Tratamiento profesional para migrañas, dolor cervical, lumbar y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Sesión Online
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
