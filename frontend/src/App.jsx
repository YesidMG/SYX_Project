import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { checkUserStatus } from './services/authApi'
import HomePage from './pages/HomePage/HomePage'
import ReportsPage from './pages/ReportsPage/ReportsPage'
import WritePage from './pages/WritePage/WritePage'
import LoginPage from './pages/LoginPage/LoginPage'
import Navbar from './components/NavBar/Navbar'

function PrivateRoute({ children }) {
  const { user, isGuest, logout } = useAuth()
  const location = useLocation()
  const [checking, setChecking] = useState(false)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    let ignore = false
    const verifyStatus = async () => {
      if (user && !isGuest) {
        setChecking(true)
        const status = await checkUserStatus(user.name)
        setChecking(false)
        if (!ignore && status !== 'activo') {
          setExpired(true)
          logout()
        }
      }
    }
    verifyStatus()
    return () => { ignore = true }
    // eslint-disable-next-line
  }, [location.pathname]) // Se ejecuta al cambiar de ruta

  if (!user && !isGuest) return <Navigate to="/login" state={{ from: location }} replace />
  if (checking) return <div>Cargando...</div>
  if (expired) {
    alert('Sesión caducada')
    return <Navigate to="/login" replace />
  }
  return children
}

function AppRoutes() {
  const [entityFilter, setEntityFilter] = useState('')
  const handleFilterChange = useCallback(value => setEntityFilter(value), [])
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/login' && <Navbar onFilterChange={handleFilterChange} />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage entityFilter={entityFilter} />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/write"
          element={
            <PrivateRoute>
              <WritePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}
