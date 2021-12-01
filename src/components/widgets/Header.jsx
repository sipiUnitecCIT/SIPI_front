import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Hamburger from '../icons/Hambuger'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    setIsDropDownOpen(false)
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
              <Link to="/" className=" font-semibold">
                UNITEC
              </Link>
            </li>

            <li className="Header__link">
              <Link to="/">Principal</Link>
            </li>

            <li className="Header__link">
              <Link to="/">Conocimiento CIT</Link>
            </li>

            <li className="Header__link">
              <Link to="/">Miembros CIT</Link>
            </li>

            <li className="Header__link">
              <Link to="/">Lineamientos CIT</Link>
            </li>

            <li className="Header__link">
              <Link to="/">Proyectos CIT</Link>
            </li>

          </ul>
          
          <ul className="Header__user-login">
            <li className="Header__link">
              <Link to="/">Registrate</Link>
            </li>
            <li className="Header__link Header__link--button">
              <Link to="/">Ingresa</Link>
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
