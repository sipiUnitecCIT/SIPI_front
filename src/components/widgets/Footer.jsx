import React from 'react'
import Link from 'next/link'
import HomeIcon from '@icons/HomeIcon'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__links">
        <Link href="/Preguntas-frecuentes">
          <a className="Footer__anchor">
            <span>Preguntas Frecuentes</span><HomeIcon />
          </a>
        </Link>
        <Link href="/Nosotros">
          <a className="Footer__anchor">
            <span>Nosotros</span> <HomeIcon />
          </a>
        </Link>
        <Link href="/Ayuda">
          <a className="Footer__anchor">
            <span>Ayuda</span> <HomeIcon />
          </a>
        </Link>
      </div>
      <div className="Footer__socials">
        <span>Siguenos en nuestras redes</span>
        <div>
          <Link href="/">
            <a className="Footer__anchor--icon">
              <HomeIcon />
            </a>
          </Link>
          <Link href="/">
            <a className="Footer__anchor--icon">
              <HomeIcon />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer