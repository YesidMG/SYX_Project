import { useState, useEffect } from 'react'

export function useReport(fetcher, deps = [], enabled = true) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchReport = async signal => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher(signal)
      setData(result)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message ?? String(err))
        setData([])
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!enabled) return
    const controller = new AbortController()
    fetchReport(controller.signal)
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled])

  return { data, loading, error }
}
