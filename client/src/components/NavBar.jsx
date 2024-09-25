import React from 'react'
import '../styles/navbar.css'
import { FaHome, FaList, FaPaperPlane, FaPenSquare, FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const token = localStorage.getItem('token');

  return (
    <div id='divPrincipal'>
        <div id='logoDash'>
        <img src="/src/assets/cockroachdb.png" alt="Descripción de la imagen" />

        </div>
        <nav>
            <ul> 
                <Link to='/'><li id='linav'><FaHome/> Inicio</li></Link>
                <Link to='login'><li id='linav'><FaSignInAlt/> Iniciar Sesión</li></Link>
                <Link to='/registro'><li id='linav'> <FaPenSquare/> Registro</li></Link>
                <Link to='/consulta'><li id='linav'> <FaList/> Consultar Datos</li></Link>
                <Link to='/contact'><li id='linav'> <FaPaperPlane/>Contactanos</li></Link>
                <Link to='/about'><li id='linav'> <FaHome/>Sobre nosotros</li></Link>
                {token && ( <Link to="/logout"> <li id='linav'> <FaSignOutAlt/> Cerrar Sesión</li></Link>)}
                
            </ul>
        </nav>
    </div>
  )
}

export default NavBar