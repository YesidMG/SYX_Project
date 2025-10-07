import { useState, useRef, useEffect } from 'react'
import { updateComplaintState } from '../../../services/api'

export function useComplaintActions(complaintId, onStateChange) {
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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showMenu])

  const handleSecureAction = async password => {
    try {
      if (pendingAction === 'delete') {
        await updateComplaintState(complaintId, 'DELETED', password)
      } else if (pendingAction === 'changeState') {
        await updateComplaintState(complaintId, newState, password)
      }
      await onStateChange()
      setShowPasswordModal(false)
      setPendingAction(null)
      setNewState('')
    } catch (error) {
      console.error('Error al actualizar el estado:', error)
    }
  }

  return {
    showMenu,
    setShowMenu,
    showStateModal,
    setShowStateModal,
    showDeleteModal,
    setShowDeleteModal,
    showPasswordModal,
    setShowPasswordModal,
    pendingAction,
    setPendingAction,
    newState,
    setNewState,
    menuRef,
    buttonRef,
    handleSecureAction,
  }
}
