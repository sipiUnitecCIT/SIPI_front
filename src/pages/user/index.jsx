import FeedActivities from '@components/FeedActivities';
import UserCard from '@components/UserCard';
import LogInBar from 'src/components/widgets/LogInBar';
import SideBar from 'src/components/widgets/SideBar';
import React from 'react'

const User = () => {
  const user = {
    name: "Orlando Mendoza",
    career: "Ingeniería en Información",
    email: "ommv.17@gmail.com",
    image: "https://i.imgur.com/ivy9J8b.png",
    lastAccess: "24 segundos",
    role: "Programador",
    trimester: "VIII"
  }

  const feed = [
    {
      user: {
        name: "Orlando Mendoza",
        email: "ommv.17@gmail.com",
        image: "https://i.imgur.com/ivy9J8b.png",
        lastAccess: "24 segundos",
        role: "Programador",
      },
      time: "6/03/2022",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
    {
      user: {
        name: "Diego Laurentin",
        email: "diego.laurentin.ac@gmail.com",
        image: "https://i.imgur.com/GEtkUyu.png",
        lastAccess: "1 día, 4 horas",
        role: "Diseñador",
      },
      time: "Hace 2 horas",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
    {
      user: {
        name: "Fernando Zamudio",
        email: "fzamudio@gmail.com",
        image: "https://i.imgur.com/RGtWhTB.png",
        lastAccess: "23 horas, 34 minutos",
        role: "Consultor",
      },
      time: "Hace 5 horas",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
    {
      user: {
        name: "Orlando Mendoza",
        email: "ommv.17@gmail.com",
        image: "https://i.imgur.com/ivy9J8b.png",
        lastAccess: "24 segundos",
        role: "Programador",
      },
      time: "6/03/2022",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
    {
      user: {
        name: "Diego Laurentin",
        email: "diego.laurentin.ac@gmail.com",
        image: "https://i.imgur.com/GEtkUyu.png",
        lastAccess: "1 día, 4 horas",
        role: "Diseñador",
      },
      time: "Hace 2 horas",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
    {
      user: {
        name: "Fernando Zamudio",
        email: "fzamudio@gmail.com",
        image: "https://i.imgur.com/RGtWhTB.png",
        lastAccess: "23 horas, 34 minutos",
        role: "Consultor",
      },
      time: "Hace 5 horas",
      commentary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, at error, quo perferendis excepturi eos repellendus illum nihil aspernatur nulla. Obcaecati culpa nesciunt, molestias ex itaque eos sed optio."
    },
  ]

  return (
    <main className="User">
      <SideBar />
      <div className="User__main">
        <LogInBar />
        <section className="User__layout">
          <UserCard user={user} />
          <FeedActivities feed={feed} />
        </section>
      </div>
    </main>
  )
}

export default User;