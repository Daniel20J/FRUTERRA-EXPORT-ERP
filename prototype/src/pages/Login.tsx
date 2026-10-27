import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../lib/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = auth.login(username, password)
    if (user) {
      navigate('/')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión — FRUTERRA</h2>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm">Usuario</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
