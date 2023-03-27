import Unitec from '@icons/Unitec'
import React from 'react'

const NewsCard = ({ info, setShowModal, setSelectedNew }) => {

  const { informacion_titulo, informacion_cuerpo } = info

  const handleClick = () => {
    setShowModal(true)
    setSelectedNew(info)
  }

  const charLimit = 50
  const trimmedDescription = informacion_cuerpo.slice(0, charLimit)

  return (
    <div className="NewsCard" onClick={handleClick}>
      <div className="NewsCard__overlay"></div>
      {/* <figure className="NewsCard__cover">
        <img src="https://i.imgur.com/jwSMlYa.jpg" alt="" />
      </figure> */}
      <div className="NewsCard__cover-icon">
        <Unitec size="40" color1="#DEDEDE" color2="#DEDEDE" />
      </div>
      <div className="NewsCard__description">
        <h3>{informacion_titulo}</h3>
        <p>{informacion_cuerpo.length > charLimit ? `${trimmedDescription}...` : informacion_cuerpo}</p>
      </div>
    </div>
  )
}

export default NewsCard