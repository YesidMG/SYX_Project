import PropTypes from 'prop-types'
import { formatDate } from '../../utils/formatDate'

ReportsTable.propTypes = {
  data: PropTypes.array.isRequired,
  reportType: PropTypes.string,
}

export function ReportsTable({ data, reportType = 'complaints-by-entity' }) {
  if (!data || data.length === 0) {
    return <div className="table-empty">No hay datos para mostrar</div>
  }

  if (reportType === 'complaints-by-entity') {
    return (
      <div className="table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de la Entidad</th>
              <th>Número de Quejas</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.complaints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (reportType === 'completed-complaints') {
    return (
      <div className="table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha de creación</th>
              <th>Fecha en que se completó</th>
              <th>Diferencia de tiempo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.complaint_id}>
                <td>{row.complaint_id}</td>
                <td>{formatDate(row.creation_date)}</td>
                <td>{formatDate(row.completion_date)}</td>
                <td>{row.time_to_complete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Fallback genérico: construir columnas a partir de las keys del primer row
  const keys = Object.keys(data[0])
  return (
    <div className="table-container">
      <table className="reports-table">
        <thead>
          <tr>
            {keys.map(k => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {keys.map(k => (
                <td key={k}>{String(row[k] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
