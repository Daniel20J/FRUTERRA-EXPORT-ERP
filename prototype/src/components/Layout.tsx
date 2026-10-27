import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-root">
      <aside className="app-sidebar">
        <div className="brand">FRUTERRA</div>
        <nav className="menu">
          <Link to="/">Dashboard</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/proveedores">Proveedores</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/inventario">Inventario</Link>
          <Link to="/pedidos">Pedidos</Link>
          <Link to="/compras">Compras</Link>
          <Link to="/exportaciones">Exportaciones</Link>
          <Link to="/reclamos">Reclamos</Link>
          <Link to="/trazabilidad">Trazabilidad</Link>
          <Link to="/reportes">Reportes</Link>
          <Link to="/perfil">Perfil</Link>
        </nav>
      </aside>
      <div className="app-content">{children}</div>
    </div>
  )
}
