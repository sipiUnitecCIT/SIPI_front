import LogIn from '@components/LogIn';
import SIPI_Info from '@templates/SIPI_Info';
import React, { useState } from 'react'

const SignIn = () => {

  const [state, setState] = useState({
    userName: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  return (
    <SIPI_Info background>
      <LogIn
        {...state}
        handleChange={handleChange}
      />
    </SIPI_Info>
  )
}

export default SignIn;
