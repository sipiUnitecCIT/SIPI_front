import Anchor from '@widgets/Anchor'
import React from 'react'

const NewsCard = ({ name, image, cover, linkName, description }) => {
  return (
    <Anchor className="NewsCard" href={`Team/${linkName}`}>
      <div className="NewsCard__overlay"></div>
      <figure className="NewsCard__cover">
        <img src={cover} alt="" />
      </figure>
      <div className="NewsCard__description">
        <h3>{name}</h3>
        <p>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</p>
      </div>
    </Anchor>
  )
}

export default NewsCard