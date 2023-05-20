import React, { useEffect, useState } from 'react'
import { getCalendarLinks } from '@utils/ICalendar'

const CalendarLinks = ({ info, team, infoType }) => {

  const [links, setLinks] = useState({
    calendar_link_outlook: "",
    calendar_link_gmail: "",
    calendar_link_yahoo: "",
  })

  useEffect(() => {

    const { id_informacion, informacion_titulo } = info
    const { informacion_fechaPublicacion, informacion_fechaExpiracion } = info

    const infoFormat = {
      title: informacion_titulo,
      type: infoType.informacionTipo_nombre,
      url: `${location.origin}/noticias/${id_informacion}`,
      start: informacion_fechaPublicacion,
      end: informacion_fechaExpiracion,
    }
    
    const links = getCalendarLinks(infoFormat)
    setLinks(links)
    
  }, [info, infoType, team])

  return (
    <div className="CalendarLinks">
      <ul>
        <li>
          <a href={links.calendar_link_gmail} target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/OCNcEvH.png" alt="gmail-logo" />
          </a>
        </li>
        <li>
          <a href={links.calendar_link_outlook} target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/jIkKTbt.png" alt="outlook-logo" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CalendarLinks