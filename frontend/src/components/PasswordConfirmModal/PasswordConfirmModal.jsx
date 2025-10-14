import PropTypes from 'prop-types'
import { useState } from 'react'
import './PasswordConfirmModal.css'

const PasswordConfirmModal = ({ open, onClose, onConfirm }) => {
  const [password, setPassword] = useState('')

  if (!open) return null

  const handleSubmit = e => {
    e.preventDefault()
    onConfirm(password)
    setPassword('')
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Botón cerrar */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">Confirmar acción como administrador</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="password"
            placeholder="Ingresa la contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="modal-input"
          />

          <button type="submit" className="modal-button">
            Aceptar
          </button>
        </form>
      </div>
    </div>
  )
}

PasswordConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default PasswordConfirmModal
