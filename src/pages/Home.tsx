import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import products from '../data/products.json'

const Home: FC = () => {

  const { showItemHandler } = useShoppingCart()


  return (
    <div className='pt-[60px] w-full  '>
      <div >
        <div className='w-full xl:h-[550px] h-[400px]'>
          <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/5624988/pexels-photo-5624988.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        </div>
        <div className='text-white bg-black flex justify-center items-center h-[450px] mb-[50px]'>
          <div className='text-center  p-12'>
            <p className='text-2xl xl:text-4xl font-thin'>LIMITED DISCOUNT OFFER </p>
            <h1 className='text-2xl xl:text-4xl font-bold py-2'>ONLINE SHOPPING INDIA,GET OFFERS THAT YOU WILL NEVER REFUSE</h1>
            <h1 className='text-2xl xl:text-4xl font-thin py-2 pb-5'>GET BEST DEALS,NOW</h1>
            <Link to="/store" className='text-decoration-none text-white xl:text-2xl text-xl xl:px-5 xl:py-3 px-4 py-2 items-center text-center hover:bg-red-500 bg-red-600 '>PRODUCTS</Link>
          </div>
        </div>



        <div className='text-black xl:w-[80%] mx-auto'>

        <div className=' flex flex-col xl:flex-row items-center p-4 gap-5 w-full my-[100px]'>
            <div className='md:w-[650px] w-full md:h-[550px] h-[400px] shadow-lg overflow-hidden rounded-md'>
              <img className='w-full h-full object-cover' src={products[1].thumbnail} />
            </div>
            <div className='text-left mx-auto xl:w-1/2 px-6'>
              <p className='text-5xl font-semibold text-slate-800 py-2'>{products[1].title}</p>
              <p className='text-3xl pb-4 font-light'>{products[1].description}</p>
              <Link to='/product' onClick={() => showItemHandler(2)} className="h-full w-full object-cover text-decoration-none text-black px-4 py-2 text-xl mt-2 border-2  hover:bg-slate-400" >Go to Product</Link>
            </div>
          </div>



          <div className=' flex flex-col xl:flex-row-reverse items-center p-4 gap-5 w-full my-[100px]'>
            <div className='md:w-[650px] w-full md:h-[550px] h-[400px] shadow-lg overflow-hidden rounded-md'>
              <img className='w-full h-full object-cover' src={products[0].thumbnail} />
            </div>
            <div className='text-left mx-auto xl:w-1/2 px-6'>
              <p className='text-5xl font-semibold text-slate-800 py-2'>{products[0].title}</p>
              <p className='text-3xl pb-4 font-light'>{products[0].description}</p>
              <Link to='/product' onClick={() => showItemHandler(1)} className="h-full w-full object-cover text-decoration-none text-black px-4 py-2 text-xl mt-2 border-2  hover:bg-slate-400" >Go to Product</Link>
            </div>
          </div>

          


          <div className=' flex flex-col xl:flex-row items-center p-4 gap-5 w-full mb-[100px]'>
            <div className='md:w-[650px] w-full md:h-[550px] h-[400px] shadow-lg overflow-hidden rounded-md'>
              <img className='w-full h-full object-cover' src={products[3].thumbnail} />
            </div>
            <div className='text-left mx-auto xl:w-1/2 px-6'>
              <p className='text-5xl font-semibold text-slate-800 py-2'>{products[3].title}</p>
              <p className='text-3xl pb-4 font-light'>{products[3].description}</p>
              <Link to='/product' onClick={() => showItemHandler(4)} className="h-full w-full object-cover text-decoration-none text-black px-4 py-2 text-xl mt-2 border-2  hover:bg-slate-400" >Go to Product</Link>
            </div>
          </div>



          <div className='text-left px-4 py-[150px] flex flex-col gap-[20px]'>
            <p className='text-4xl font-light'>CHECK OUT THE BREATHTAKING COLLECTION OF ITEMS .</p>
            <Link to='/store'  className='text-decoration-none text-3xl text-black shadow-md w-fit hover:bg-red-400 bg-red-300 ml-2 font-light px-6 py-2'>Store</Link>
          </div>


        </div>




      </div>
    </div>
  )
}

export default Home