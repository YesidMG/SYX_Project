import { useEffect, useState } from 'react'
import { getEntities } from '../../../services/api'

export function useEntities() {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    getEntities(controller.signal)
      .then(setEntities)
      .catch(() => setEntities([]))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  return { entities, loading }
}
