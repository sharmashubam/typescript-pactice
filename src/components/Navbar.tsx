import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar: FC = () => {
  const { openCart, closeCart, cartQuantity } = useShoppingCart()
  return (
    <div className='bg-black text-white shadow-sm fixed w-full h-[60px] z-50 '>
      <div className='flex justify-between items-center px-4 '>
        <div className='hidden md:block'>
          Logo
        </div>
        <div className='flex justify-center gap-4 ml-2 items-center h-full mt-1'>
          <Link to="/" className='text-lg text-decoration-none  text-white hover:scale-110 transition-all ease-in-out duration-300'>Home</Link>
          <Link to="/store" className='text-lg text-decoration-none  text-white hover:scale-110 transition-all ease-in-out duration-300'>Store</Link>
        </div>

        <div>

          <button onClick={() => openCart()}
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            className='mt-1'><AiOutlineShoppingCart size={25} />
            {cartQuantity > 0 && <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 3,
                right: 3,
                transform: "translate(25%, 25%)",
              }}
            >{cartQuantity}</div>}
          </button>
        </div>

      </div>
    </div>

  )
}

export default Navbar