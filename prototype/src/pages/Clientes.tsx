import React, { useState, useEffect } from 'react'
import { storage } from '../lib/storage'
import { clients as sampleClients } from '../data/samples'

export default function Clientes() {
  const [clients, setClients] = useState<any[]>([])
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  useEffect(() => {
    const stored = storage.get('fruterra_clients', null)
    if (stored) setClients(stored)
    else {
      storage.set('fruterra_clients', sampleClients)
      setClients(sampleClients)
    }
  }, [])

  function addClient() {
    const id = 'C' + String(Math.floor(Math.random() * 900 + 100))
    const newClient = { id, name, contact, creditLimit: 10000 }
    const next = [newClient, ...clients]
    setClients(next)
    storage.set('fruterra_clients', next)
    setName('')
    setContact('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>
      <div className="p-4 bg-white rounded shadow mb-4">
        <h2 className="font-semibold mb-2">Agregar cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input className="border p-2" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="border p-2" placeholder="Contacto" value={contact} onChange={(e) => setContact(e.target.value)} />
          <button className="bg-green-600 text-white p-2 rounded" onClick={addClient}>Agregar</button>
        </div>
      </div>
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
