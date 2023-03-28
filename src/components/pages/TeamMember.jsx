import React from 'react'
import { getShortName } from '@utils/index'
import { cuteDate } from '@utils/parseDate/formatDisplay'

const TeamMember = ({ member }) => {

  const defaultImage = "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699__340.png"

  const { id_persona, persona_correo } = member
  const { persona_nombres, persona_apellidos, persona_fechaNacimiento } = member

  const name = getShortName(persona_nombres, persona_apellidos)

  return (
    <>
      <span className="table__name">
        <img className="rounded-full" width={35} src={defaultImage} alt={`${name}-profile-image`} />
        <span>{name}</span>
      </span>
      <span>{persona_correo.toLowerCase()}</span>
      <span>{id_persona}</span>
      <span>{cuteDate(persona_fechaNacimiento)}</span>
    </>
  )
}

export default TeamMember;