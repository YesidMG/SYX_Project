import './LoginPage.css'
import logo from '../../assets/SYX-logo.png' // Ruta del logo

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="SYX Complaints" />
          <h2>Iniciar Sesión</h2>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
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
              required
            />
          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>

          <button type="button" className="guest-button">
            Continuar como invitado
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
