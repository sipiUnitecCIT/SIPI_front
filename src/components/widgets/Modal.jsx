import Clock from '@icons/Clock'
import Cross from '@icons/Cross'
import React from 'react'

const Modal = ({ selectedNew, showModal, setShowModal }) => {

  const { title, image, name, cover, linkName, description, lastTime = "hace una hora" } = selectedNew

  return (
    showModal ?
      <div className="Modal">
        <div className="Modal_container">
          <header style={{backgroundImage: `url(${cover})`}}>
            
            <button className="close_btn" onClick={() => setShowModal(false)}>
              <Cross className="fill-black w-6 h-6"/>
            </button>
            
            <h3 className="Subtitle pb-4">{title}</h3>
            
            <div className="Author">
              <img className="inline-block" width={25} src={image} alt={`${name}profile_image`} />
              <span className="font-semibold text-base inline-block">{name}</span>
              <Clock className="fill-white w-6 h-6"/>
              <span className="font-semibold text-sm inline-block">{lastTime}</span>
            </div>
            
          </header>
          <section>
            <p className="parragraph">{description}</p>
          </section>
        </div>
      </div>
      :
      null
  )
}

export default Modal