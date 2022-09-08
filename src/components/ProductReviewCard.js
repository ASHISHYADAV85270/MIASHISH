import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({price,name,image,review,index,key}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span> {price}</span>
    </div>
  )
}

export default ProductReviewCard
