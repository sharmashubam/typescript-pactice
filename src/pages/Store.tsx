import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { FC, useContext, useEffect, useState } from 'react'
import StoreItem from '../components/StoreItem'
import Loader from '../components/Loader'
import { apiContextType, apiData, Context } from '../context/Context'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Store: FC = () => {
    const [data, setdata] = useState<apiData[]>([])
    const [search, setSearch] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true);
    // categories
    const [allCategory, setAllCategory] = useState<string[]>([]);
    const [category, setCategory] = useState<string>("");

    const { setDetail, detail } = useContext(Context) as apiContextType
    //interfaces ---->  note put them in exteranl component //ok 


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

    // console.log(detail)

    return (
        <div >
            <div className='xl:flex gap-3 w-full items-center justify-center font-normal border-b-4 border-t text-xl grid grid-cols-4 md:grid-cols-8 py-4 xl:px-0 '>
                {allCategory.map((item, key) => {
                    return (<div className=' p-1 cursor-pointer rounded hover:text-teal-500' key={key} onClick={() => { setCategory(item) }}>{item}</div>)
                })}
            </div>
            <div className='border md:w-[450px] w-full my-2 mb-3 bg-slate-300 flex justify-start p-1 gap-2 items-center rounded-md shadow-xl '>
                <AiOutlineSearch size={25} />
                <input className='outline-none py-2 bg-slate-300 text-lg w-full' placeholder='search items here...' value={search} onChange={handleSearch} />
            </div>
            {loading ? <Loader /> :
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12 items-center justify-center ">
                    {data?.map((item) => {
                        return (<Link to='/product' key={item.id} onClick={() => { setDetail(item) }} className="text-decoration-none text-black" >
                            <StoreItem  {...item} />
                        </Link>
                        )
                    })}
                </div>
            }

        </div>

    )
}

export default Store