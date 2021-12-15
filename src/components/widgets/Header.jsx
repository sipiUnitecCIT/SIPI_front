import React, { useState, useEffect } from 'react'
import Link  from "next/link"
import Hamburger from '@icons/Hambuger'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    // setIsDropDownOpen(false)
  }

  useEffect(() => {
  }, [])

  return (
    <header className={`Header ${isOpen ? "open" : ""}`}>
      <div className="Header__navbar">
        <div onClick={handleClose} className="Header__mask-mobile"></div>

        <nav className="">
          <ul className="Header__list">
            <li className="Header__link">
              <Link href="/">
                <a className="font-semibold">UNITEC</a>
              </Link>
            </li>

            <li className="Header__link">
              <Link href="/">
                <a>Principal</a>
              </Link>
            </li>

            <li className="Header__link">
              <Link href="/">
                <a>Conocimiento CIT</a>
              </Link>
            </li>

            <li className="Header__link">
              <Link href="/">
                <a>Miembros CIT</a>
              </Link>
            </li>

            <li className="Header__link">
              <Link href="/">
                <a>Lineamientos CIT</a>
              </Link>
            </li>

            <li className="Header__link">
              <Link href="/">
                <a>Proyectos CIT</a>
              </Link>
            </li>

          </ul>
          
          <ul className="Header__user-login">
            <li className="Header__link">
              <Link href="/">
                <a>Registrate</a>
              </Link>
            </li>
            <li className="Header__link Header__link--button">
              <Link href="/">
                <a>Ingresa</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button onClick={() => setIsOpen(true)} className="Header__button">
        <Hamburger />
      </button>
    </header>
  )
}

export default Header
