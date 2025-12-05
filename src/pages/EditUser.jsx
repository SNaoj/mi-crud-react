// src/pages/EditUser.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import useUsers from '../hooks/useUsers'
import UserForm from '../components/UserForm'

export default function EditUser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { update, loading } = useUsers()

  const [initial, setInitial] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    async function loadUser() {
      try {
        setLoadingUser(true)
        const data = await api.getUser(id)
        setInitial({
          name: data.name || '',
          email: data.email || '',
          password: ''
        })
      } catch (err) {
        setApiError(err?.data?.message || err.message)
      } finally {
        setLoadingUser(false)
      }
    }

    loadUser()
  }, [id])

  const handleSubmit = async (data) => {
    try {
      setApiError(null)
      await update(id, data)
      alert('Usuario actualizado')
      navigate('/users')
    } catch (err) {
      setApiError(err?.data?.message || err.message)
    }
  }

  if (loadingUser) return <div>Cargando usuario...</div>
  if (apiError && !initial) return <div className="text-red-500">{apiError}</div>

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Editar Usuario</h2>

      <UserForm
        initial={initial}
        onSubmit={handleSubmit}
        submitLabel="Actualizar"
        loading={loading}
        apiError={apiError}   // <-- mostrar error API
      />
    </div>
  )
}

