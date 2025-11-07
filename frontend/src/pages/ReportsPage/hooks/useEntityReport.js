import { useState, useEffect } from 'react'
import { getEntityReport } from '../../../services/api'

export function useEntityReport() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchReport = async signal => {
    setLoading(true)
    setError(null)
    try {
      const result = await getEntityReport(signal)
      setData(result)
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message)
        setData([])
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchReport(controller.signal)
    return () => controller.abort()
  }, [])

  return { data, loading, error }
}
