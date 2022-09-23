import React from 'react'

const FeedActivities = ({ feed }) => {
  return (
    <aside className="FeedActivities">
      <h4 className="FeedActivities__title">Feed Actividades</h4>
      <div className="FeedActivities__items">
        {
          feed.map(({ commentary, time, user }, i) =>
            <article className="Feed" key={i}>
              <div className="">

              </div>
              <div className="Feed__user">
                <img className="Feed__user-image" src={user.image} alt="" />
                <h6 className="Feed__title">
                  <span className="Feed__title--name">
                    {user.name}
                  </span>
                  <span> <span>&bull;</span> Ha añadido un comentario</span>
                </h6>
              </div>
              <div className="Feed__description">
                <span className="Feed__time">{time}</span>
                <p>{commentary}</p>
              </div>
            </article>
          )
        }
      </div>
    </aside>
  )
}

export default FeedActivities