import React from 'react'
import { suppliers } from '../data/samples'

export default function Proveedores() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Proveedores</h1>
      <div className="space-y-2">
        {suppliers.map((s) => (
          <div key={s.id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600">Contacto: {s.contact}</div>
            </div>
            <div className="text-sm text-gray-700">Productos: {s.categories.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
