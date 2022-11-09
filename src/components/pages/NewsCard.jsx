import React from 'react'

const NewsCard = (newsItem) => {
  
  const { title, image, cover, linkName, description, setShowModal, setSelectedNew } = newsItem
  
  const handleClick = () =>{
    setShowModal(true)
    debugger
    setSelectedNew(newsItem)
  }
  
  return (
    <div className="NewsCard" onClick={handleClick}>
      <div className="NewsCard__overlay"></div>
      <figure className="NewsCard__cover">
        <img src={cover} alt="" />
      </figure>
      <div className="NewsCard__description">
        <h3>{title}</h3>
        <p>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</p>
      </div>
    </div>
  )
}

export default NewsCard