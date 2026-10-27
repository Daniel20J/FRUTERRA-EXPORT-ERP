import React from 'react'
import { purchases } from '../data/samples'

export default function Compras() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Compras</h1>
      <div className="space-y-2">
        {purchases.map((p) => (
          <div key={p.id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-semibold">Orden {p.id}</div>
              <div className="text-sm text-gray-600">Proveedor: {p.supplierId} — Fecha: {p.date}</div>
            </div>
            <div className="text-sm text-gray-700">Estado: {p.state}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
