import React, { FC } from 'react'
import { Container, Navbar as NavBs, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navbar: FC = () => {
  return (
    <div className='bg-white  shadow-sm '>
      <div>
        <div className='me-auto'>
          <Link to="/" className='text-lg font-bold px-4'>Home</Link>
          <Link to="/store" className='text-lg font-bold px-4'>Store</Link>
          <Link to='/category' className='text-lg font-bold px-4' >Categoy</Link>
        </div>
        <button
          style={{ height: "3rem", width: "3rem", position: "relative" }}
          className='rounded-circle'>Cart
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >3</div>
        </button>
      </div>
    </div>

  )
}

export default Navbar