import React from 'react'
import { lots } from '../data/samples'

export default function Inventario() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>
      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Lote</th>
            <th className="p-2 text-left">Producto</th>
            <th className="p-2 text-left">Finca</th>
            <th className="p-2 text-left">Cant.</th>
            <th className="p-2 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((l) => (
            <tr key={l.id} className="border-t">
              <td className="p-2">{l.id}</td>
              <td className="p-2">{l.productId}</td>
              <td className="p-2">{l.farm}</td>
              <td className="p-2">{l.qty}</td>
              <td className="p-2">{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
