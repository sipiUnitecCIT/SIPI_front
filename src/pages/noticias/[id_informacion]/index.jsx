import React, { useEffect, useState } from 'react'
import SideBar from '@widgets/SideBar'
import LoadingScreen from '@widgets/LoadingScreen'
import useLoadingResources from 'src/hooks/useLoadingResources'
import { useRouter } from 'next/router'
import InfoService from 'src/services/info'
import RenderMarkdown from '@widgets/RenderMarkdown'
import TeamsService from 'src/services/teams'

const infoService = new InfoService()
const teamsService = new TeamsService()

const NewsPost = () => {

  const router = useRouter()
  const { id_informacion } = router.query
  const theresQuery = Boolean(Object.keys(router.query).length)

  const { resourcesState, showContent, setResources } = useLoadingResources()
  const { loadingResources, errorResources } = resourcesState

  const [info, setInfo] = useState({
    id_equipo: 0,
    id_informacionTipo: 0,
    informacion_titulo: "",
    informacion_cuerpo: "",
  })

  const [team, setTeam] = useState({
    id_equipo: 0,
    equipo_nombre: "",
    equipo_siglas: "",
    equipo_objetivoGeneral: null,
    equipo_objetivoEspecifico: null,
    equipo_correo: "",
    equipo_whatsApp: "",
    equipo_canalYoutube: ""
  })

  useEffect(() => {
    (async () => {
      if (theresQuery) {
        try {

          const info = await infoService.find(id_informacion)
          console.log("info:", info)

          const team = await teamsService.find(info.id_equipo)
          console.log("teams:", team)

          setInfo(info)
          setTeam(team)
          setResources({ loadingResources: false })

        } catch (error) {
          console.log(error)
          setResources({ loadingResources: false, errorResources: true })
        }
      }
    })()
  }, [theresQuery])

  const { informacion_titulo, informacion_cuerpo } = info
  const { equipo_nombre } = team
  
  return (
    <main className="NewsPost">
      <SideBar />

      <div className="NewsPost__main">
        {
          showContent ?
            <>
              <header style={{ backgroundImage: `url(https://i.imgur.com/hMPsm89.jpg)` }}>
                <div className="mask"></div>
                <div className="info px-8">
                  <h3 className="Subtitle pb-4">{informacion_titulo}</h3>
                  <div className="Author">
                    <img className="inline-block" width={25} src="https://i.imgur.com/ivy9J8b.png" alt={`${name}profile_image`} />
                    <span className="font-semibold inline-block">
                      Orlando Mendoza <span className="text-base font-regular">- {equipo_nombre}</span>
                    </span>
                    {/* <Clock className="fill-white w-6 h-6"/> <span className="font-semibold text-sm inline-block">{lastTime}</span> */}
                  </div>
                </div>
              </header>

              <section className="flex justify-center">
                <RenderMarkdown content={informacion_cuerpo} />
              </section>
            </>
            :
            <LoadingScreen
              text border
              error={errorResources}
              loading={loadingResources}
            />
        }
      </div>
    </main>
  )
}

export default NewsPost