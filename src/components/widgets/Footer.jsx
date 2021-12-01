import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__links">
        <Link to="/Preguntas-frecuentes" className="Footer__anchor">
          <span>Preguntas Frecuentes</span><HomeIcon/>
        </Link>
        <Link to="/Nosotros" className="Footer__anchor">
          <span>Nosotros</span> <HomeIcon/>
        </Link>
        <Link to="/Ayuda" className="Footer__anchor">
          <span>Ayuda</span> <HomeIcon/>
        </Link>
      </div>
      <div className="Footer__socials">
        <span>Siguenos en nuestras redes</span>
        <div>
          <Link to="/" className="Footer__anchor--icon">
            <HomeIcon/>
          </Link>
          <Link to="/" className="Footer__anchor--icon">
            <HomeIcon/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer