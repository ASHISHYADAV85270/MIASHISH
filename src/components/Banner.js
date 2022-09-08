import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';


const Banner = ({banner}) => {
  return (
    <Carousel  fade="false" interval={4000} nextLabel='' prevLabel='' variant='dark' indicators='false'>
    {
      banner.end.map((item,index)=>(
          <Carousel.Item key={item.banner} id="banner"  interval={1000} keyboard={true}>
        <img
            className="d-block w-100"
             src={item.image}
             id="bannerImage"
              alt= {`${item} banner`}
            />
            <Carousel.Caption>
                <h3> {item.name}</h3>
                <p> {item.description}</p>
                <p> {item.source}</p>
                <u>Read More </u>
            </Carousel.Caption>
        </Carousel.Item>
      ))
    }

  </Carousel>
  )
}

export default Banner
