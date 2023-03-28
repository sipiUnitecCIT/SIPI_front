import TeamMembers from '@components/TeamMembers'
import SideBar from 'src/components/widgets/SideBar'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TeamsService from 'src/services/teams'

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
          
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [theresQuery])

  const { equipo_nombre } = team

  return (
    <main className="Team">
      <SideBar />
      <div className="Team__main">

        <button onClick={()=> router.push("/")} className="text-sm font-semibold pb-8 pt-4">
          {"< Volver"}
        </button>

        <h1>Miembros del Equipo &quot;{equipo_nombre}&quot;</h1>

        <section className="Team__members">
          <TeamMembers members={teamMembers} />
        </section>
        
      </div>
    </main>
  )
}

export default Team