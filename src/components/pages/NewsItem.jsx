import React from 'react'
import Button from '@widgets/form/Button'
import { useRouter } from 'next/router'
import { cuteDate } from '@utils/parseDate/formatDisplay'
import Anchor from '@widgets/Anchor'

const NewsItem = ({ info, infoTypes, teams, setModal, setSelectedInfo }) => {

  const router = useRouter()

  const { id_equipo, id_informacion } = info
  const { informacion_titulo, informacion_idPublicador } = info
  const { informacion_fechaPublicacion, id_informacionTipo } = info

  const infoType = infoTypes.find(type => type.id_informacionTipo === id_informacionTipo)
  const infoTeam = teams.find(team => team.id_equipo === id_equipo)

  const handleEdit = () => {
    router.push(`/noticias/${id_informacion}/editar`)
  }

  const { equipo_siglas } = infoTeam
  const { informacionTipo_nombre } = infoType

  return (
    <>
      <Anchor href={`/noticias/${id_informacion}`} className="font-bold !pl-0">
        {informacion_titulo}
      </Anchor>
      {/* <span className="font-bold">{informacion_titulo}</span> */}
      <span>{equipo_siglas}</span>
      <span>{informacion_idPublicador}</span>
      <span>{informacionTipo_nombre}</span>
      <span>{cuteDate(informacion_fechaPublicacion)}</span>
      <span className="NewsItem__buttons">
        <Button color="!bg-info-light" onClick={handleEdit}>
          Editar
        </Button>
        <Button color="!bg-error-light" onClick={() => {
          setSelectedInfo(info)
          setModal(true)
        }}>
          Eliminar
        </Button>
      </span>
    </>
  )
}

export default NewsItem