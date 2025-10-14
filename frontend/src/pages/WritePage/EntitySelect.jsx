import PropTypes from 'prop-types'

EntitySelect.propTypes = {
  entities: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export function EntitySelect({ entities, value, onChange, loading }) {
  return (
    <div className="entity-form">
      <label>Entidad</label>
      {loading ? (
        <span>Cargando entidades...</span>
      ) : (
        <select value={value} onChange={onChange} required>
          <option value="">Seleccione una entidad</option>
          {entities.map(ent => (
            <option key={ent.id} value={ent.id}>
              {ent.name}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
