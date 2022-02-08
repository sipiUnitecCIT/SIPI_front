import SIPI_Info from '@templates/SIPI_Info';
import React from 'react';

const Index = () => {
  return (
    <SIPI_Info>
      <section className="WelcomeToSIPI">
        <h1 className="MainTitle">
          Bienvenid@ a <span className="text-secondary">SIPI</span>!
        </h1>
        <p className="text-sm font-regular">
          Para que tengas una mejor experiencia en el Sistema, necesitamos que <span className="text-secondary font-semibold">rellenes unos datos!</span>
        </p>
        
        <label htmlFor="" className="SelectForm">
          <span className="Subtitle"> ¿En que sede estudias?</span>
          <select name="" id="">
            <option value="">Selecciona una sede</option>
          </select>
        </label>
        
        <label htmlFor="" className="SelectForm">
          <span className="Subtitle">¿A que Equipo de Proyectos perteneces?</span>
          <select name="" id="">
            <option value="">Selecciona tu Equipo</option>
          </select>
        </label>
        
        <label htmlFor="" className="SelectForm">
          <span className="Subtitle">¿Cuál es el estatus de tu Artículo Académico?</span>
          <select name="" id="">
            <option value="">Selecciona una sede</option>
          </select>
        </label>
        
        <label htmlFor="" className="SelectForm">
          <span className="Subtitle">¿Cuál es el estatus de tu Pasantía?</span>
          <select name="" id="">
            <option value="">Selecciona una sede</option>
          </select>
        </label>
        
      </section>
    </SIPI_Info>
  );
};

export default Index;
