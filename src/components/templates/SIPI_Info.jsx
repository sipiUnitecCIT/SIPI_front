import React from 'react';

const SIPI_Info = ({background, children}) => {
  return (
    <main className={`SIPI_Info ${background && "with-background"}`}>
      <aside>
        <h1>Sistema de Información de Proyectos Institucionales</h1>
        <p>Aquí encontrarás todo lo relacionado con <span>Proyectos Institucionales.</span></p>
        <p>Es el canal de comunicación entre Proyectos Institucionales y la Universidad Tecnológica del Centro (UNITEC)</p>
      </aside>
      <section>
        {children}
      </section>
    </main>
  );
};

export default SIPI_Info;
