import PropTypes from 'prop-types'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuth } from '../../context/useAuth'
import EntityFilter from '../../features/entities/EntityFilter'
import SyxLogo from '../../assets/SYX-logo.png'
import SyxLogoMini from '../../assets/SYX-logo-mini.png'
import ComplaintLogo from '../../assets/email.svg?react'
import ReportLogo from '../../assets/file.svg?react'
import WriteLogo from '../../assets/pencil.svg?react'
import UserLogo from '../../assets/user.svg?react'
import { logout } from '../../services/authApi'
import './Navbar.css'

const API_URL = import.meta.env.VITE_API_URL
const iconSize = 30

Navbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
}

export default function Navbar({ onFilterChange }) {
  const location = useLocation()
  const { user, logout: logoutContext } = useAuth()
  const isGuest = user?.isGuest
  const navigate = useNavigate()
  const isHomeRoute = useMemo(() => location.pathname === '/', [location.pathname])

  const handleFilterChange = useMemo(
    () => value => {
      onFilterChange(value)
    },
    [onFilterChange]
  )

  const handleLogout = async () => {
    const data = await logout(user?.name)
    if (data.message === 'conexion finalizada') {
      logoutContext()
      navigate('/login')
    } else {
      alert('Error al cerrar sesión')
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <div>
          <Link to="/" className="brand" aria-label="Inicio">
            <span className="brand__icon" aria-hidden>
              <img src={SyxLogo} alt="SYX Home" className="logo-large" width="180" height="67" />
              <img
                src={SyxLogoMini}
                alt="SYX Home"
                className="logo-small"
                width={iconSize}
                height={iconSize}
              />
            </span>
          </Link>
          <nav className="menu">
            <NavLink
              to="/write"
              className={({ isActive }) => (isActive ? 'write__link is-active' : 'write__link')}
              aria-label="Redactar"
            >
              <WriteLogo
                className="write__icon"
                width={iconSize}
                height={iconSize}
                strokeWidth={1.2}
                color="white"
              />
              <span>Escribir</span>
            </NavLink>
            {/* Solo muestra "Quejas" si inicia sesion */}
            {!isGuest && (
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'menu__link is-active' : 'menu__link')}
              >
                <ComplaintLogo
                  className="menu__icon"
                  width={iconSize}
                  height={iconSize}
                  strokeWidth={1.2}
                  color="black"
                />
                <span>Quejas</span>
              </NavLink>
            )}
            {/* Solo muestra el filtro si inicio sesion y está en home */}
            {!isGuest && isHomeRoute && (
              <div className="filter-bar visible">
                <label htmlFor="entity-filter">Filtrar por entidad:</label>
                <EntityFilter onChange={handleFilterChange} />
              </div>
            )}
            {/* "Reportes" visible para todos */}
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? 'menu__link is-active' : 'menu__link')}
            >
              <ReportLogo
                className="menu__icon"
                width={iconSize}
                height={iconSize}
                strokeWidth={1.2}
                color="black"
              />
              <span>Reportes</span>
            </NavLink>
          </nav>
        </div>
        {/* Footer en la parte inferior del navbar */}
        <div className="nav__footer">
          {user ? (
            user.isGuest ? (
              <button className="auth__button" onClick={handleLogin} aria-label="Iniciar sesión">
                <UserLogo
                  className="write__icon"
                  width={iconSize}
                  height={iconSize}
                  strokeWidth={2}
                  color="white"
                />
                <span>iniciar sesión</span>
              </button>
            ) : (
              <button className="auth__button" onClick={handleLogout} aria-label="Cerrar sesión">
                <UserLogo
                  className="write__icon"
                  width={iconSize}
                  height={iconSize}
                  strokeWidth={2}
                  color="white"
                />
                <span>Cerrar sesión</span>
              </button>
            )
          ) : (
            <button className="auth__button" onClick={handleLogin} aria-label="Iniciar sesión">
              <UserLogo
                className="write__icon"
                width={iconSize}
                height={iconSize}
                strokeWidth={2}
                color="white"
              />
              <span>iniciar sesión</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
