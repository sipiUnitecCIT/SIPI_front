import Anchor from '@widgets/Anchor'
import React from 'react'
import Unitec from '@icons/Unitec'

const TeamCard = ({ equipo_nombre, id_equipo }) => {
  return (
    <Anchor className="TeamCard" href={`equipo/${id_equipo}`}>
      <div className="TeamCard__overlay"/>
      <figure className="TeamCard__cover">
        <img src="https://i.imgur.com/jwSMlYa.jpg" alt="" />
      </figure>
      <div className="TeamCard__image">
        <Unitec size={30} color1="#94a3b8" color2="#94a3b8"/>
      </div>
      <div className="TeamCard__name">
        <h3>{equipo_nombre}</h3>
      </div>
    </Anchor>
  )
}

export default TeamCard