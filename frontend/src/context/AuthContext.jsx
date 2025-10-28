import { useState } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContextInstance'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isGuest, setIsGuest] = useState(false)

  const login = userData => {
    setUser(userData)
    setIsGuest(false)
  }
  const logout = () => setUser(null)
  const guest = () => {
    setUser(null)
    setIsGuest(true)
  }

  return (
    <AuthContext.Provider value={{ user, isGuest, login, logout, guest }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
