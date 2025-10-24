import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './LoginPage.css'
import logo from '../../assets/SYX-logo.png'

const AUTH_API = 'https://auth-service-7j09.onrender.com' // URL real del microservicio

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, guest } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Usuario y contraseña obligatorios')
      return
    }
    try {
      const res = await fetch(`${AUTH_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, password }),
      })
      const data = await res.json()
      if (data.message === 'conexion aceptada') {
        login({ name: username })
        navigate('/')
      } else {
        setError(data.message || 'Error de autenticación')
      }
    } catch {
      setError('No se pudo conectar al servicio de autenticación')
    }
  }

  const handleGuest = () => {
    guest()
    navigate('/write')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="SYX Complaints" />
          <h2>Iniciar Sesión</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Ingresar
          </button>
          <button type="button" className="guest-button" onClick={handleGuest}>
            Continuar como invitado
          </button>
        </form>
      </div>
    </div>
  )
}
