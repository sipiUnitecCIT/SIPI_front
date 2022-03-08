import TeamMembers from '@components/TeamMembers'
import SideBar from '@widgets/SideBar'
import { useRouter } from 'next/router'
import React from 'react'

const Team = () => {
  const { query, back } = useRouter()
  const { name } = query

  const users = [
    {
      name: "Diego Laurentin",
      email: "diego.laurentin.ac@gmail.com",
      image: "https://i.imgur.com/GEtkUyu.png",
      lastAccess: "1 día, 4 horas",
      role: "Diseñador",
    },
    {
      name: "Fernando Zamudio",
      email: "fzamudio@gmail.com",
      image: "https://i.imgur.com/RGtWhTB.png",
      lastAccess: "23 horas, 34 minutos",
      role: "Consultor",
    },
    {
      name: "Orlando Mendoza",
      email: "ommv.17@gmail.com",
      image: "https://i.imgur.com/ivy9J8b.png",
      lastAccess: "24 segundos",
      role: "Programador",
    },
    {
      name: "Diego Laurentin",
      email: "diego.laurentin.ac@gmail.com",
      image: "https://i.imgur.com/GEtkUyu.png",
      lastAccess: "1 día, 4 horas",
      role: "Diseñador",
    },
    {
      name: "Fernando Zamudio",
      email: "fzamudio@gmail.com",
      image: "https://i.imgur.com/RGtWhTB.png",
      lastAccess: "23 horas, 34 minutos",
      role: "Consultor",
    },
    {
      name: "Orlando Mendoza",
      email: "ommv.17@gmail.com",
      image: "https://i.imgur.com/ivy9J8b.png",
      lastAccess: "24 segundos",
      role: "Programador",
    },
    {
      name: "Diego Laurentin",
      email: "diego.laurentin.ac@gmail.com",
      image: "https://i.imgur.com/GEtkUyu.png",
      lastAccess: "1 día, 4 horas",
      role: "Diseñador",
    },
    {
      name: "Fernando Zamudio",
      email: "fzamudio@gmail.com",
      image: "https://i.imgur.com/RGtWhTB.png",
      lastAccess: "23 horas, 34 minutos",
      role: "Consultor",
    },
    {
      name: "Orlando Mendoza",
      email: "ommv.17@gmail.com",
      image: "https://i.imgur.com/ivy9J8b.png",
      lastAccess: "24 segundos",
      role: "Programador",
    },
  ]

  return (
    <main className="Team">
      <SideBar />
      <div className="Team__main">
        <button
          onClick={back}
          className="text-sm font-semibold pb-8 pt-4"
        >
          {"< Volver"}
        </button>
        <h1>Miembros del Equipo "{name}"</h1>
        <section className="Team__members">
          <TeamMembers
            members={users}
            className="Team__table"
          />
        </section>
      </div>
    </main>
  )
}

export default Team