import React from 'react'
import { Circles, Puff, Triangle } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className=' h-screen md:w-[80%] w-full mx-auto flex justify-center items-center'>

            <Puff
                height="80"
                width="80"
                color="#00B2FF"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}

export default Loader

