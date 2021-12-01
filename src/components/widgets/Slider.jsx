import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ images }) => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >

        {
          images.map(({image, description}) =>
            <div>
              <img src={image} />
              {/* <p>{description}</p> */}
            </div>
          )
        }
      </Carousel>
    </>
  )
}

export default Slider