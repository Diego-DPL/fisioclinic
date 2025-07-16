import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FisioClinicLanding from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FisioClinicLanding />
      <Footer />
    </div>
  )
}

export default App
