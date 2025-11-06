import { useEntityReport } from './hooks/useEntityReport'
import { ReportsTable } from './ReportsTable'
import { Message } from '../../components/Message'
import './ReportsPage.css'

export default function ReportsPage() {
  const { data, loading, error } = useEntityReport()

  if (loading) return <Message type="loading">Cargando reportes...</Message>
  if (error) return <Message type="error">⚠️ {error}</Message>

  return (
    <div className="reports-page">
      <header>
        <h1>TABLA DE REPORTES</h1>
      </header>
      <ReportsTable data={data} />
    </div>
  )
}
