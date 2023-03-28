import SideBar from 'src/components/widgets/SideBar'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TeamsService from 'src/services/teams'
import LoadingScreen from '@widgets/LoadingScreen'
import TeamMember from '@components/TeamMember'
import useLoadingResources from 'src/hooks/useLoadingResources'

const teamsService = new TeamsService()

const Team = () => {
  const router = useRouter()
  const { id_equipo } = router.query

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

  const [teamMembers, setTeamMembers] = useState([
    {
      id_equipoMiembro: "",
      id_persona: "",
      id_equipo: 0,
      equipoMiembro_periodoActual: "",
      equipoMiembro_periodoCreacion: "",
      equipoMiembro_status: 0,
      equipoMiembro_nota: 0,
      persona: {
        id_persona: "",
        persona_tipoIdentificacion: "",
        persona_nacionalidad: "",
        persona_cedula: "",
        persona_nombres: "",
        persona_apellidos: "",
        persona_correo: "",
        persona_genero: "",
        persona_fechaNacimiento: "",
        persona_fechaCreacion: ""
      }
    }
  ])

  const { resourcesState, showContent, setResources } = useLoadingResources()
  const { loadingResources, errorResources } = resourcesState

  const theresQuery = Boolean(Object.keys(router.query).length)

  useEffect(() => {
    (async () => {
      if (theresQuery) {
        try {

          const team = await teamsService.find(id_equipo)
          console.log("team:", team)

          const teamMembers = await teamsService.findMembers(team.id_equipo)
          console.log("teamMembers:", teamMembers)

          setTeam(team)
          setTeamMembers(teamMembers)

          setResources({ loadingResources: false })

        } catch (error) {
          console.log(error)
          setResources({ loadingResources: false, errorResources: true })
        }
      }
    })()
  }, [theresQuery])

  const { equipo_nombre } = team

  const tableFields = [
    "Nombre de Usuario",
    "Email",
    "Cédula de Identidad",
    "Fecha de Nacimiento",
  ]

  const title = equipo_nombre ? `- ${equipo_nombre}` : ""

  return (
    <main className="Team">
      <SideBar />
      <div className="Team__main">

        <button onClick={() => router.push("/")} className="text-sm font-semibold pb-8 pt-4">
          {"< Volver"}
        </button>

        <h1>Miembros del Equipo {title}</h1>

        <section className="Team__members">
          {
            showContent ?
              <div className="table">

                <div className="table__fields">
                  {
                    tableFields.map((field, i) =>
                      <span key={i}>{field}</span>
                    )
                  }
                </div>

                <>
                  {
                    teamMembers.map(({ persona, id_equipoMiembro }) =>
                      <TeamMember
                        key={id_equipoMiembro}
                        member={persona}
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

      </div>
    </main>
  )
}

export default Team