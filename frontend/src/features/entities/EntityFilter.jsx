import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { getEntities } from '../../services/api'
import './EntityFilter.css'

const DEFAULT_OPTION = { id: '', name: 'Todas' }

const EntityFilter = ({ onChange }) => {
  const [entities, setEntities] = useState([DEFAULT_OPTION])
  const [selected, setSelected] = useState(DEFAULT_OPTION.id)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    getEntities(controller.signal)
      .then((data) => {
        setEntities([DEFAULT_OPTION, ...data])
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setEntities([DEFAULT_OPTION])
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setSelected(value)
    if (onChange) onChange(value)
  }

  if (loading) {
    return (
      <div className="message loading">
        <h3>Cargando entidades...</h3>
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
    <div className="sidebar-filter">
      <h3>ENTIDADES</h3>
      <select
        value={selected}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '15px' }}
      >
        {entities.map((entity) => (
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
