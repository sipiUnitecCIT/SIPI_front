import React from 'react'
import Spinner from './Spinner';
import Image from "next/image"

const LoadingScreen = (props) => {

  const { loading, error = false, fullscreen = false, border = false, text = false, spinnerSize="w-14 h-14" } = props
  const { errorMessage = "Ha habido un error cargando los recursos de la sección" } = props

  return (
    <div className={fullscreen ? "relative w-screen h-screen md:w-auto md:h-auto" : ""}>
      <div className={`LoadingScreen text-lg  ${border && "border"} ${error ? "error mt-4 py-40" : "py-80 column-direction"} ${fullscreen && "fullscreen !py-60"}`}>
        {
          loading &&
          <Spinner size={spinnerSize} text={text} />
        }
        {
          error &&
          <>
            <img width={250} src="https://i.imgur.com/8drHlNm.png" />
            <span>{errorMessage}</span>
            {/* <span>Refresque la página e intente de nuevo.</span> */}
          </>
        }
      </div>
    </div>
  )
}

export default LoadingScreen;