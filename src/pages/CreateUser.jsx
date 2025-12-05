// src/pages/CreateUser.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUsers from '../hooks/useUsers'
import UserForm from '../components/UserForm'

export default function CreateUser() {
  const { create } = useUsers()
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    try {
      await create(data)
      alert('Usuario creado')
      navigate('/users')
    } catch (err) {
      alert('Error: ' + (err?.data?.message || err.message))
    }
  }
  return (
    <div className="max-w-xl">
      <h2 className="text-lg font-semibold mb-4">Crear usuario</h2>
      <UserForm initial={{ name: '', email: '', password: '' }} onSubmit={handleSubmit} submitLabel="Crear" />
    </div>
  )
}
