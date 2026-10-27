import React from 'react'
import { products } from '../data/samples'

export default function Productos() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="p-4 bg-white rounded shadow">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">{p.presentation} — Q{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
