import { useEffect, useState } from 'react'
import { getEntities } from '../services/api'

export function useEntities() {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    getEntities(controller.signal)
      .then(setEntities)
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setEntities([])
        }
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  return { entities, loading, error }
}
