import { useState } from 'react'
import { useReportByType } from './hooks/reportsHooks'
import { ReportsTable } from './ReportsTable'
import { Message } from '../../components/Message'
import './ReportsPage.css'

export default function ReportsPage() {
  const [activeReport, setActiveReport] = useState('')
  const raw = localStorage.getItem('syx_user')
  let parsed = null
  try {
    parsed = raw ? JSON.parse(raw) : null
  } catch {
    parsed = raw
  }
  const userName = parsed?.userName ?? parsed?.username ?? parsed?.name ?? parsed ?? ''

  const { data, loading, error } = useReportByType(activeReport, userName)

  if (loading) return <Message type="loading">Cargando reportes...</Message>
  if (error) return <Message type="error">⚠️ {error}</Message>

  return (
    <div className="reports-page">
      <header>
        <h1>REPORTES SYX Complaints</h1>
        <div className="report-toggle">
          <button
            type="button"
            className={activeReport === 'complaints-by-entity' ? 'active' : ''}
            onClick={() => setActiveReport('complaints-by-entity')}
          >
            Conteo de quejas por entidad
          </button>
          <button
            type="button"
            className={activeReport === 'completed-complaints' ? 'active' : ''}
            onClick={() => setActiveReport('completed-complaints')}
          >
            Tiempo de quejas completadas
          </button>
        </div>
      </header>

      {!activeReport && <Message type="info">Seleccione un reporte para mostrar la tabla</Message>}
      {loading && <Message type="loading">Cargando reportes...</Message>}
      {error && <Message type="error">⚠️ {error}</Message>}

      {activeReport && !loading && !error && <ReportsTable data={data} reportType={activeReport} />}
    </div>
  )
}
