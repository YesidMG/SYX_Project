import { useState, useEffect, useCallback } from 'react'
import { AuthContext } from './AuthContextInstance'
import PropTypes from 'prop-types'
import { checkUserStatus, logout as apiLogout } from '../services/authApi'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    let mounted = true
    const init = async () => {
      try {
        const raw = localStorage.getItem('syx_user')
        if (!raw) {
          if (mounted) setUser(null)
          return
        }
        const parsed = JSON.parse(raw)

        // Si el usuario es invitado, recuperlo sin verificar en backend
        if (parsed?.isGuest) {
          if (mounted) setUser(parsed)
          return
        }

        // Usuario normal: verificar estado remoto
        try {
          const status = await checkUserStatus(parsed.name)
          if (mounted) {
            if (status === 'activo') {
              setUser(parsed)
            } else {
              localStorage.removeItem('syx_user')
              setUser(null)
            }
          }
        } catch (err) {
          // Si falla la verificación remota, asumimos no autenticado
          console.error('Error verificando sesión:', err)
          localStorage.removeItem('syx_user')
          if (mounted) setUser(null)
        }
      } catch (err) {
        console.error('Error inicializando auth:', err)
        localStorage.removeItem('syx_user')
        if (mounted) setUser(null)
      } finally {
        if (mounted) setInitializing(false)
      }
    }
    init()
    return () => {
      mounted = false
    }
  }, [])

  // Función para iniciar sesión
  const loginUser = useCallback(userData => {
    try {
      localStorage.removeItem('syx_user')
      localStorage.setItem('syx_user', JSON.stringify(userData))
      // eslint-disable-next-line no-empty
    } catch {}
    setUser(userData)
  }, [])

  // Función para entrar como invitado
  const guest = useCallback(() => {
    const guestUser = { name: 'Invitado', isGuest: true }
    try {
      localStorage.setItem('syx_user', JSON.stringify(guestUser))
      // eslint-disable-next-line no-empty
    } catch {}
    setUser(guestUser)
  }, [])

  // Función para cerrar sesión
  const logout = useCallback(async () => {
    try {
      if (user?.name && !user?.isGuest) {
        await apiLogout(user.name).catch(() => {})
      }
      // eslint-disable-next-line no-empty
    } catch {}
    localStorage.removeItem('syx_user')
    setUser(null)
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loginUser, logout, initializing, guest }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
