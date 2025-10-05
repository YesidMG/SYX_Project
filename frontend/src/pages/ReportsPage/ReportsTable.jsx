import PropTypes from 'prop-types'

ReportsTable.propTypes = {
  data: PropTypes.object.isRequired,
}

export function ReportsTable({ data }) {
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
