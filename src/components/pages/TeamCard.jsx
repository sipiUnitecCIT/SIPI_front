import Anchor from '@widgets/Anchor'
import React from 'react'

const TeamCard = ({ name, image, cover, linkName }) => {
  return (
    <Anchor className="TeamCard" href={`Team/${linkName}`}>
      <div className="TeamCard__overlay"/>
      <figure className="TeamCard__cover">
        <img src={cover} alt="" />
      </figure>
      <div className="TeamCard__image">
        <img src={image} alt={`${name}-cover`} />
      </div>
      <div className="TeamCard__name">
        <h3>{name}</h3>
      </div>
    </Anchor>
  )
}

export default TeamCard