import Anchor from '@widgets/Anchor';
import React from 'react';

const SIPI_Info = ({background, children}) => {
  return (
    <main className={`SIPI_Info ${background && "with-background"}`}>
      <aside>
        <h1>
          <Anchor href="/">
            Sistema de Información de Proyectos Institucionales
          </Anchor>
        </h1>
        <p>Aquí encontrarás todo lo relacionado con <span>Proyectos Institucionales.</span></p>
        <p>Es el canal de comunicación entre Proyectos Institucionales y los estudiantes de la Universidad Tecnológica del Centro</p>
      </aside>
      <div>
        {children}
      </div>
    </main>
  );
};

export default SIPI_Info;
