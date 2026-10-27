import React from 'react'
import { clients } from '../data/samples'

export default function Clientes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>
      <div className="space-y-2">
        {clients.map((c) => (
          <div key={c.id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm text-gray-600">Contacto: {c.contact}</div>
            </div>
            <div className="text-sm text-gray-700">Límite: Q{c.creditLimit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
