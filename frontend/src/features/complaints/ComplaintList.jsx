import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { getComplaints } from '../../services/api'
import Complaint from './Complaint'
import './ComplaintList.css'

const ComplaintList = ({ entityId }) => {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    getComplaints(entityId, controller.signal)
      .then((data) => setComplaints(data))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setComplaints([])
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [entityId])

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
    </div>
  )
}

ComplaintList.propTypes = {
  entityId: PropTypes.number.isRequired,
}

export default ComplaintList
