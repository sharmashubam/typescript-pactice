import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import StoreItem from '../components/StoreItem'
import Loader from '../components/Loader'

const Store: FC = () => {
    const [data, setdata] = useState<apiData[]>([])
    const [search, setSearch] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true);
    // categories
    const [allCategory, setAllCategory] = useState<string[]>([]);
    const [category, setCategory] = useState<string>("");
    //interfaces ---->  note put them in exteranl component //ok 

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


    const handleSearch = (event: any): void => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        // category
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                setAllCategory(response.data.slice(0, 14))
            })


        // get catedory item

        if (category) {

            setLoading(true)
            axios.get(`https://dummyjson.com/products/category/${category}`)
                .then((response) => {
                    setdata(response.data.products)
                    setLoading(false);
                })
        }

        // added endpoint to have more items and limit 100  OK

        if (!search && !category) {
            setLoading(true)
            axios?.get("https://dummyjson.com/products?limit=100")?.then((response) => {
                setdata(response.data.products)
                // console.log(data)
                setLoading(false)
            })
        }



        if (search) {
            setLoading(true);
            axios?.get(`https://dummyjson.com/products/search?q=${search}`)?.then((response) => {
                setdata(response.data.products);
                // console.log(data)
                setLoading(false);
            })
        }

    }, [search, category])



    return (
        <div >
            <div className='flex'>
                {allCategory.map((item, key) => {
                    return (<div key={key} onClick={() => { setCategory(item) }}>{item}</div>)
                })}
            </div>
            <input placeholder='search items here...' value={search} onChange={handleSearch} />
            {loading ? <Loader /> :
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12">
                    {data?.map((item) => {
                        return (<div key={item.id} >
                            <StoreItem {...item} />
                        </div>
                        )
                    })}
                </div>
            }

        </div>

    )
}

export default Store