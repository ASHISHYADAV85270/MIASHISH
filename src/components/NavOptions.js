import React from 'react'
import "../styles/NavOptios.css"
import NavCard from '../components/NavCard.js'

const NavOptions = ({obj}) => {
  return (
    <div className='navOptions'>
      {
    obj.map((item,index)=>(
    <NavCard name={item.name} index={item.index} price={item.price} image={item.image}/>
      ))
      }
    </div>
  )
}

export default NavOptions
