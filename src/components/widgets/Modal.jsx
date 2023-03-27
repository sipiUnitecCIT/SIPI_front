import Clock from '@icons/Clock'
import Cross from '@icons/Cross'
import React from 'react'
import RenderMarkdown from './RenderMarkdown'

const Modal = ({ selectedNew, showModal, setShowModal }) => {
  
  const { informacion_titulo, informacion_cuerpo } = selectedNew
  const { image="https://i.imgur.com/ivy9J8b.png", name="Orlando Mendoza", cover="",  lastTime = "hace una hora" } = selectedNew

  return (
    showModal ?
      <div className="Modal">
        <div className="Modal_container">
          {/* <header style={{backgroundImage: `url(${cover})`}}> */}
          <header style={{backgroundImage: `url(https://i.imgur.com/jwSMlYa.jpg)`}}>
            
            <button className="close_btn" onClick={() => setShowModal(false)}>
              <Cross className="fill-black w-6 h-6"/>
            </button>
            
            <h3 className="Subtitle pb-4">{informacion_titulo}</h3>
            
            <div className="Author">
              <img className="inline-block" width={25} src={image} alt={`${name}profile_image`} />
              <span className="font-semibold text-base inline-block">{name}</span>
              {/* <Clock className="fill-white w-6 h-6"/>
              <span className="font-semibold text-sm inline-block">{lastTime}</span> */}
            </div>
            
          </header>
          <section>
            <RenderMarkdown content={informacion_cuerpo}/>
          </section>
        </div>
      </div>
      :
      null
  )
}

export default Modal