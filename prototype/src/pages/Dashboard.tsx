import React from 'react'
import { lots, products, clients } from '../data/samples'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Clientes: <strong>{clients.length}</strong></div>
        <div className="p-4 bg-white rounded shadow">Productos: <strong>{products.length}</strong></div>
        <div className="p-4 bg-white rounded shadow">Lotes: <strong>{lots.length}</strong></div>
      </div>
    </div>
  )
}
