import PropTypes from 'prop-types'
import { useState } from 'react'
import './StateChangeModal.css'

const StateChangeModal = ({ open, onClose, onConfirm }) => {
  const [newState, setNewState] = useState('')

  if (!open) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>
          ✖
        </button>
        <h2>Cambiar estado</h2>
        <p>Selecciona el nuevo estado para este elemento:</p>

        <select value={newState} onChange={e => setNewState(e.target.value)}>
          <option value="">-- Seleccionar estado --</option>
          <option value="OPEN">Abierta</option>
          <option value="UNDER_REVIEW">Bajo Revisión</option>
          <option value="CLOSED">Cerrada</option>
        </select>

        <div className="actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => onConfirm(newState)} disabled={!newState} className="confirm">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

StateChangeModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default StateChangeModal
