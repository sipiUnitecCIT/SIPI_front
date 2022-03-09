import Bell from '@icons/Bell'
import React from 'react'
import { useState } from 'react'

const LogInBar = () => {

  const [showNews, setShowNews] = useState(false)

  const [user, setUser] = useState({
    name: "Orlando Mendoza",
    email: "ommv.17@gmail.com",
    image: "https://i.imgur.com/ivy9J8b.png"
  })

  return (
    <header className="LogInBar">
      <nav>
        <div className="LogInBar__bar" onClick={() => setShowNews(!showNews)}>
          <div className="LogInBar__notifications">
            <Bell size={20} />
          </div>

          <div className="LogInBar__user">
            <span className="user">
              <span className="user__greeting">Bienvenido, </span>
              <span className="user__name">
                {user.name}
              </span>
            </span>
            <img width={30} src={user.image} alt={`${user.name}-profile_image`} />
          </div>
        </div>

        {
          showNews &&
          <div className="userMenu">
            <div className="userMenu__user">
              <img className="userMenu__image" src={user.image} alt={`${user.name}-profile_image`} />
              <span className="userMenu__info">
                <span>{user.name}</span>
                <span className="userMenu__email">{user.email}</span>
              </span>
            </div>
            <ul className="userMenu__options">
              <li>Perfil de SIPI</li>
              <li>Ajustes</li>
              <li>Ayuda</li>
            </ul>
            <button>Cerrar Sesión</button>
          </div>
        }

      </nav>
    </header>
  )
}

export default LogInBar