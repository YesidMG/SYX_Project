import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { updateComplaintState } from '../../services/api'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './Complaint.css'
import CommentSection from './CommentSection'
import DeleteModal from '../../components/DeleteModal/DeleteModal'
import StateChangeModal from '../../components/StateChangeModal/StateChangeModal'
import PasswordConfirmModal from '../../components/PasswordConfirmModal/PasswordConfirmModal'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const Complaint = ({ complaint, onStateChange }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showStateModal, setShowStateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [pendingAction, setPendingAction] = useState(null)
  const [newState, setNewState] = useState('')
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  const handleSecureAction = async password => {
    try {
      if (pendingAction === 'delete') {
        await updateComplaintState(complaint.id, 'DELETED', password)
      } else if (pendingAction === 'changeState') {
        updateComplaintState(complaint.id, newState, password)
      }
      await onStateChange()
      setShowPasswordModal(false)
      setPendingAction(null)
      setNewState('')
    } catch (error) {
      console.error('Error al actualizar el estado:', error)
    }
  }

  const handleMenuClick = e => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const handleStateChangeModal = () => {
    setShowMenu(false)
    setShowStateModal(true)
  }

  const handleDeleteModal = () => {
    setShowMenu(false)
    setShowDeleteModal(true)
  }

  return (
    <div className="complaint-wrapper">
      <div className="container">
        <div className="header">
          <div className="title">
            <figure className="entity-icon">
              <img
                src={`/entity_logos/${complaint.logo}`}
                alt={`Logo de ${complaint.entity_name}`}
                width="40"
                height="40"
              />
            </figure>
            <strong>{complaint.entity_name}</strong>
            <span className="entity-date">{formatDate(complaint.creation_date)}</span>
          </div>
          <div className="header-right">
            <div className="status">
              <span className={`status-dot ${complaint.state.toLowerCase()}`} />
              <span className="status-label">{complaint.state}</span>
            </div>
            <div className="options-container">
              <button ref={buttonRef} className="options-button" onClick={handleMenuClick}>
                <BsThreeDotsVertical />
              </button>
              {showMenu && (
                <div ref={menuRef} className="options-menu">
                  <button onClick={handleStateChangeModal}>Cambiar estado</button>
                  <button onClick={handleDeleteModal} className="delete">
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="description">
          <p>{complaint.description}</p>
        </div>
      </div>
      <CommentSection complaintId={complaint.id} />
      <StateChangeModal
        open={showStateModal}
        onClose={() => setShowStateModal(false)}
        onConfirm={selectedState => {
          setNewState(selectedState)
          setPendingAction('changeState')
          setShowPasswordModal(true)
          setShowStateModal(false)
        }}
      />
      <DeleteModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          setPendingAction('delete')
          setShowPasswordModal(true)
          setShowDeleteModal(false)
        }}
      />
      <PasswordConfirmModal
        open={showPasswordModal}
        onClose={() => {
          setShowPasswordModal(false)
          setPendingAction(null)
          setNewState('')
        }}
        onConfirm={handleSecureAction}
      />
    </div>
  )
}

Complaint.propTypes = {
  complaint: PropTypes.shape({
    id: PropTypes.number.isRequired,
    entity_name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onStateChange: PropTypes.func.isRequired,
}

export default Complaint
