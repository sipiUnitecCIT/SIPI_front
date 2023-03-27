import React, { useState } from "react";

const useNotification = () => {

  // El objeto notification se le pasa al NoticationModal
  const initialState = {
    show: false,
    type: "", // "sucess" || "warning" || "danger"
    title: "",
    message: "",
  }

  const [notification, setNotification] = useState(initialState)

  // Muestra la notificación, pero después de 10 segundos desaparece por sí sola
  const showNotification = (message) => {
    setNotification({
      ...message, show: true,
    })
    
    setTimeout(() => 
      closeNotification()
    , 10000)
  }

  const closeNotification = () => {
    setNotification(initialState)
  }

  return {
    notification,
    showNotification,
    closeNotification,
  }
}

export default useNotification;