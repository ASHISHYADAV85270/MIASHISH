import React from 'react'
import VideoCard from '../components/VideoCard.js'
import "../styles/Video.css"
const Videos = ({videos}) => {
  return (
    <div className='videos'>
       {
        videos.map((item,index)=>(
            <VideoCard index={index} image={item.image} name={item.name} key={item.image}  />
        ))
       }
    </div>
  )
}

export default Videos
