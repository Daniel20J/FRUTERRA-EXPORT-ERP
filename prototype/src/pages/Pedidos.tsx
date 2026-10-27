import React from 'react'
import { orders } from '../data/samples'

export default function Pedidos() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registro de Pedidos</h1>
      <div className="space-y-2">
        {orders.map((o) => (
          <div key={o.id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-semibold">Pedido {o.id}</div>
              <div className="text-sm text-gray-600">Cliente: {o.clientId} — Fecha: {o.date}</div>
            </div>
            <div className="text-sm text-gray-700">Estado: {o.state}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
