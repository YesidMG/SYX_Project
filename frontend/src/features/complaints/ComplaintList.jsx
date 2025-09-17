import { useState, useEffect } from 'react'
import { getComplaints } from '../../services/api'
import Complaint from './Complaint'
import './ComplaintList.css'

const PAGE_SIZE = 10

const ComplaintList = ({ entityId }) => {
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

    getComplaints(entityId, page, PAGE_SIZE, controller.signal)
      .then((data) => {
        setComplaints(data.complaints)
        setTotal(data.total)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setComplaints([])
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [entityId, page])

  const totalPages = Math.ceil(total / PAGE_SIZE)

  if (loading) {
    return (
      <div className="message loading">
        <h3>Cargando quejas...</h3>
      </div>
    )
  }

  if (error) {
    return (
      <div className="message error">
        <h3>⚠️ {error}</h3>
      </div>
    )
  }

  return (
    <div className="list-container">
      {complaints.length === 0 && <p>No hay quejas registradas.</p>}
      {complaints.map((complaint) => (
        <Complaint key={complaint.id} complaint={complaint} />
      ))}
      {/* Paginador tipo Google */}
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={page === i + 1 ? 'active' : ''}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export default ComplaintList
