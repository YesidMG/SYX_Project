import PropTypes from 'prop-types'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

ComplaintHeader.propTypes = {
  entity_name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  optionsMenu: PropTypes.node,
}

export function ComplaintHeader({ entity_name, logo, creation_date, state, optionsMenu }) {
  return (
    <div className="header">
      <div className="title">
        <figure className="entity-icon">
          <img
            src={`/entity_logos/${logo}`}
            alt={`Logo de ${entity_name}`}
            width="40"
            height="40"
          />
        </figure>
        <strong>{entity_name}</strong>
        <span className="entity-date">{formatDate(creation_date)}</span>
      </div>
      <div className="header-right">
        <div className="status">
          <span className={`status-dot ${state.toLowerCase()}`}></span>
          <span className="status-label">{state}</span>
        </div>
        {optionsMenu}
      </div>
    </div>
  )
}
