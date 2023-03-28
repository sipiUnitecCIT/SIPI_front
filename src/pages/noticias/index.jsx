import { cuteDate } from '@utils/parseDate/formatDisplay'
import Button from 'src/components/widgets/form/Button'
import SideBar from 'src/components/widgets/SideBar'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import useLoadingResources from 'src/hooks/useLoadingResources'
import InfoService from 'src/services/info'
import TeamsService from 'src/services/teams'
import LoadingScreen from '@widgets/LoadingScreen'
import ConfirmModal from '@widgets/modals/ConfirmModal'
import NewsItem from '@components/NewsItem'
import useNotification from 'src/hooks/useNotification'
import NotificationModal from '@widgets/modals/NotificationModal'

const infoService = new InfoService()
const teamsService = new TeamsService()

const News = () => {

  const router = useRouter()

  const [showModal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const { notification, handleNotification } = useNotification()

  const [selectedInfo, setSelectedInfo] = useState({
    id_informacion: "",
    informacion_titulo: "",
    informacion_cuerpo: "",
    id_informacionTipo: 0,
    informacion_idPublicador: "",
    id_equipo: 0,
    informacion_fechaPublicacion: "",
    informacion_fechaExpiracion: "",
  })

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

  const tableFields = [
    "Título",
    "Equipo",
    "Creador",
    "Tipo",
    "Fecha de Publicación",
    "",
  ]

  const handleDelete = async () => {
    const { id_informacion } = selectedInfo
    setLoading(true)

    try {
      const response = await infoService.delete(id_informacion)
      console.log("ID:", response)

      const filteredInfo = info.filter(item => item.id_informacion !== id_informacion)
      setInfo(filteredInfo)

      handleNotification.show({
        type: "success",
        title: "Exito",
        message: `Se ha eliminado la noticia satisfactoriamente`,
      })

    } catch (error) {

      console.error(error);
      handleNotification.show({
        type: "danger",
        title: "Error",
        message: `No se podido eliminar la noticia, intentelo de nuevo`,
      })

    } finally {
      setLoading(false)
      setModal(false)
    }
  }

  return (
    <main className="News">
      <SideBar />
      <div className="News__main">
        <button onClick={() => router.push("/")} className="text-sm font-semibold pb-8 pt-4">
          {"< Volver"}
        </button>

        <div className="flex justify-between items-center pb-4">
          <h1 className="!p-0">Noticias</h1>
          <Button
            color="!bg-success-light"
            onClick={() => router.push("/noticias/crear")}
          >
            Nuevo
          </Button>
        </div>

        <section>
          {
            showContent ?
              <div className="table">

                <div className="table__fields">
                  {tableFields.map((field, i) =>
                    <span key={i}>{field}</span>
                  )}
                </div>

                <>
                  {
                    info.map(item =>
                      <NewsItem
                        info={item}
                        teams={teams}
                        infoTypes={infoTypes}
                        setModal={setModal}
                        setSelectedInfo={setSelectedInfo}
                        key={item.id_informacion}
                      />
                    )
                  }
                </>

              </div>
              :
              <LoadingScreen
                text border
                error={errorResources}
                loading={loadingResources}
              />
          }
        </section>

        <NotificationModal
          {...notification}
          closeNotification={handleNotification.close}
        />

        <ConfirmModal
          loading={loading}
          type="warning"
          message="¿Estás seguro de que quieres eliminar la noticia?"
          handleModal={{
            showModal,
            setModal,
          }}
          button1={{
            color: "!bg-success-light",
            onClick: handleDelete,
          }}
          button2={{
            color: "!bg-error-light",
            onClick: () => setModal(false),
          }}
        />

      </div>
    </main>
  )
}

export default News