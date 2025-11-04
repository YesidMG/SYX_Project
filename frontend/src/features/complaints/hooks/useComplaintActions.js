import { useState, useRef, useEffect } from 'react'
import { updateComplaintState } from '../../../services/api'
import { useAuth } from '../../../context/useAuth'

export function useComplaintActions(complaintId, onStateChange) {
  const { user } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const [showStateModal, setShowStateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleStateChange = async newState => {
    try {
      await updateComplaintState(complaintId, newState, user.name)
      await onStateChange()
    } catch (error) {
      console.error('Error al cambiar el estado:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await updateComplaintState(complaintId, 'DELETED', user.name)
      await onStateChange()
    } catch (error) {
      console.error('Error al eliminar:', error)
    }
  }

  return {
    showMenu,
    setShowMenu,
    showStateModal,
    setShowStateModal,
    showDeleteModal,
    setShowDeleteModal,
    menuRef,
    buttonRef,
    handleStateChange,
    handleDelete,
  }
}
