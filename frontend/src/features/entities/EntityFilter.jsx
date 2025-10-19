import PropTypes from 'prop-types'
import { memo, useState, useCallback, useMemo } from 'react'
import { useEntities } from '../../hooks/useEntities'
import { Message } from '../../components/Message'
import './EntityFilter.css'

const DEFAULT_OPTION = { id: '', name: 'Todas' }

const EntityFilter = ({ onChange }) => {
  const { entities, loading, error } = useEntities()
  const options = useMemo(() => [DEFAULT_OPTION, ...entities], [entities])
  const [selected, setSelected] = useState(DEFAULT_OPTION.id)

  const handleChange = useCallback(
    e => {
      const value = e.target.value
      setSelected(value)
      if (onChange) onChange(value)
    },
    [onChange]
  )

  if (loading) return <Message type="loading">Cargando reportes...</Message>
  if (error) return <Message type="error">⚠️ {error}</Message>

  return (
    <div className="sidebar-filter">
      <select value={selected} onChange={handleChange}>
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

export default memo(EntityFilter)
