import React, { FC, useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { apiContextType, Context } from '../context/Context'

const About: FC = () => {

  const { detail } = useContext(Context) as apiContextType

  return (
    <div className='p-4'>
      <div className=' flex flex-col md:flex-row gap-12 p-4 '>
        <div className='md:w-[750px] w-full h-[700px]'>
          <img className='w-full h-full object-cover' src={detail?.thumbnail} />
        </div>

        <div className='border w-full p-4'>
          <h1 className='py-4 font-bold text-slate-500'>{detail?.title}</h1>
          <div className='text-2xl font-bold'>{detail?.brand}</div>
          <h1 className='font-bold py-2 text-4xl'>${detail?.price}</h1>
          <div className=''><span>Stock : </span>{detail?.stock}</div>
          <div>{detail?.description}</div>
          <div>
            <div><AiFillStar /></div>
            {detail?.rating}
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