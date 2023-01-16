import React, { FC, useContext, useEffect } from 'react'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/products.json'
const About: FC = () => {

  // itemHandler == number (item id)
  const { itemHandler, increaseCartQuantity, getItemQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(itemHandler());
  const { pathname } = useLocation()


  const detail = storeItems.find((item) => item.id == itemHandler())

//  not working --> 
  useEffect(()=>{
    window.scrollTo({top: 0,
      left: 0,
      behavior: "smooth"})
  },[])

  return (
    <>

<div className='p-1 md:w-[70%] w-full mx-auto'>
      <div className=' flex flex-col xl:flex-row gap-12 pt-[100px] m-1 mb-4 w-full'>
        <div className='xl:w-[50%] w-full md:h-[700px] h-[500px] relative'>
          <img className='w-full h-full object-cover' src={detail?.thumbnail} />
        </div>

        <div className='xl:w-[50%]  p-6 xl:p-12'>
          <h1 className='py-4 font-bold text-slate-500'>{detail?.title}</h1>
          <div className='text-2xl font-bold my-3'><span className='font-normal text-xl'>Brand: </span>{detail?.brand}</div>
          <h1 className='font-bold py-2 text-4xl'>${detail?.price}</h1>
          <div className='font-bold text-2xl'><span className='font-normal text-xl'>Stock : </span>{detail?.stock}</div>
          <h1 className='text-slate-400 text-xl py-4'>{detail?.description}</h1>
          <div className='flex mt-2 justify-start items-center gap-2 font-semibold text-2xl w-fit p-1 bg-slate-100 border-[10px] px-4'>
            <div><AiFillStar size={25} /></div>
            {detail?.rating}
          </div>



          {quantity == 0 ?
            <div className='flex flex-col  justify-start items-center  gap-2 pb-1'>
              <button onClick={() => increaseCartQuantity(itemHandler())} className='w-full shadow-md flex items-center justify-center gap-2 px-3 py-3 transition-all ease-in-out duration-300 mt-10 border-[5px] hover:bg-[#999c99] bg-slate-100'>
                <AiOutlineShoppingCart size={30} /> <span className='font-bold text-xl'>Add to Cart</span>
              </button>
            </div> : <>
              <div className='flex gap-3 justify-left my-2 mt-4 items-center' >
                <div onClick={() => decreaseCartQuantity(itemHandler())} className='font-bold text-4xl px-2 cursor-pointer'>-</div>
                <div className='text-2xl font-bold  px-2 rounded-md'>{quantity}</div>
                <div onClick={() => increaseCartQuantity(itemHandler())} className='font-bold text-4xl px-2 cursor-pointer '>+</div>

              </div>
              <button onClick={() => { removeFromCart(itemHandler()) }} className=' text-black border-2 px-4 py-2 bg-slate-100 text-xl hover:bg-slate-200'>Remove</button>
            </>

          }


        </div>



      </div>
    </div>


    <div className='h-[150px] '>
      <div className='w-[72%] mx-auto text-4xl font-light flex items-center pt-[50px]'>Featured Images/</div>
    </div>
      <div className='md:w-[70%] w-[95%] mx-auto flex gap-4 mb-[70px]'>

        {detail?.images.map((img, id) => {
          return (
            <div key={id}
              className="w-[300px] h-[200px] border shadow-lg rounded-lg "
            >
              <img className='h-full rounded-lg w-full object-cover' src={img} />
            </div>

          )
        })}
      </div>
    </>
    
  )
}

export default About