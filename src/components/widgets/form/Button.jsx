import Spinner from 'src/components/widgets/Spinner'
import React from 'react'

const Button = (props) => {

  const { color, loading, type = "button", noSpinner = false, children, ...rest } = props

  const spinner = noSpinner ? children : <Spinner text badgeColor="fill-light_grey" size="large" />

  return (
    <button
      type={type}
      disabled={loading}
      className={`Button ${!loading ? color : ""}`}
      {...rest}
    >
      {
        !loading ? children : spinner
      }
    </button>
  )
}
export default Button;