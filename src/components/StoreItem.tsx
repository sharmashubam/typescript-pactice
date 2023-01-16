import React, { FC, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

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
const StoreItem: FC<apiData> = ({ thumbnail, rating, stock, title, discountPercentage, price, id }) => {

  const pathname= useLocation()
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, showItemHandler } = useShoppingCart()
  const quantity = getItemQuantity(id);
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  

  return (
    <div className=' overflow-hidden md:h-[540px] md:w-[440px] shadow-xl rounded-md mx-auto'>

      <div className='h-[400px] w-[490px] relative group'>
        <Link to='/product' >

          <img onClick={() => showItemHandler(id)} src={thumbnail && thumbnail} className="h-full w-full object-cover " />
        </Link>
      </div>
      <h1 className='text-xl font-sans text-center py-2'>{title}</h1>

      <div className='flex '>
        <div>
          <div className='flex justify-start gap-12 items-center px-12'>
            <div className='font-semibold line-through'>${price}</div>
            <div> <span className='font-bold'>{discountPercentage}%  </span>OFF</div>
          </div>
          <div className=' px-12 pb-6'>
            <div className='flex justify-start gap-2 items-center'>Rating :  <span className='font-bold'>{rating} </span> out of <span className='font-bold'> 10 </span></div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default StoreItem