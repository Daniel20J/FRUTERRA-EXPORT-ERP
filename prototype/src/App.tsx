import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import './styles.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <nav className="container mx-auto flex gap-4">
          <Link to="/" className="font-semibold">Dashboard</Link>
          <Link to="/clientes" className="font-semibold">Clientes</Link>
          <Link to="/productos" className="font-semibold">Productos</Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </main>
    </div>
  )
}
