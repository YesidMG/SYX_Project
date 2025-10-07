import PropTypes from 'prop-types'
import { BsThreeDotsVertical } from 'react-icons/bs'

ComplaintsOptionsMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  menuRef: PropTypes.object.isRequired,
  buttonRef: PropTypes.object.isRequired,
}

export function ComplaintsOptionsMenu({
  showMenu,
  onMenuClick,
  onStateChange,
  onDelete,
  menuRef,
  buttonRef,
}) {
  return (
    <div className="options-container">
      <button ref={buttonRef} className="options-button" onClick={onMenuClick}>
        <BsThreeDotsVertical />
      </button>
      {showMenu && (
        <div ref={menuRef} className="options-menu">
          <button onClick={onStateChange}>Cambiar estado</button>
          <button onClick={onDelete} className="delete">
            Eliminar
          </button>
        </div>
      )}
    </div>
  )
}
