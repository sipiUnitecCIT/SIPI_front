import CalendarEvents from '@components/CalendarEvents';
import NewsCard from '@components/NewsCard';
import TeamCard from '@components/TeamCard';
import LogInBar from '@widgets/LogInBar';
import SideBar from '@widgets/SideBar';
import React, { useState } from 'react'

const Home = () => {

  const defaulIconImage = "https://www.diktat-italia.com/wp-content/uploads/2018/02/brand-icon.png"

  const teams = [
    {
      name: "Centro de Innovación Tecnológica",
      image: "https://i.imgur.com/SES3rYJ.png",
      cover: "https://i.imgur.com/reU9vlC.png",
      linkName: "CIT",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "Vida Unitec",
      image: "https://i.imgur.com/pR0lFtQ.png",
      cover: "https://i.imgur.com/ul2JeBi.png",
      linkName: "VidaUnitec",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "Calidad y Productividad",
      image: defaulIconImage,
      cover: "https://i.imgur.com/WAMmFeR.png",
      linkName: "Calidad-Productividad",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "ECO-UNITEC",
      image: defaulIconImage,
      cover: "https://i.imgur.com/K9j8S1W.png",
      linkName: "ECO-UNITEC",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "Emprende Unitec",
      image: defaulIconImage,
      cover: "https://i.imgur.com/Je3pWC2.png",
      linkName: "Emprende-Unitec",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "Innovart",
      image: defaulIconImage,
      cover: "https://i.imgur.com/8jgRBre.png",
      linkName: "Innovart",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
    {
      name: "Soluciones Empresariales",
      image: defaulIconImage,
      cover: "https://i.imgur.com/koFfDVI.png",
      linkName: "Soluciones-Empresariales",
      description: "Este es un equipo muy importante en la universidad, es de tecnología"
    },
  ]

  const events = [
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
    {
      date: "Marzo 12",
      time: "23:50",
      name: "Fecha límite para las inscripciones",
      owner: "UNITEC"
    },
  ]

  const [hiddenMessage, setHiddenMessage] = useState(process.env.NEXT_PUBLIC_persona)
  const [hidden, setHidden] = useState(true)
  
  return (
    <main className="Home">
      <SideBar />
      <div className="Home__main">

        <LogInBar />

        <section className="Home__teams">
          <h2>Equipos de Proyectos</h2>
          <div className="Home__teams-list">
            {
              teams.map((team, i) => (
                <TeamCard {...team} key={i} />
              ))
            }
          </div>
        </section>

        <section className="Home__news">
          <h2>Noticias</h2>
          <div className="Home__news-list">
            {
              teams.map((team, i) => (
                <NewsCard {...team} key={i} />
              ))
            }
          </div>
        </section>

        <section className="Home__calendar">
          <h2>Eventos de Proyectos</h2>
          <CalendarEvents events={events} />
        </section>

        <button onClick={()=> setHidden(false)} className="p-4 bg-medium rounded-md">
          <span>{hidden ? "Mensaje Oculto :v" : `Creador: ${hiddenMessage}`}</span>
        </button>
      </div>
    </main>
  )
}

export default Home;
