import PropTypes from 'prop-types'
import { Link, NavLink, useLocation } from 'react-router-dom'
import EntityFilter from '../../features/entities/EntityFilter'
import syx_logo from '../../assets/SYX-logo.png'
import ComplaintLogo from '../../assets/email.svg?react'
import ReportLogo from '../../assets/file.svg?react'
import WriteLogo from '../../assets/pencil.svg?react'
import './Navbar.css'

const iconSize = 30

Navbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
}

export default function Navbar({ onFilterChange }) {
  const location = useLocation()
  const isHomeRoute = location.pathname === '/'

  const handleFilterChange = value => {
    onFilterChange(value)
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand" aria-label="Inicio">
          <span className="brand__icon" aria-hidden>
            <img src={syx_logo} alt="SYX Home" width="180" height="67" />
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
            Escribir
          </NavLink>
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
            Quejas
          </NavLink>
          <div className={`filter-bar ${isHomeRoute ? 'visible' : ''}`}>
            <label htmlFor="entity-filter">Filtrar por entidad:</label>
            <EntityFilter onChange={handleFilterChange} />
          </div>
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
            Reportes
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
