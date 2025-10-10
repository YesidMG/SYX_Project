import { useState, useEffect } from 'react'
import { getComplaints } from '../../../services/api'

export function useComplaints(entityId, pageSize = 10) {
  const [complaints, setComplaints] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setPage(1)
  }, [entityId])

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    getComplaints(entityId, page, pageSize, controller.signal)
      .then(data => {
        setComplaints(data.complaints)
        setTotal(data.total)
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setComplaints([])
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [entityId, page, pageSize])

  const refresh = async () => {
    setLoading(true)
    try {
      const data = await getComplaints(entityId, page, pageSize)
      setComplaints(data.complaints)
      setTotal(data.total)
    } catch (error) {
      setError(error.message)
      setComplaints([])
    } finally {
      setLoading(false)
    }
  }

  return {
    complaints,
    page,
    setPage,
    loading,
    error,
    totalPages: Math.ceil(total / pageSize),
    refresh,
  }
}
