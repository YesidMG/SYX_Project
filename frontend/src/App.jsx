import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/useAuth'
import { useState, useCallback, useEffect } from 'react'
import { checkUserStatus } from './services/authApi'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage/HomePage'
import ComplaintsPage from './pages/ComplaintsPage/ComplaintsPage'
import ReportsPage from './pages/ReportsPage/ReportsPage'
import WritePage from './pages/WritePage/WritePage'
import LoginPage from './pages/LoginPage/LoginPage'
import Navbar from './components/NavBar/Navbar'
import { Message } from './components/Message'
import './App.css'

function PrivateRoute({ children }) {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [checking, setChecking] = useState(false)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    let ignore = false
    const verifyStatus = async () => {
      // Solo verifica estado si NO es invitado
      if (user && !user.isGuest) {
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
    return () => {
      ignore = true
    }
    // eslint-disable-next-line
  }, [location.pathname])

  // Si no hay usuario, redirige a login
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />

  // Si es invitado, solo permite acceso a /, /write y /reports
  if (
    user.isGuest &&
    location.pathname !== '/' &&
    location.pathname !== '/write' &&
    location.pathname !== '/reports'
  ) {
    return <Navigate to="/" replace />
  }

  if (checking)
    return (
      <div className="loading-container">
        <Message type="loading">Verificando sesión...</Message>
      </div>
    )
  if (expired) {
    alert('Sesión caducada')
    return <Navigate to="/login" replace />
  }
  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
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
        {/* HomePage será la ruta principal accesible para logged y guest */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        {/* mantener compatibilidad: /home redirige a / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="/complaints"
          element={
            <PrivateRoute>
              <ComplaintsPage entityFilter={entityFilter} />
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

AppRoutes.propTypes = {
  children: PropTypes.node,
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
