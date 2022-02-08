import React from 'react';
import InputForm from '@widgets/form/InputForm';
import InputCheck from '@widgets/form/InputCheck';
import Button from '@widgets/form/Button';
import Anchor from '@widgets/Anchor';

const LogIn = ({userName, password, handleChange}) => {
  return (
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
  );
};

export default LogIn;
