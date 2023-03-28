import React from 'react'
import Portal from './modals/Portal'
import Cross from '@icons/Cross'
import { getDataAttribute } from '@utils/index'

const Modal = ({ showModal, setModal, size, closeButton = true, children }) => {

  const handleClick = ({ target }) => {
    const clickedOutModal = getDataAttribute(target, "modal")
    if (clickedOutModal) setModal(false)
  }

  const onClick = closeButton ? handleClick : null

  return (
    showModal &&
    <Portal>
      <div
        onClick={onClick}
        data-modal={closeButton}
        className={`Modal ${size}`}
      >
        <div className="Modal_container">
          {
            closeButton &&
            <button className="close_btn" onClick={() => setModal(false)}>
              <Cross className="fill-black w-6 h-6" />
            </button>
          }
          {
            children
          }
        </div>
      </div>
    </Portal>
  )
}

export default Modal