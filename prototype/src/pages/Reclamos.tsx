import React from 'react'
import { claims } from '../data/samples'

export default function Reclamos() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reclamos y Devoluciones</h1>
      <div className="space-y-2">
        {claims.map((r) => (
          <div key={r.id} className="p-3 bg-white rounded shadow">
            <div className="font-semibold">{r.id} — {r.client}</div>
            <div className="text-sm text-gray-600">Pedido: {r.orderId} — Fecha: {r.date}</div>
            <div className="mt-2">Estado: {r.status} — Motivo: {r.reason}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
