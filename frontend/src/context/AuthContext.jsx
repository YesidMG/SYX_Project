import { useState } from 'react'
import { AuthContext } from './AuthContextInstance'
import PropTypes from 'prop-types'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Función para iniciar sesión
  const loginUser = userData => setUser(userData)

  // Función para cerrar sesión
  const logout = () => setUser(null)

  // Función para continuar como invitado
  const guest = () => setUser({ name: 'Invitado', isGuest: true })

  return (
    <AuthContext.Provider value={{ user, loginUser, logout, guest }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
