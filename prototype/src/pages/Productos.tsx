import React, { useState, useEffect } from 'react'
import { storage } from '../lib/storage'
import { products as sampleProducts } from '../data/samples'

export default function Productos() {
  const [products, setProducts] = useState<any[]>([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState<number | ''>('')

  useEffect(() => {
    const stored = storage.get('fruterra_products', null)
    if (stored) setProducts(stored)
    else {
      storage.set('fruterra_products', sampleProducts)
      setProducts(sampleProducts)
    }
  }, [])

  function addProduct() {
    const id = 'P' + String(Math.floor(Math.random() * 900 + 100))
    const newP = { id, name, presentation: 'Caja', category: 'Fruta', price: Number(price) }
    const next = [newP, ...products]
    setProducts(next)
    storage.set('fruterra_products', next)
    setName('')
    setPrice('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <div className="p-4 bg-white rounded shadow mb-4">
        <h2 className="font-semibold mb-2">Agregar producto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input className="border p-2" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="border p-2" placeholder="Precio" value={price as any} onChange={(e) => setPrice(e.target.value)} />
          <button className="bg-green-600 text-white p-2 rounded" onClick={addProduct}>Agregar</button>
        </div>
      </div>
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
