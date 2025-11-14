import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import './LoginPage.css'
import logo from '../../assets/SYX-logo.png'
import { login } from '../../services/authApi'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { loginUser, guest } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Usuario y contraseña obligatorios')
      return
    }
    try {
      const data = await login(username, password)
      if (data.message === 'conexion aceptada') {
        loginUser({ name: username })
        navigate('/')
      } else {
        setError(data.message || 'Error de autenticación')
      }
    } catch (err) {
      console.error('Error en login:', err)
      setError('No se pudo conectar al backend')
    }
  }

  const handleGuest = () => {
    if (typeof guest === 'function') {
      guest()
    } else {
      loginUser({ name: 'Invitado', isGuest: true })
    }
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="SYX Complaints" />
          <h2>INICIAR SESIÓN</h2>
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
