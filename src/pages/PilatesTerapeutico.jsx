import React, { useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle, Users, Clock, Award, MapPin, Phone, Calendar, Heart, Dumbbell, Target } from "lucide-react"
import { Link } from 'react-router-dom'

export default function PilatesTerapeutico() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Pilates Terapéutico Reformer en Murcia | FisioClinic Av. Príncipe de Asturias"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pilates terapéutico con máquina Reformer en Murcia centro. Sesiones individuales, en pareja o grupos reducidos (máx. 6) por niveles. Av. Príncipe de Asturias 3, cerca del Zigzag.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-principal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-claro/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Ejercicio Terapéutico Especializado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pilates Terapéutico Reformer en Murcia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Fortalece tu cuerpo, corrige tu postura y previene lesiones con Pilates Reformer supervisado por fisioterapeutas especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-green-principal px-8 py-6 text-lg rounded-full font-bold"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserva tu Clase
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-principal px-8 py-6 text-lg rounded-full bg-transparent"
                onClick={() => window.location.href = '#contacto'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Prueba Gratuita
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
              <Dumbbell className="h-5 w-5" />
              <span className="font-medium">Máquina Reformer Profesional</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-green-principal/30"></div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-medium">Individual, Pareja o Grupos (máx. 6)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es el Pilates Terapéutico */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-6">
                ¿Qué es el Pilates Terapéutico Reformer?
              </h2>
              <div className="w-24 h-1 bg-green-claro mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                El <strong>Pilates Terapéutico con máquina Reformer</strong> es un método de ejercicio controlado que combina fortalecimiento, flexibilidad y control motor, adaptado específicamente a <strong>rehabilitar lesiones y prevenir problemas futuros</strong>.
              </p>
              
              <p className="text-lg leading-relaxed">
                En <strong>FisioClinic Murcia</strong> (Av. Príncipe de Asturias 3, cerca del Zigzag) ofrecemos <strong>tres modalidades</strong>: sesiones <strong>individuales</strong>, en <strong>pareja</strong> o en <strong>grupos reducidos de máximo 6 personas</strong> organizados por niveles. Siempre bajo la supervisión de un fisioterapeuta especializado que adapta cada ejercicio a tu patología, nivel y objetivos específicos.
              </p>

              <Card className="bg-green-secundario/10 border-green-claro/30 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-principal mb-4 flex items-center">
                    <Dumbbell className="mr-3 h-7 w-7 text-green-claro" />
                    ¿Qué es la Máquina Reformer?
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    El <strong>Reformer</strong> es una máquina profesional de Pilates que utiliza un sistema de muelles, poleas y plataforma deslizante para crear resistencia variable. Permite realizar más de 100 ejercicios diferentes adaptados a cualquier nivel y condición física.
                  </p>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Resistencia ajustable:</strong> De muy suave a muy intensa según necesidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Bajo impacto:</strong> Protege articulaciones durante el fortalecimiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Versátil:</strong> Trabajo de todo el cuerpo desde cualquier posición</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                La diferencia clave del <strong>Pilates Terapéutico</strong> es que está dirigido por fisioterapeutas que conocen anatomía, biomecánica y patología. No es solo ejercicio, es <strong>tratamiento activo y preventivo</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios del Pilates Terapéutico */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Beneficios del Pilates Terapéutico Reformer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resultados comprobados en rehabilitación, fortalecimiento y prevención de lesiones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Fortalece la Musculatura Profunda",
                  descripcion: "Activa y fortalece los músculos estabilizadores de columna y pelvis, mejorando el soporte interno del cuerpo"
                },
                {
                  titulo: "Corrige la Postura",
                  descripcion: "Mejora la alineación corporal, reduce cifosis dorsal, corrige hiperlordosis lumbar y equilibra hombros"
                },
                {
                  titulo: "Reduce el Dolor de Espalda",
                  descripcion: "Eficaz en lumbalgia crónica, cervicalgia y dolor dorsal mediante fortalecimiento del core y movilidad vertebral"
                },
                {
                  titulo: "Aumenta la Flexibilidad",
                  descripcion: "Mejora el rango de movimiento articular sin forzar, ideal para personas con rigidez o limitaciones"
                },
                {
                  titulo: "Mejora el Equilibrio",
                  descripcion: "Desarrolla propiocepción y estabilidad, fundamental para prevenir caídas en personas mayores"
                },
                {
                  titulo: "Previene Lesiones",
                  descripcion: "Fortalece zonas débiles, corrige desbalances musculares y prepara el cuerpo para actividades deportivas"
                },
                {
                  titulo: "Rehabilita Lesiones",
                  descripcion: "Recuperación post-operatoria, hernias discales, prótesis de cadera/rodilla, lesiones deportivas"
                },
                {
                  titulo: "Control del Movimiento",
                  descripcion: "Mejora coordinación, calidad de movimiento y conciencia corporal en cada gesto"
                },
                {
                  titulo: "Bajo Impacto Articular",
                  descripcion: "Ideal para artrosis, osteoporosis o personas con limitaciones que no pueden hacer ejercicio intenso"
                },
                {
                  titulo: "Fortalece sin Hipertrofiar",
                  descripcion: "Músculos tonificados y funcionales sin volumen excesivo, aspecto estilizado"
                },
                {
                  titulo: "Mejora la Respiración",
                  descripcion: "Trabajo específico del diafragma y músculos respiratorios, reduce ansiedad y mejora oxigenación"
                },
                {
                  titulo: "Suelo Pélvico",
                  descripcion: "Fortalecimiento del suelo pélvico en embarazo, postparto, incontinencia o prolapsos"
                }
              ].map((beneficio, index) => (
                <Card key={index} className="border-green-claro/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-claro/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-green-principal" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-principal mb-2">
                          {beneficio.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {beneficio.descripcion}
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

      {/* Para quién está indicado */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                ¿Para Quién es el Pilates Terapéutico?
              </h2>
              <p className="text-xl text-gray-600">
                Adaptamos el Pilates Reformer a tu situación específica, seas quien seas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-6 flex items-center">
                    <Users className="mr-3 h-7 w-7 text-green-claro" />
                    Personas con Dolor o Lesión
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Hernias discales lumbares o cervicales</strong> (fortalecimiento sin impacto)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Dolor crónico de espalda</strong> que no mejora con tratamientos pasivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Escoliosis</strong> que necesita fortalecimiento asimétrico compensatorio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Post-cirugía ortopédica</strong> (prótesis, ligamentos, meniscos)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Lesiones deportivas</strong> en fase de rehabilitación activa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Síndrome cruzado</strong> (desequilibrios posturales)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-principal mb-6 flex items-center">
                    <Target className="mr-3 h-7 w-7 text-green-claro" />
                    Personas Sanas (Prevención)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Deportistas</strong> que quieren mejorar rendimiento y prevenir lesiones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Personas sedentarias</strong> con trabajos de oficina y mala postura</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Embarazadas</strong> para preparación al parto y fortalecimiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Postparto</strong> para recuperación abdominal y suelo pélvico</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Personas mayores</strong> para mantenerse activos y prevenir caídas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-secundario mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Cualquiera</strong> que quiera ejercicio seguro, efectivo y supervisado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencias con Pilates Tradicional */}
      <section className="py-16 md:py-20 bg-green-secundario/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Pilates Terapéutico vs Pilates Tradicional
              </h2>
              <p className="text-xl text-gray-600">
                Entender por qué el enfoque terapéutico marca la diferencia
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-green-principal text-white">
                  <tr>
                    <th className="p-4 text-left">Característica</th>
                    <th className="p-4 text-center">Pilates Terapéutico</th>
                    <th className="p-4 text-center">Pilates Tradicional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-medium">Supervisión</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Fisioterapeuta (individual, pareja o grupos máx. 6)</td>
                    <td className="p-4 text-center">Instructor grupos de 10-20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Personalización</td>
                    <td className="p-4 text-center text-green-600 font-semibold">100% adaptado a ti</td>
                    <td className="p-4 text-center">Ejercicios generales para todos</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Enfoque</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Terapéutico/Rehabilitador</td>
                    <td className="p-4 text-center">Fitness/Bienestar</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Evaluación inicial</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Valoración clínica completa</td>
                    <td className="p-4 text-center">Cuestionario básico</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Con patología/dolor</td>
                    <td className="p-4 text-center text-green-600 font-semibold">✓ Indicado y seguro</td>
                    <td className="p-4 text-center">✗ Puede empeorar</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Seguimiento</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Evolución controlada sesión a sesión</td>
                    <td className="p-4 text-center">Sin seguimiento individual</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Conocimiento anatómico</td>
                    <td className="p-4 text-center text-green-600 font-semibold">Fisioterapeuta especializado</td>
                    <td className="p-4 text-center">Instructor certificado Pilates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo es una sesión */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                ¿Cómo es una Sesión de Pilates Reformer?
              </h2>
              <p className="text-xl text-gray-600">
                Qué esperar en tu primera clase en FisioClinic Murcia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Primera Sesión: Evaluación (60 min)
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    En tu primera visita realizamos una <strong>valoración completa</strong>: historial médico, análisis postural, test de movilidad y fuerza. Diseñamos tu programa personalizado.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Conocemos tu caso en profundidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Establecemos objetivos realistas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>Te enseñamos la máquina Reformer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Sesiones Regulares (50-55 min)
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Elige la modalidad que mejor se adapte a ti: <strong>individual</strong>, en <strong>pareja</strong> o en <strong>grupos reducidos (máx. 6 personas)</strong> organizados por niveles. Trabajamos todo el cuerpo con énfasis en tus zonas problemáticas, con progresión gradual y ajustes continuos.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>5 min calentamiento y movilidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>40 min trabajo en Reformer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>5 min estiramientos y vuelta a la calma</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-claro/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-principal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-principal mb-2">
                        Frecuencia Recomendada
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Para obtener <strong>resultados óptimos</strong> recomendamos una frecuencia de 2-3 sesiones por semana, aunque adaptamos a tu disponibilidad.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>1x semana: Mantenimiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>2x semana: Resultados progresivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-secundario mr-2 mt-1 flex-shrink-0" />
                      <span>3x semana: Recuperación intensiva</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-green-secundario/10 border-green-claro/30">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-green-principal mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-principal mb-3">
                  Resultados Visibles en 10-12 Sesiones
                </h3>
                <p className="text-gray-700 text-lg">
                  La mayoría de pacientes notan mejora significativa en postura, dolor y fuerza después de 2-3 meses de práctica regular.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-principal mb-4">
                Pilates Reformer Profesional en Murcia Centro
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Fisioterapeutas Certificados
                  </h3>
                  <p className="text-gray-600">
                    Profesionales con formación específica en Pilates Reformer aplicado a patología. No somos solo instructores, somos terapeutas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-claro/20 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-claro/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Dumbbell className="w-8 h-8 text-green-principal" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-principal mb-4">
                    Equipamiento Profesional
                  </h3>
                  <p className="text-gray-600">
                    Máquina Reformer de alta calidad en perfectas condiciones. Espacio amplio, luminoso y climatizado para tu comodidad.
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
                    Ubicación céntrica en Murcia, cerca del Zigzag. Fácil acceso y horarios flexibles para adaptarnos a tu rutina.
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
              Fortalece tu Cuerpo, Previene Lesiones
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Reserva tu sesión de Pilates Terapéutico Reformer. Primera clase valorativa gratuita para conocer el método.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-green-principal px-8 py-6 text-lg rounded-full font-bold"
                onClick={() => window.open('https://go.fisiotrack.com', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Primera Clase
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
              📍 Av. Príncipe de Asturias 3 - Murcia Centro (cerca del Zigzag) | 💪 Máquina Reformer Profesional
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
