import PropTypes from 'prop-types'
import './DeleteModal.css'

const DeleteModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null

  return (
    <div className="modal-overlay">
      <div className="modal delete-modal">
        <button className="close" onClick={onClose}>
          ✖
        </button>
        <h2>Confirmar eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer.</p>

        <div className="actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onConfirm} className="danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default DeleteModal
