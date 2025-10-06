import { useState, useCallback } from 'react'
import { getEntityReport } from '../../../services/api'

export function useEntityReport() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchReport = useCallback(async (captcha, signal) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getEntityReport(captcha, signal)
      setData(result)
    } catch (error) {
      if (error.name != 'AbortError') {
        setError(error.message)
        setData([])
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchReport }
}
