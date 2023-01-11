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

    return (
        <div >
            {loading ? <Loader /> :
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12 items-center justify-center ">
                    {storeItems?.map((item) => {
                        return (<div key={item.id} className="text-decoration-none text-black" >
                            <StoreItem  {...item} />
                        </div>
                        )
                    })}
                </div>
            }

        </div>

    )
}

export default Store