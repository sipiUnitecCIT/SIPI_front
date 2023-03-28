import { cuteDate } from '@utils/parseDate/formatDisplay'
import Button from 'src/components/widgets/form/Button'
import SideBar from 'src/components/widgets/SideBar'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import useLoadingResources from 'src/hooks/useLoadingResources'
import InfoService from 'src/services/info'
import TeamsService from 'src/services/teams'

const infoService = new InfoService()
const teamsService = new TeamsService()

const News = () => {

  const router = useRouter()

  const tableFields = [
    "Título",
    "Equipo",
    "Creador",
    "Tipo",
    "Fecha de Publicación",
    "",
  ]

  const { resourcesState, showContent, setResources } = useLoadingResources()

  const { loadingResources, errorResources } = resourcesState

  const [teams, setTeams] = useState([
    {
      id_equipo: 0,
      equipo_nombre: "",
      equipo_siglas: "",
      equipo_objetivoGeneral: null,
      equipo_objetivoEspecifico: null,
      equipo_correo: "",
      equipo_whatsApp: "",
      equipo_canalYoutube: ""
    }
  ])

  const [info, setInfo] = useState([
    {
      id_informacion: "",
      informacion_titulo: "",
      informacion_cuerpo: "",
      id_informacionTipo: 0,
      informacion_idPublicador: "",
      id_equipo: 0,
      informacion_fechaPublicacion: "",
      informacion_fechaExpiracion: "",
    }
  ])

  const [infoTypes, setInfoTypes] = useState([
    {
      id_informacionTipo: 0,
      informacionTipo_codigo: "",
      informacionTipo_nombre: "",
      informacionTipo_confirmacion: false
    }
  ])

  useEffect(() => {
    (async () => {
      try {
        setResources({ loadingResources: true })

        const info = await infoService.getAll()
        console.log("info:", info)

        const infoTypes = await infoService.getAllTypes()
        console.log("infoTypes:", infoTypes)

        const teams = await teamsService.getAll()
        console.log("teams:", teams)

        setInfo(info)
        setInfoTypes(infoTypes)
        setTeams(teams)

        setResources({ loadingResources: false })

      } catch (error) {
        setResources({ loadingResources: false, errorResources: true })
        console.log(error)
      }
    })()
  }, [])

  return (
    <main className="News">
      <SideBar />
      <div className="News__main">
        <button onClick={() => router.push("/")} className="text-sm font-semibold pb-8 pt-4">
          {"< Volver"}
        </button>

        <h1>Noticias</h1>

        <section>
          <div className="table">

            <div className="table__fields">
              {tableFields.map((field, i) =>
                <span key={i}>{field}</span>
              )}
            </div>

            <>
              {
                showContent &&
                info.map(item => {

                  const { id_equipo, id_informacion } = item
                  const { informacion_titulo, informacion_idPublicador } = item
                  const { informacion_fechaPublicacion, id_informacionTipo } = item

                  const infoType = infoTypes.find(type => type.id_informacionTipo === id_informacionTipo)
                  const infoTeam = teams.find(team => team.id_equipo === id_equipo)

                  const handleEdit = () => {
                    router.push(`/noticias/${id_informacion}/editar`)
                  }

                  const handleDelete = async () => {
                    const response = await infoService.delete(id_informacion)
                    console.log("ID:", response)
                    debugger
                    const filteredInfo = info.filter(item => item.id_informacion !== id_informacion)
                    setInfo(filteredInfo)
                  }

                  return (
                    <Fragment key={id_informacion}>
                      <span className="font-bold">{informacion_titulo}</span>
                      <span>{infoTeam.equipo_siglas}</span>
                      <span>{informacion_idPublicador}</span>
                      <span>{infoType.informacionTipo_nombre}</span>
                      <span>{cuteDate(informacion_fechaPublicacion)}</span>
                      <span>
                        <Button color="!bg-info-light mr-4" onClick={handleEdit}>
                          Editar
                        </Button>
                        <Button color="!bg-error-light" onClick={handleDelete}>
                          Eliminar
                        </Button>
                      </span>
                    </Fragment>
                  )
                })
              }
            </>

          </div>
        </section>
      </div>
    </main>
  )
}

export default News