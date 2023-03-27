import React from 'react'
import Portal from './Portal'
import Cross from '@icons/Cross'

const NotificationModal = ({ show, type = "", title, message, closeNotification }) => {

  const states = {
    success: "modal_green",
    warning: "modal_yellow",
    danger: "modal_red",
  }

  const modalState = type ? states[type] : ""
  
  return (
    <Portal type="alert">
      {
        show &&
        <div className={`NotificationModal ${modalState}`}>

          <div>
            <span>{title}</span>
            <span>{message}</span>
          </div>

          <button onClick={closeNotification}>
            <Cross size={15} />
          </button>

        </div>
      }
    </Portal>
  )
}

export default NotificationModal;