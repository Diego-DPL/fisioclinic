import React, { useState } from 'react'

export default function CookieNotice({ cookiesUrl = 'src/assets/politica-de-cookies.html' }) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-800">
          <p className="font-medium text-gray-900">Este sitio solo utiliza cookies técnicas necesarias para su funcionamiento.</p>
          <p className="mt-1">
            No se recaban datos personales ni se utilizan cookies de terceros.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={cookiesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline text-green-principal hover:text-green-secundario"
          >
            Leer política
          </a>
          <button
            onClick={() => setVisible(false)}
            className="bg-green-principal text-white px-4 py-2 rounded-full text-sm hover:bg-green-secundario"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
