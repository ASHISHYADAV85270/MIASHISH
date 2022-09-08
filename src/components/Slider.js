import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
const Slider = ({start}) => {
  return (
    <Carousel fade="false" interval={4000} nextLabel='' prevLabel='' variant='dark' indicators='false'>
     
      {
        start.map((item,index)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
             src={item}
              alt="First slide"
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default Slider
