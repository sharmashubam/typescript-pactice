import React, { FC, useContext } from 'react'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import  storeItems from '../data/products.json'
const About: FC = () => {

  // itemHandler == number (item id)
  const {itemHandler,increaseCartQuantity}= useShoppingCart()


  const detail= storeItems.find((item)=>item.id==itemHandler())
  
  return (
    <div className='p-4'>
      <div className=' flex flex-col md:flex-row gap-12 p-4 m-2 '>
        <div className='md:w-[750px] w-full h-[700px]'>
          <img className='w-full h-full object-cover' src={detail?.thumbnail} />
        </div>

        <div className='w-full p-4'>
          <h1 className='py-4 font-bold text-slate-500'>{detail?.title}</h1>
          <div className='text-2xl font-bold'>{detail?.brand}</div>
          <h1 className='font-bold py-2 text-4xl'>${detail?.price}</h1>
          <div className='font-bold text-2xl'><span className='font-bold text-3xl'>stock : </span>{detail?.stock}</div>
          <h1 className='text-slate-400 text-xl py-4'>{detail?.description}</h1>
          <div className='flex mt-2 justify-start items-center gap-2 font-semibold text-2xl border w-fit p-1 rounded-3xl shadow bg-[#F7A8CA] px-4'>
            <div><AiFillStar size={25} /></div>
            {detail?.rating}
          </div>


          <div className='flex flex-col justify-start items-left  gap-2 pb-4'>
            <button onClick={()=>increaseCartQuantity(itemHandler())}  className=' rounded-md shadow-md flex items-center justify-center gap-2 px-3 py-4 w-[60%]  bg-[#F7A8CA] hover:bg-[#F43397] transition-all ease-in-out duration-300 mt-4'>
              <AiOutlineShoppingCart size={30} /> <span className='font-bold text-xl '>Add to Cart</span>
            </button>
            <button className=' rounded-md shadow-md flex items-center justify-center gap-2 px-3 py-4 w-[60%] bg-[#F7A8CA] hover:bg-[#F43397] transition-all ease-in-out duration-300 mt-4'>
              <AiOutlineHeart size={30} /> <span className='font-bold text-xl '>Add to WishList</span>
            </button>
          </div>

        </div>
      </div>

      <div className='w-[90%] flex gap-4 '>

        {detail?.images.slice(0, -1).map((img, id) => {
          return (
            <div key={id}
              className="w-[400px] h-[400px] border-2 shadow-lg rounded-lg"
            >
              <img className='h-full rounded-lg w-full object-cover' src={img} />
            </div>

          )
        })}
      </div>


    </div>
  )
}

export default About