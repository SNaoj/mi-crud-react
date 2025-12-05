import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import EditUser from './pages/EditUser'

function App() {
  return (
    
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a0033] to-[#000814] text-gray-200">
    <header className="relative z-50 bg-[#0d0d1f]/80 backdrop-blur-lg shadow-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
       <h1 className="text-2xl font-bold tracking-wider 
      bg-gradient-to-r from-purple-500 to-cyan-400 
      bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
      CRUD de Usuarios
        </h1>

    <nav className="flex gap-6">
      <Link 
        to="/" 
        className="relative z-50 text-sm text-gray-300 hover:text-purple-400 transition"
      >
        Home
      </Link>

      <Link 
        to="/users" 
        className="relative z-50 text-sm text-gray-300 hover:text-purple-400 transition"
      >
        Usuarios
      </Link>

      <Link 
        to="/users/create" 
        className="relative z-50 text-sm text-gray-300 hover:text-purple-400 transition"
      >
        Crear Usuario
      </Link>
    </nav>
      </div>
    </header>
      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App




