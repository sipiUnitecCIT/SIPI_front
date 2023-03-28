import React, { useState } from 'react'
import Modal from 'src/components/widgets/Modal'
import NewsCard from './NewsCard'

const NewsSections = ({ info }) => {

  const [showModal, setShowModal] = useState(false)
  
  const [selectedNew, setSelectedNew] = useState({

    id_informacion: "",
    informacion_idPublicador: "",

    informacion_fechaPublicacion: "", //2023-03-01
    informacion_fechaExpiracion: "",  //2023-03-01

    id_equipo: 0,
    id_informacionTipo: 0,
    informacion_titulo: "",
    informacion_cuerpo: "",

    // cover: "",
    // image: "",
    // linkName: "",
  })

  return (
    <section className="Home__news">
      <h2>Noticias</h2>
      <div className="Home__news-list">
        {
          info.map(item =>
            <NewsCard
              key={item.id_informacion}
              info={item}
              setShowModal={setShowModal}
              setSelectedNew={setSelectedNew}
            />
          )
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