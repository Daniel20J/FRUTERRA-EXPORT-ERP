import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../lib/auth'

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return children
}
