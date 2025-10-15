import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEntities } from '../../hooks/useEntities'
import { Message } from '../../components/Message'
import './EntityFilter.css'

const DEFAULT_OPTION = { id: '', name: 'Todas' }

const EntityFilter = ({ onChange }) => {
  const { entities, loading, error } = useEntities()
  const options = [DEFAULT_OPTION, ...entities]
  const [selected, setSelected] = useState(DEFAULT_OPTION.id)

  const handleChange = e => {
    const value = e.target.value
    setSelected(value)
    if (onChange) onChange(value)
  }

  if (loading) {
    return <Message type="loading">Cargando reportes...</Message>
  }

  if (error) {
    return <Message type="error">⚠️ {error}</Message>
  }

  return (
    <div className="sidebar-filter">
      <h2>ENTIDADES</h2>
      <select
        value={selected}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '15px' }}
      >
        {options.map(entity => (
          <option key={entity.id ?? entity.name} value={entity.id ?? ''}>
            {entity.name}
          </option>
        ))}
      </select>
    </div>
  )
}

EntityFilter.propTypes = {
  onChange: PropTypes.func,
}

export default EntityFilter
