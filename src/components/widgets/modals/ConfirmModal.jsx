import React from 'react'
import Button from '@widgets/form/Button'
import Modal from '@widgets/Modal'

import Success from '@icons/Success'
import Warning from '@icons/Warning'
import Error from '@icons/Error'

const ConfirmModal = (props) => {

  const { handleModal, button1, button2 } = props
  const { type, message, loading = false } = props

  const icons = {
    success: {
      Icon: Success,
      color: "fill-success-light"
    },
    warning: {
      Icon: Warning,
      color: "fill-warning-base"
    },
    error: {
      Icon: Error,
      color: "fill-error-light"
    },
  }

  const { Icon, color } = icons[type]

  return (
    <Modal {...handleModal} size="small" closeButton={false}>
      <div className="ConfirmModal">
        <Icon className={`${color} w-64 h-64`} />
        <span className="block pb-14">{message}</span>
        <div className={`buttons-container ${(button1 && button2) ? "two-buttons" : ""}`}>
          {
            button1 &&
            <Button {...button1} loading={loading}>
              Aceptar
            </Button>
          }
          {
            button2 &&
            <Button {...button2} loading={loading} noSpinner={true}>
              Cerrar
            </Button>
          }
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal