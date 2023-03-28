import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';

const Portal = ({ type = "modal", children }) => {
  // type = "modal" || "alert"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted ? createPortal(children, document.getElementById(type)) : <></>
  )
}

export default Portal;