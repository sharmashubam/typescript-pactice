import React, { FC } from 'react'
import { Card } from 'react-bootstrap';

import { AiOutlineShoppingCart } from "react-icons/ai";

type apiData = {

  id: number;
  title: string;
  description: string
  price: number
  discountPercentage: number;
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
const StoreItem: FC<apiData> = ({ thumbnail, rating, stock, title, discountPercentage, price }) => {

  return (
    <div className=' overflow-hidden md:h-[560px] md:w-[440px] shadow-xl rounded-md cursor-pointer'>

      <img src={thumbnail && thumbnail} className="h-[400px] w-[440px] object-cover" />
      <h1 className='text-xl font-sans text-center py-2'>{title}</h1>

      <div className='flex '>
        <div>
        <div className='flex justify-start gap-12 items-center px-12'>
          <div className='font-semibold line-through'>${price}</div>
          <div><span className='font-bold'>{discountPercentage}%  </span>OFF</div>
        </div>
        <div className=' px-12'>
          <div className='flex justify-start gap-2 items-center'>Rating :  <span className='font-bold'>{rating} </span> out of <span className='font-bold'> 10 </span></div>
          <div className='flex justify-start gap-2 items-center'>Available Items : <span className='font-bold'>{stock}</span></div>
        </div>

        </div>
       
        <div className='flex flex-col  justify-start items-center  gap-2 pb-4'>
          <button className=' rounded-md shadow-md flex items-center justify-center gap-2 px-3 py-2  bg-[#F7A8CA] hover:bg-[#F43397] transition-all ease-in-out duration-300 mt-2'>
           <AiOutlineShoppingCart size={20}/> <span className='font-bold '>Add to Cart</span> 
            </button>
        </div>
      </div>


    </div>
  )
}

export default StoreItem