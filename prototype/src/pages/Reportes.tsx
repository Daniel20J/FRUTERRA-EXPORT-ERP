import React from 'react'

export default function Reportes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reportes e Indicadores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Ventas por periodo (gráfico)</div>
        <div className="p-4 bg-white rounded shadow">Inventario disponible (tabla)</div>
        <div className="p-4 bg-white rounded shadow">Productos próximos a vencer</div>
        <div className="p-4 bg-white rounded shadow">Exportaciones por país</div>
      </div>
    </div>
  )
}
