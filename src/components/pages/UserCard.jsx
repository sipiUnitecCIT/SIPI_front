import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="UserCard">
      <div className="UserCard__name">
        <img src={user.image} alt={`${user.name}-profile_image`} />
        <h3>{user.name}</h3>
        <span>#30096907</span>
      </div>
      <div className="UserCard__info">
        <h2>Información Básica</h2>
        <section>
          <div>
            <span className="UserCard__feature">
              <span>Email</span>
              <span>{user.email}</span>
              <span>Verificado</span>
            </span>
            <span className="UserCard__feature">
              <span>Contraseña</span>
              <span>***********</span>
            </span>
          </div>
          <div>
            <span className="UserCard__feature">
              <span>Carrera</span>
              <span>{user.career}</span>
            </span>
            <span className="UserCard__feature">
              <span>Trimestre</span>
              <span>{user.trimester}</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserCard;