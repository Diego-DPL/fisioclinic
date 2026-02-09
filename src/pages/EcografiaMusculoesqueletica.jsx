import React, { useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle, Activity, Clock, Award, MapPin, Phone, Calendar, Eye, Target } from "lucide-react"
import { Link } from 'react-router-dom'

export default function EcografiaMusculoesqueletica() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Ecografía Musculoesquelética en Murcia | Diagnóstico Preciso Av. Príncipe de Asturias"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ecografía musculoesquelética en Murcia centro. Diagnóstico preciso de tendones, músculos y ligamentos. Tratamiento guiado por imagen. Centro cerca del Zigzag.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-principal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-claro/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Tecnología Diagnóstica Avanzada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ecografía Musculoesquelética en Murcia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Diagnóstico preciso en tiempo real para tu lesión. Visualiza exactamente qué está fallando para un tratamiento más efectivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Solicita tu Ecografía
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent"
                onClick={() => window.location.href = '#contacto'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Consulta Casos Dudosos
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
              <Activity className="h-5 w-5" />
              <span className="font-medium">Ecógrafo de Alta Resolución</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-principal/30"></div>
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              <span className="font-medium">Diagnóstico en Tiempo Real</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es la Ecografía Musculoesquelética */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-6">
                ¿Qué es la Ecografía Musculoesquelética?
              </h2>
              <div className="w-24 h-1 bg-green-claro mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                La <strong>ecografía musculoesquelética</strong> es una técnica de diagnóstico por imagen que utiliza ondas de ultrasonido para visualizar en tiempo real <strong>tendones, músculos, ligamentos, nervios y articulaciones</strong>.
              </p>
              
              <p className="text-lg leading-relaxed">
                En <strong>FisioClinic Murcia</strong>, ubicados en Av. Príncipe de Asturias 3, cerca del Zigzag, contamos con un ecógrafo de última generación que nos permite identificar con precisión milimétrica la causa de tu lesión, evitando diagnósticos por intuición.
              </p>

              <Card className="bg-green-secundario/10 border-green-claro/30 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-principal mb-4 flex items-center">
                    <Target className="mr-3 h-7 w-7 text-green-claro" />
                    Ventajas de la Ecografía en Fisioterapia
                  </h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Diagnóstico preciso:</strong> Vemos exactamente qué tejido está dañado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>No invasivo y sin radiación:</strong> Totalmente seguro, sin efectos secundarios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Tiempo real:</strong> Evaluación dinámica del movimiento y la lesión</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Guía para tratamiento:</strong> Permite aplicar técnicas invasivas con precisión</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                A diferencia de las radiografías (que solo ven hueso) o las resonancias magnéticas (caras y con lista de espera larga), la ecografía permite evaluar <strong>tejidos blandos de forma inmediata</strong> en la misma consulta, ajustando el tratamiento al momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué detectamos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                ¿Qué Detectamos con la Ecografía?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Identificamos con precisión una amplia variedad de lesiones musculoesqueléticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Tendinitis y Tendinosis",
                  descripcion: "Inflamación o degeneración de tendones: rotuliano, aquiles, manguito rotador, epicondilitis"
                },
                {
                  titulo: "Roturas Musculares",
                  descripcion: "Roturas fibrilares, desgarros musculares, hematomas intramuscular es"
                },
                {
                  titulo: "Lesiones de Ligamentos",
                  descripcion: "Esguinces, roturas parciales o totales de ligamentos de tobillo, rodilla, etc."
                },
                {
                  titulo: "Bursitis",
                  descripcion: "Inflamación de bursas en hombro, cadera, rodilla o codo"
                },
                {
                  titulo: "Fascitis Plantar",
                  descripcion: "Visualización del grosor de la fascia y presencia de calcificaciones"
                },
                {
                  titulo: "Síndrome del Túnel Carpiano",
                  descripcion: "Compresión del nervio mediano a nivel de la muñeca"
                },
                {
                  titulo: "Rotura del Manguito Rotador",
                  descripcion: "Roturas parciales o completas de los tendones del hombro"
                },
                {
                  titulo: "Quistes y Gangliones",
                  descripcion: "Formaciones quísticas en articulaciones o tendones"
                },
                {
                  titulo: "Calcificaciones Tendinosas",
                  descripcion: "Depósitos de calcio en tendones que causan dolor"
                },
                {
                  titulo: "Hernias y Protrusiones",
                  descripcion: "Hernias abdominales, inguinales o de pared abdominal"
                },
                {
                  titulo: "Sinovitis Articular",
                  descripcion: "Inflamación del tejido sinovial dentro de las articulaciones"
                },
                {
                  titulo: "Neuropatías Compresivas",
                  descripcion: "Atrapamientos nerviosos: ciático, cubital, radial, etc."
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

      {/* Proceso de evaluación */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Proceso de Evaluación Ecográfica
              </h2>
              <p className="text-xl text-gray-600">
                Cómo realizamos el diagnóstico por ecografía en FisioClinic Murcia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Valoración Clínica
                </h3>
                <p className="text-gray-600">
                  Primero realizamos una evaluación física completa para identificar la zona problemática y establecer una hipótesis diagnóstica.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Exploración Ecográfica
                </h3>
                <p className="text-gray-600">
                  Aplicamos gel conductor y exploramos la zona con el ecógrafo, visualizando tendones, músculos, ligamentos y estructuras nerviosas en tiempo real.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Análisis de Imagen
                </h3>
                <p className="text-gray-600">
                  Interpretamos las imágenes ecográficas identificando alteraciones en la ecogenicidad, grosor, vascularización o integridad de los tejidos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-principal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-green-principal mb-4">
                  Plan de Tratamiento
                </h3>
                <p className="text-gray-600">
                  Con el diagnóstico confirmado, diseñamos un tratamiento específico y preciso, pudiendo aplicar técnicas ecoguiadas si es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamientos guiados por ecografía */}
      <section className="py-16 md:py-20 bg-green-secundario/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Tratamientos Guiados por Ecografía
              </h2>
              <p className="text-xl text-gray-600">
                La ecografía no solo diagnostica, también guía tratamientos invasivos con precisión milimétrica
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-claro/20 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-green-principal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-principal">
                      Punción Seca Ecoguiada
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Tratamiento de puntos gatillo miofasciales con visualización directa de la aguja, músculos y nervios para máxima seguridad y efectividad.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Mayor precisión en puntos gatillo profundos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Evitamos estructuras nerviosas y vasculares</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Resultados más rápidos y seguros</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-claro/20 rounded-full flex items-center justify-center mr-4">
                      <Activity className="w-6 h-6 text-green-principal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-principal">
                      Electrolisis Percutánea (EPI)
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Técnica invasiva que aplica corriente galvánica directamente en el tejido dañado para regeneración acelerada de tendones y ligamentos.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Eficaz en tendinitis crónicas resistentes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Visualización directa del tendón afectado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Reduce tiempo de recuperación significativamente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-claro/20 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-green-principal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-principal">
                      Neuromodulación Ecoguiada
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Estimulación de nervios periféricos mediante agujas de acupuntura y corriente eléctrica para tratar dolor neuropático y radiculopatías.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Tratamiento de ciática y dolor irradiado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Localización exacta del nervio afectado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Efectivo en neuralgias y atrapamientos nerviosos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-claro/20 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-green-principal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-principal">
                      Hidrodisección Neural
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Liberación de nervios atrapados mediante infiltración de suero fisiológico guiada por ecografía para separarlos del tejido circundante.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Túnel carpiano, túnel cubital, nervio ciático</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Alternativa conservadora a la cirugía</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Mínimamente invasivo y sin cicatrices</span>
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
                Ecografía Profesional en Murcia Centro
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Máster en Ecografía
                  </h3>
                  <p className="text-gray-600">
                    Formación especializada en ecografía musculoesquelética y fisioterapia invasiva ecoguiada. Años de experiencia interpretando imágenes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Tecnología de Última Generación
                  </h3>
                  <p className="text-gray-600">
                    Ecógrafo de alta resolución con sondas lineales de alta frecuencia para visualización óptima de estructuras musculoesqueléticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Centro en Av. Príncipe de Asturias
                  </h3>
                  <p className="text-gray-600">
                    Ubicados en pleno centro de Murcia, cerca del Zigzag. Diagnóstico inmediato sin listas de espera largas como en hospitales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencia con otras pruebas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Ecografía vs Otras Pruebas de Imagen
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-green-principal text-white">
                  <tr>
                    <th className="p-4 text-left">Característica</th>
                    <th className="p-4 text-center">Ecografía</th>
                    <th className="p-4 text-center">Radiografía</th>
                    <th className="p-4 text-center">Resonancia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-medium">Tiempo de espera</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Inmediato</td>
                    <td className="p-4 text-center">Días</td>
                    <td className="p-4 text-center">Semanas/Meses</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Coste</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Económico</td>
                    <td className="p-4 text-center">Económico</td>
                    <td className="p-4 text-center">Alto</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Visualiza tejidos blandos</td>
                    <td className="p-4 text-center text-green-600 font-semibold">✓ Excelente</td>
                    <td className="p-4 text-center">✗ No</td>
                    <td className="p-4 text-center">✓ Sí</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Evaluación dinámica</td>
                    <td className="p-4 text-center text-green-600 font-semibold">✓ Tiempo real</td>
                    <td className="p-4 text-center">✗ No</td>
                    <td className="p-4 text-center">✗ No</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Radiación</td>
                    <td className="p-4 text-center text-green-600 font-semibold">✓ Sin radiación</td>
                    <td className="p-4 text-center">✗ Rayos X</td>
                    <td className="p-4 text-center">✓ Sin radiación</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Guía tratamientos</td>
                    <td className="p-4 text-center text-green-600 font-semibold">✓ Sí</td>
                    <td className="p-4 text-center">✗ No</td>
                    <td className="p-4 text-center">✗ No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-green-principal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Diagnóstico Preciso para Tratamiento Efectivo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              No sigas con la incertidumbre. Solicita una ecografía musculoesquelética en nuestro centro de Murcia y descubre qué está causando tu dolor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-marron-oscuro hover:bg-marron-claro text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar Ecografía
              </Button>
              <Link to="/#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent w-full"
                >
                  Consultar Caso
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
