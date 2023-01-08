import React, { FC } from 'react'
import { Card } from 'react-bootstrap';

type apiData = {
        
  id: number;
  title: string;
  description:string
  price: number
  discountPercentage:number;
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
const StoreItem :FC<apiData>= ({thumbnail ,rating,stock,title,discountPercentage,price}) => {

  return (
    <div className=' overflow-hidden md:h-[540px] md:w-[400px]  border border-black'>
      
      <img  src={thumbnail} className="h-[400px] w-[400px] object-cover"/>
      <h1 className='text-xl'>{title}</h1>
      <div className='flex justify-start gap-12'>
        <div>{price}</div>
        <div><span className='font-bold'>{discountPercentage}%  </span>OFF</div>
      </div>
      <div>
        <div>Rating :  <span className='font-bold'>{rating} </span> out of <span className='font-bold'> 10 </span></div>
        <div>Available Items : <span className='font-bold'>{stock}</span></div>
      </div>
      
      </div>
  )
}

export default StoreItem