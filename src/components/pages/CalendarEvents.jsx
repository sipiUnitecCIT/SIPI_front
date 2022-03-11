import React from 'react'

const CalendarEvents = ({ events = [] }) => {
  return (
    <div className="CalendarEvents">
      {
        events.map(({ date, time, name, owner }, i) =>
          <div className="Event">
            <div className="Event__date">
              <span>{date} - </span>
              <span>{time}</span>
            </div>
            <div className="Event__info">
              <div className="Event__name">
                <span>{name}</span>
              </div>
              <div className="Event__owner">
                <span>{owner}</span>
              </div>
            </div>
            <button className="Event__btn">
              Agregar a Calendar
            </button>
          </div>
        )
      }
    </div>
  )
}

export default CalendarEvents