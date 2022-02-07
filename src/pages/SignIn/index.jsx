import React, { useState } from 'react'
import Link from "next/link";
import Footer from '@widgets/Footer';
import Header from '@widgets/Header';
import InputForm from '@widgets/form/InputForm';
import InputCheck from '@widgets/form/InputCheck';
import Button from '@widgets/form/Button';
import Anchor from '@widgets/Anchor';

const SignIn = () => {

  const [state, setState] = useState({
    userName: "",
    password: ""
  });

  const handleChange = ({target}) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }
  
  const {userName, password} = state

  return (
    <main className="SignIn">
      <aside>
        <h1 className='text-lg xx_sm:text-2xl font-bold'>Sistema de Información de Proyectos Institucionales</h1>
        <p className='text-xs xx_sm:text-base font-light'>Aquí encontrarás todo lo relacionado con <span className='font-semibold underline underline-offset-1'>Proyectos Institucionales.</span></p>
        <p className='text-xs xx_sm:text-base font-light'>Es el canal de comunicación entre Proyectos Institucionales y la Universidad Tecnológica del Centro (UNITEC)</p>
      </aside>
      <section>
        <form className='LogIn'>
          <h2>Iniciar Sesión</h2>
          <section>
            <InputForm
              type="email"
              title="Usuario ID"
              id="userName"
              handleChange={handleChange}
              value={userName}
              required
            />
            <InputForm
              type="password"
              title="Contraseña"
              id="password"
              handleChange={handleChange}
              value={password}
              required
            />
            <InputCheck
              title="Recordarme en el Sistema"
            />
            <Button type="submit">
              Ingresar
            </Button>
            <Anchor className="font-semibold text-sm text-neutral-60" href="/">
              Recuperar Contraseña
            </Anchor>
          </section>
        </form>
      </section>
    </main>
  )
}

export default SignIn;
