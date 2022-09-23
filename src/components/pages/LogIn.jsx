import React from 'react';
import InputLogIn from '@widgets/form/InputLogIn';
import InputCheck from '@widgets/form/InputCheck';
import Button from '@widgets/form/Button';
import Anchor from '@widgets/Anchor';

const LogIn = ({userName, password, handleChange}) => {
  return (
    <form className='LogIn'>
      <h2>Iniciar Sesión</h2>
      <section>
        <InputLogIn
          type="email"
          title="Usuario ID"
          id="userName"
          handleChange={handleChange}
          value={userName}
          required
        />
        <InputLogIn
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
        <Anchor href="/">
          Recuperar Contraseña
        </Anchor>
      </section>
    </form>
  );
};

export default LogIn;
