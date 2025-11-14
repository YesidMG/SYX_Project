import { useEffect, useState } from 'react'
import { getStateHistory } from '../../services/api'
import './StateHistoryPage.css'

export default function StateHistoryPage() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getStateHistory()
      .then(data => setHistory(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="main-content">
      <div className="page-container">
        <h2 className="page-title">Historial de cambios de estado</h2>
        {loading && <div className="loading">Cargando...</div>}
        {error && <div className="error">{error}</div>}
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID Queja</th>
              <th>Estado anterior</th>
              <th>Estado nuevo</th>
              <th>Fecha y hora</th>
            </tr>
          </thead>
          <tbody>
            {history.map(ev => (
              <tr key={ev.id}>
                <td>{ev.complaint_id}</td>
                <td>{ev.prev_state}</td>
                <td>{ev.new_state}</td>
                <td>{new Date(ev.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}