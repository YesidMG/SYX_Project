import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // { name, status }
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

export function useAuth() {
  return useContext(AuthContext)
}