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

export default function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('cookie_consent')
    if (saved === 'accepted') {
      loadAnalytics()
    } else if (!saved) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    loadAnalytics()
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-live="polite" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-800">
          <p className="font-medium text-gray-900">Este sitio utiliza cookies propias y de terceros (Google Analytics, Google Tag Manager).</p>
          <p className="mt-1">
            Las cookies analíticas nos ayudan a mejorar el sitio. Puedes aceptarlas o usar solo las técnicas necesarias.{' '}
            <a
              href="/politica-de-cookies.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-principal hover:text-green-secundario"
            >
              Leer política
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="text-sm text-gray-600 underline hover:text-gray-900 bg-transparent border-none cursor-pointer"
          >
            Solo necesarias
          </button>
          <button
            onClick={accept}
            className="bg-green-principal text-white px-4 py-2 rounded-full text-sm hover:bg-green-secundario whitespace-nowrap"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  )
}
