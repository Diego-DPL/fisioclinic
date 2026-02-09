import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FisioterapiaPersonalizada from './pages/FisioterapiaPersonalizada'
import Osteopatia from './pages/Osteopatia'
import EcografiaMusculoesqueletica from './pages/EcografiaMusculoesqueletica'
import PilatesTerapeutico from './pages/PilatesTerapeutico'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fisioterapia-personalizada" element={<FisioterapiaPersonalizada />} />
          <Route path="/osteopatia" element={<Osteopatia />} />
          <Route path="/ecografia-musculoesqueletica" element={<EcografiaMusculoesqueletica />} />
          <Route path="/pilates-terapeutico" element={<PilatesTerapeutico />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
