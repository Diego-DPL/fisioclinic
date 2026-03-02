import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'

// Code splitting: lazy load secondary pages to reduce initial bundle size
const FisioterapiaPersonalizada = lazy(() => import('./pages/FisioterapiaPersonalizada'))
const Osteopatia = lazy(() => import('./pages/Osteopatia'))
const EcografiaMusculoesqueletica = lazy(() => import('./pages/EcografiaMusculoesqueletica'))
const PilatesTerapeutico = lazy(() => import('./pages/PilatesTerapeutico'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-principal"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fisioterapia-personalizada" element={<FisioterapiaPersonalizada />} />
            <Route path="/osteopatia" element={<Osteopatia />} />
            <Route path="/ecografia-musculoesqueletica" element={<EcografiaMusculoesqueletica />} />
            <Route path="/pilates-terapeutico" element={<PilatesTerapeutico />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
