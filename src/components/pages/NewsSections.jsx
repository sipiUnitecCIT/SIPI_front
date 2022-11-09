import React, { useState } from 'react'
import Modal from '@widgets/Modal'
import NewsCard from './NewsCard'

const NewsSections = ({ news }) => {

  const [showModal, setShowModal] = useState(false)

  const [selectedNew, setSelectedNew] = useState({
    title: "",
    cover: "",
    description: "",
    image: "",
    linkName: "",
  })

  return (
    <section className="Home__news">
      <h2>Noticias</h2>
      <div className="Home__news-list">
        {
          news.map((item, i) => (
            <NewsCard
              key={i}
              {...item}
              setShowModal={setShowModal}
              setSelectedNew={setSelectedNew}
            />
          ))
        }
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedNew={selectedNew}
      />
    </section>
  )
}

export default NewsSections