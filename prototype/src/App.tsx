import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Productos from './pages/Productos'
import Proveedores from './pages/Proveedores'
import Inventario from './pages/Inventario'
import Pedidos from './pages/Pedidos'
import Compras from './pages/Compras'
import Exportaciones from './pages/Exportaciones'
import Reclamos from './pages/Reclamos'
import Trazabilidad from './pages/Trazabilidad'
import Reportes from './pages/Reportes'
import Perfil from './pages/Perfil'
import Layout from './components/Layout'
import './styles.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/exportaciones" element={<Exportaciones />} />
          <Route path="/reclamos" element={<Reclamos />} />
          <Route path="/trazabilidad" element={<Trazabilidad />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </div>
  )
}
