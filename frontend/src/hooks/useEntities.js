import { useEffect, useState } from 'react'
import { getEntities } from '../services/api'

export function useEntities() {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchEntities = async signal => {
    setLoading(true)
    setError(null)
    try {
      const result = await getEntities(signal)
      setEntities(result)
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message)
        setEntities([])
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchEntities(controller.signal)
    return () => controller.abort()
  }, [])

  return { entities, loading, error }
}
