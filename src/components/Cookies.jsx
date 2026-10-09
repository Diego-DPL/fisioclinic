import React, { useState, useEffect } from 'react'

function loadAnalytics() {
  const s1 = document.createElement('script')
  s1.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K78ZVGM9');`
  document.head.appendChild(s1)

  const s2 = document.createElement('script')
  s2.async = true
  s2.src = 'https://www.googletagmanager.com/gtag/js?id=G-C40KBYQCNN'
  document.head.appendChild(s2)

  const s3 = document.createElement('script')
  s3.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-C40KBYQCNN');`
  document.head.appendChild(s3)

  const ns = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-K78ZVGM9'
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  ns.appendChild(iframe)
  document.body.prepend(ns)
}

const STORAGE_KEY = 'cookie_consent'

export default function CookieNotice() {
  const [visible, setVisible] = useState(false)
  const [configuring, setConfiguring] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'accepted') {
      loadAnalytics()
      setAnalytics(true)
    } else if (!saved) {
      setVisible(true)
    }

    // Permite reabrir el panel desde "Configurar cookies" (footer y política de cookies)
    const reopen = (e) => {
      if (e.target.closest('[data-cookie-settings]')) {
        e.preventDefault()
        setConfiguring(true)
        setVisible(true)
      }
    }
    document.addEventListener('click', reopen)
    return () => document.removeEventListener('click', reopen)
  }, [])

  const save = (value) => {
    const wasAccepted = localStorage.getItem(STORAGE_KEY) === 'accepted'
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
    setConfiguring(false)
    if (value === 'accepted') {
      if (!wasAccepted) loadAnalytics()
    } else if (wasAccepted) {
      // Los scripts de Google ya cargados solo se detienen recargando la página
      window.location.reload()
    }
  }

  if (!visible) return null

  const btnPrimary = 'bg-green-principal text-white px-4 py-2 rounded-full text-sm hover:bg-green-secundario whitespace-nowrap'
  const btnSecondary = 'border border-green-principal text-green-principal px-4 py-2 rounded-full text-sm hover:bg-green-principal/10 whitespace-nowrap bg-transparent cursor-pointer'

  return (
    <div role="dialog" aria-live="polite" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-800">
          {configuring ? (
            <div className="space-y-3">
              <p className="font-medium text-gray-900">Configurar cookies</p>
              <label className="flex items-start gap-2">
                <input type="checkbox" checked disabled className="mt-1" />
                <span><strong>Técnicas (necesarias):</strong> recuerdan tu elección y permiten el funcionamiento de la web. Siempre activas.</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1" />
                <span><strong>Análisis (Google Analytics y Google Tag Manager):</strong> nos ayudan a medir el uso de la web para mejorarla.</span>
              </label>
            </div>
          ) : (
            <p>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y para ofrecerte una mejor experiencia mediante el análisis de tus hábitos de navegación (por ejemplo, páginas visitadas). Puedes aceptar todas las cookies pulsando el botón “Aceptar”, rechazar las cookies opcionales pulsando el botón “Rechazar cookies opcionales” o configurarlas pulsando el botón “Configurar cookies”. Para obtener más información, haz clic{' '}
              <a href="/politica-de-cookies" className="underline text-green-principal hover:text-green-secundario">
                AQUÍ
              </a>{' '}
              (Política de cookies).
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 flex-shrink-0">
          {configuring ? (
            <button onClick={() => save(analytics ? 'accepted' : 'rejected')} className={btnPrimary}>
              Guardar configuración
            </button>
          ) : (
            <>
              <button onClick={() => setConfiguring(true)} className={btnSecondary}>
                Configurar cookies
              </button>
              <button onClick={() => save('rejected')} className={btnSecondary}>
                Rechazar cookies opcionales
              </button>
              <button onClick={() => save('accepted')} className={btnPrimary}>
                Aceptar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
