import SIPI_Info from '@templates/SIPI_Info';
import InputForm from 'src/components/widgets/form/InputForm';
import SelectForm from 'src/components/widgets/form/SelectForm';
import React from 'react';

const Index = () => {

  const options = [{ name: "Selecciona una sede", value: "" }]

  return (
    <SIPI_Info>
      <section className="WelcomeToSIPI">
        <h1 className="MainTitle">
          Bienvenid@ a <span className="text-secondary">SIPI</span>!
        </h1>
        <p className="text-sm font-regular">
          Para que tengas una mejor experiencia en el Sistema, necesitamos que <span className="text-secondary font-semibold">rellenes unos datos!</span>
        </p>

        <SelectForm
          name="sede"
          options={options}
          defaultOption="Selecciona una sede"
          title="¿En que sede estudias?"
          className="SelectForm"
          titleStyle="Subtitle"
        />

        <SelectForm
          name="project_team"
          options={options}
          defaultOption="Selecciona tu Equipo"
          title="¿A que Equipo de Proyectos perteneces?"
          className="SelectForm"
          titleStyle="Subtitle"
        />

        <SelectForm
          name="AEG_status"
          options={options}
          defaultOption="Selecciona el estado de tu AEG"
          title="¿Cuál es el estatus de tu Artículo Académico?"
          className="SelectForm"
          titleStyle="Subtitle"
        />

        <SelectForm
          name="internship_status"
          options={options}
          defaultOption="Selecciona el estado de tu pasantía"
          title="Cuál es el estatus de tu Pasantía?"
          className="SelectForm"
          titleStyle="Subtitle"
        />

        <InputForm
          type="date"
          title="Fecha de ingreso a la universidad"
          id="college_entrance_date"
          titleStyle="Subtitle"
          className="SelectForm"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <InputForm
          id="cohorte"
          type="number"
          title="Cohorte al que perteneces"
          titleStyle="Subtitle"
          className="SelectForm"
          placeholder="Ejemplo: 2017"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <SelectForm
          name="TEG_status"
          options={options}
          defaultOption="Selecciona una opción"
          title="Estatus del TEG / Metodología"
          className="SelectForm"
          titleStyle="Subtitle"
        />
        
        <InputForm
          id="names"
          type="number"
          title="Primer y segundo nombre"
          titleStyle="Subtitle"
          className="SelectForm"
          placeholder="Steve Manuel"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <InputForm
          type="number"
          title="Tus apellidos"
          id="lastNames"
          titleStyle="Subtitle"
          className="SelectForm"
          placeholder="Aquino Chávez"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <InputForm
          type="text"
          title="Cédula de identidad"
          id="CI"
          titleStyle="Subtitle"
          className="SelectForm"
          placeholder="V-12.258.963"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <SelectForm
          name="blood_type"
          options={options}
          defaultOption="Tipo de Sangre"
          title="Estatus del TEG / Metodología"
          className="SelectForm"
          titleStyle="Subtitle"
        />
        
        <SelectForm
          name="birth_city"
          options={options}
          defaultOption="Selecciona tu ciudad de nacimiento"
          title="Ciudad de nacimiento"
          className="SelectForm"
          titleStyle="Subtitle"
        />

        <SelectForm
          name="current_city"
          options={options}
          defaultOption="Ciudad donde vives"
          title="Selecciona la ciudad donde vives actualmente?"
          className="SelectForm"
          titleStyle="Subtitle"
        />
        
        <InputForm
          type="date"
          id="birth_date"
          title="Fecha de nacimiento"
          titleStyle="Subtitle"
          className="SelectForm"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
        <InputForm
          type="date"
          title="Fecha de creación"
          id="creación_date"
          titleStyle="Subtitle"
          className="SelectForm"
          onChange={()=>{}}
          // value={"userName"}
          // required
        />
        
      </section>
    </SIPI_Info>
  );
};

export default Index;
