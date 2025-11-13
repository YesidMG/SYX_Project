import { NavLink } from 'react-router-dom'
import SyxLogo from '../../assets/SYX-logo.png'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-card">
        {/* Columna de Contenido (Izquierda) */}
        <div className="home-content-column">
          <img src={SyxLogo} alt="SYX Complaints Logo" className="home-logo" />
          <h1 className="home-title">SYX Complaints</h1>
          <p className="home-description">
            Sistema de redacción de quejas para entidades públicas del departamento de Boyacá.
          </p>
          <NavLink to="/write" aria-label="Redactar" className="home-cta-button">
            <span>¿Qué queja tienes?</span>
          </NavLink>
        </div>

        {/* Columna Gráfica (Derecha) */}
        <div className="home-graphic-column">
          {/* Mensajes/Quejas flotantes */}
          <div className="complaint-message message-1 status-open">Queja Abierta</div>
          <div className="complaint-message message-2 status-review">Queja en Revisión</div>
          <div className="complaint-message message-3 status-closed">Queja Cerrada</div>
          <div className="complaint-message complaint-comment message-4">Nuevo Comentario</div>
          <div className="complaint-message complaint-comment message-5">Nuevo Comentario</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
