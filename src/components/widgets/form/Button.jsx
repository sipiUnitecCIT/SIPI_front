import Spinner from 'src/components/widgets/Spinner'
import React from 'react'

const Button = (props) => {
  
  const { color, loading, type = "button", children, ...rest} = props
  
  return (
    <button
      type={type}
      disabled={loading}
      className={`Button ${ !loading ? color : "!bg-light_grey"}`}
      {...rest}
    >
      {
        !loading ? children : <Spinner text size="large" />
      }
    </button>
  )
}
export default Button;