import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Phone, CheckCircle, Star, Activity, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import heroTerapia from '../assets/hero-terapia-manual.webp'
import heroPilatesGrupo from '../assets/hero-pilates-grupo.webp'
import heroElectro from '../assets/hero-electroterapia.webp'
import heroSala from '../assets/hero-sala-pilates.webp'

const SLIDE_MS = 6000

const slides = [
  {
    img: heroTerapia,
    alt: 'Fisioterapeuta de FisioClinic tratando a un paciente en Murcia',
    eyebrow: 'Fisioterapia · Osteopatía · Murcia',
    title: (
      <>
        Tu centro de <span className="text-green-claro">fisioterapia</span> y{' '}
        <span className="text-green-claro">osteopatía</span> en Murcia
      </>
    ),
    subtitle:
      'Tratamientos basados en evidencia y atención 100 % personalizada para recuperar tu movilidad y eliminar el dolor.',
  },
  {
    img: heroPilatesGrupo,
    alt: 'Clase de pilates terapéutico con máquina Reformer en FisioClinic Murcia',
    eyebrow: 'Pilates Reformer',
    title: (
      <>
        Pilates <span className="text-green-claro">terapéutico</span> con máquina Reformer
      </>
    ),
    subtitle:
      'Grupos reducidos por niveles, guiados por fisioterapeutas, para fortalecer tu cuerpo y prevenir lesiones.',
  },
  {
    img: heroElectro,
    alt: 'Tratamiento de electroterapia y neuromodulación en FisioClinic Murcia',
    eyebrow: 'Tecnología avanzada',
    title: (
      <>
        Fisioterapia invasiva guiada por <span className="text-green-claro">ecografía</span>
      </>
    ),
    subtitle:
      'EPI, punción seca y neuromodulación para tratar la causa real de tu lesión con la máxima precisión.',
  },
  {
    img: heroSala,
    alt: 'Sala de pilates Reformer e instalaciones de FisioClinic en Murcia',
    eyebrow: 'Nuestras instalaciones',
    title: (
      <>
        Un espacio diseñado para tu <span className="text-green-claro">bienestar</span>
      </>
    ),
    subtitle:
      'Instalaciones modernas en Av. Príncipe de Asturias, equipadas con la última tecnología en fisioterapia.',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  }, [])

  const go = useCallback((dir) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((i) => setCurrent(i), [])

  // Autoplay (se detiene si el usuario interactúa o prefiere movimiento reducido)
  useEffect(() => {
    if (paused || reducedMotion.current) return
    const id = setTimeout(() => go(1), SLIDE_MS)
    return () => clearTimeout(id)
  }, [current, paused, go])

  const slide = slides[current]

  return (
    <section
      id="inicio"
      aria-label="Presentación de FisioClinic Murcia"
      aria-roledescription="carrusel"
      className="relative overflow-hidden bg-green-principal min-h-[88vh] flex items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Capas de imagen (todas en el DOM, crossfade por opacidad) */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide absolute inset-0 ${i === current ? 'hero-slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <img
              src={s.img}
              alt={i === 0 ? s.alt : ''}
              aria-hidden={i !== 0}
              className="hero-slide__img w-full h-full object-cover object-center"
              fetchPriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding={i === 0 ? 'sync' : 'async'}
              width={1200}
              height={1600}
            />
          </div>
        ))}
      </div>

      {/* Velos para legibilidad y coherencia con la marca */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-principal/95 via-green-principal/70 to-green-principal/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-principal/90 via-transparent to-green-principal/40" />
      {/* Patrón de puntos (motivo recurrente del diseño) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(64,250,217,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-28">
        <div className="max-w-2xl text-center lg:text-left">
          {/* SOLO esto cambia por slide → se anima en cada transición.
              La key fuerza el remontaje únicamente de la etiqueta/título/subtítulo. */}
          <div
            key={current}
            className="hero-text-anim min-h-[260px] sm:min-h-[300px] lg:min-h-[360px]"
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <span className="font-display text-base text-green-claro tabular-nums">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-white/30 text-sm">/</span>
              <span className="font-display text-base text-white/45 tabular-nums">
                {String(slides.length).padStart(2, '0')}
              </span>
              <span className="h-px w-10 bg-white/30 mx-1" aria-hidden="true" />
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                {slide.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] md:text-5xl lg:text-[3.6rem] font-medium text-white leading-[1.08]">
              {slide.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {slide.subtitle}
            </p>
          </div>

          {/* Esto NO cambia entre slides → se renderiza una vez y no se refresca */}
          <div className="mt-4 space-y-7">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://go.fisiotrack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-green-principal font-bold text-lg shadow-lg hover:bg-green-claro hover:scale-[1.03] transition-all duration-300"
              >
                Reserva tu cita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-4 h-4 text-green-claro flex-shrink-0" />
                <span className="text-sm">Fisioterapeutas colegiados</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                <span className="text-sm">Más de 300 pacientes</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Activity className="w-4 h-4 text-green-claro flex-shrink-0" />
                <span className="text-sm">Tecnología avanzada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles: flechas */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/25 text-white backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Siguiente"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/25 text-white backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Controles: indicadores con barra de progreso */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}: ${s.eyebrow}`}
            aria-current={i === current}
            className="group relative h-1.5 rounded-full overflow-hidden bg-white/30 transition-all duration-500"
            style={{ width: i === current ? '3rem' : '1.25rem' }}
          >
            {i === current && !paused && !reducedMotion.current && (
              <span
                className="hero-progress-fill absolute inset-0 bg-green-claro"
                style={{ animationDuration: `${SLIDE_MS}ms` }}
              />
            )}
            {i === current && (paused || reducedMotion.current) && (
              <span className="absolute inset-0 bg-green-claro" />
            )}
          </button>
        ))}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-20 hidden sm:flex flex-col items-center gap-1 text-white/60">
        <span className="text-[11px] uppercase tracking-widest">Descubre</span>
        <ChevronRight className="scroll-cue w-4 h-4 rotate-90" />
      </div>
    </section>
  )
}
