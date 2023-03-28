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

  const handleNotification = {
    // Muestra la notificación, pero después de 10 segundos desaparece por sí sola
    show: function (message) {
      setNotification({
        ...message, show: true,
      })

      // setTimeout(() =>
      //   this.close()
      // , 10000)
    },
    // Resets notification state
    close: function () {
      setNotification(initialState)
    }
  }

  return {
    notification, handleNotification
  }
}

export default useNotification;