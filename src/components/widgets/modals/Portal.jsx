import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';

const Portal = ({ type = "modal", children }) => {
  // type = "modal" || "alert"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const $element = document.getElementById(type)

  return (
    mounted ? createPortal(children, $element) : <></>
  )
}

export default Portal;