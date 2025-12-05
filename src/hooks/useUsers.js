// src/hooks/useUsers.js
import { useState, useEffect, useCallback } from 'react'
import api from '../services/api'

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.getUsers()
      setUsers(data || [])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const create = async (user) => {
    setLoading(true)
    try {
      const newUser = await api.createUser(user)
      // Si la API devuelve el creado:
      setUsers(prev => [...prev, newUser])
      return newUser
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const update = async (id, user) => {
    setLoading(true)
    try {
      const updated = await api.updateUser(id, user)
      setUsers(prev => prev.map(u => (String(u.id) === String(id) ? updated : u)))
      return updated
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const remove = async (id) => {
    setLoading(true)
    try {
      await api.deleteUser(id)
      setUsers(prev => prev.filter(u => String(u.id) !== String(id)))
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { users, loading, error, load, create, update, remove }
}
