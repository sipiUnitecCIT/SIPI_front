import React from 'react';
// import pikachu from '../../assets/images/pikachu.png'

const NotFoundSearches = (props) =>(
  <section className="NotFoundSearches">
    <div className="NotFoundSearches__image">
      <img src="https://i.imgur.com/2oP2Ne5.png" alt="pikachu-sorprendido"/>
    </div>
    <div className="NotFoundSearches__message">
      {props.children}
    </div>
  </section>
)

export default NotFoundSearches;