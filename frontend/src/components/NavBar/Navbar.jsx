import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";
import logo from "../../assets/chat.png"

export default function Navbar() {

    return (
        <header className="nav">
            <div className='nav__inner'>
                {/*IZQUIERDA : Logo + Título*/}
                <Link to="/" className='brand' aria-label='Inicio'>
                    <span className='brand__icon' aria-hidden>
                        {/*LOGO*/}
                        <img src={logo} alt="Logo" width="30" height="30" />
                    </span>
                    <span className='brand__text'>SISTEMA DE QUEJAS SYX</span>
                </Link>
                {/*CENTRO: Espacio*/}
                <div className="spacer"></div>
                {/*DERECHA: Enlaces*/}
                <nav className="menu">
                    <NavLink to="/" className={({ isActive }) => isActive ? "menu__link is-active" : "menu__link"}>
                        Quejas
                    </NavLink>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? "menu__link is-active" : "menu__link"}>
                        Reportes
                    </NavLink>
                    <NavLink to="/write" 
                        className={({ isActive }) => isActive ? "write__link is-active" : "write__link"}
                        aria-label='Redactar'>
                        <span className='write__icon' aria-hidden>
                            {/*Icono Redactar*/}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z" />
                            </svg>
                        </span>
                        <span className='write__text'>Escribir</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
