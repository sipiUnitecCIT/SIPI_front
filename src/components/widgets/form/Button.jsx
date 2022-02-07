import React from 'react'

const Button = (props) => {
  
  const { color, handleClick, ref, type = "button", children} = props
  const { notLoading, loading, text} = props
  
  return (
    <button
      type={type}
      ref={ref}
      disabled={loading}
      onClick={handleClick}
      className={`Button ${color}`}
    >
      {
        !loading ? children : "Cargando..."
      }
    </button>
  )
}
export default Button;