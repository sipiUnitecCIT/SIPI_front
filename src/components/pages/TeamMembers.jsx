import { getShortName } from '@utils/index'
import { cuteDate } from '@utils/parseDate/formatDisplay'
import React, { Fragment } from 'react'

const TeamMembers = ({ members }) => {

  const alreadyFetchedMembers = Boolean(members[0].id_equipoMiembro)

  const tableFields = [
    "Nombre de Usuario",
    "Email",
    "Cédula de Identidad",
    "Fecha de Nacimiento",
  ]

  const defaultImage = "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"
  
  return (
    <div className="table">

      <div className="table__fields">
        {tableFields.map((field, i) =>
          <span key={i}>{field}</span>
        )}
      </div>

      <>
        {
          alreadyFetchedMembers &&
          members.map((member, i) => {
            const { id_persona, persona_correo } = member.persona
            const { persona_nombres, persona_apellidos, persona_fechaNacimiento } = member.persona

            const name = getShortName(persona_nombres, persona_apellidos)

            return (
              <Fragment key={i}>
                <span className="table__name">
                  <img className="rounded-full" width={35} src={defaultImage} alt={`${name}-profile-image`} />
                  <span>{name}</span>
                </span>
                <span>{persona_correo.toLowerCase()}</span>
                <span>{id_persona}</span>
                <span>{cuteDate(persona_fechaNacimiento)}</span>
              </Fragment>
            )
          })
        }
      </>

    </div>
  )
}

export default TeamMembers;