import React, { FC, useContext, useEffect, useState } from 'react'
import storeItems from '../data/products.json'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import StoreItem from '../components/StoreItem'
const Store: FC = () => {

    //only loadaing
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (storeItems) {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])


    return (
        <div className='py-[60px] pb-[80px]'>
            <div className='h-[130px] md:h-[200px] bg-[#ab8957] flex items-center md:pl-[100px] pl-4 font-light text-4xl'>Home / <span className='font-bold text-[#505a51]'> Store</span></div>
            <div className=' mx-auto'>
                {loading ? <Loader /> :
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 xl:gap-12 items-center xl:p-12 p-2 mt-[60px] justify-center grid-center">
                        {storeItems?.map((item) => {
                            return (<div key={item.id} className="text-decoration-none grid-item items-center justify-center text-black my-[30px] xl:my-[10px]" >
                                <StoreItem  {...item} />
                            </div>
                            )
                        })}
                    </div>
                }

            </div>


        </div>

    )
}

export default Store