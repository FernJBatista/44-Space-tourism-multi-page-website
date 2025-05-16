import React from 'react'
import {useEffect, useState } from 'react'

const Planets = () => {

    const [data, setData] = useState(null);
    /* Fetch data from data.json */
    useEffect (() => {
        fetch('../Public/data.json')
        .then(response => response.json ())
        .then(data => setData(data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='flex flex-row items-center justify-center w-full h-full'>
            {/* Section Container */}
            <section className="
                flex flex-row items-center justify-between w-full gap-56
                lg:max-w-[80rem] lg:px-24
                ">
                    {/* Pick Destination Container */} 
                    <div className="
                    flex flex-col gap-4 w-full
                    md:max-w-100%
                    lg:w-[50%] lg:gap-24
                    ">
                        <h1 className='uppercase text-2xl text-gray-300 tracking-wider'>
                            <span className=' text-gray-600'>01</span> Pick your destination
                        </h1>
                        {/* Planet Image */}
                        <img src={data.destinations[0].images.png} alt="" className='w-full w-112 h-full object-cover' />
                    </div>
                    {/* Planets Text Container */}
                    <div className='
                    flex flex-col gap-4 w-full 
                    lg:w-[50%] lg:gap-8
                    '>
                        {/* Planet selector */}
                        <div className="flex flex-row w-full">
                            <ul className='flex flex-row gap-12'>
                                {data.destinations.map((planet, index) => (
                                    <li key={index} className='
                                    uppercase text-gray-400 text-md py-4 border-b-[2px] border-transparent cursor-pointer
                                    hover:text-gray-100 hover:border-b-[2px] hover:border-white
                                    active:text-gray-100 active:border-b-[2px] active:border-white
                                    '>
                                        {data.destinations[index].name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Planet Info Container */}
                        <div className="flex flex-col w-full">
                            <h2 className='uppercase font-regular tracking-widest text-9xl'>{data.destinations[0].name}</h2>
                            <p className='text-gray-400 text-base mt-8'>{data.destinations[0].description}</p>
                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gray-700 mt-16"></div>
                        </div>
                        {/* Planet Details */}
                        <div className="flex flex-row">
                            {/* Avg Distance */}
                            <div className="flex flex-col gap-2">
                                <h3 className='uppercase text-gray-500 text-sm'>Avg. Distance</h3>
                                <p className='uppercase text-gray-400 text-3xl'>{data.destinations[0].distance}</p>
                            </div>
                            {/* EST Travel time */}
                            <div className="flex flex-col ml-12 gap-2">
                                <h3 className="uppercase text-gray-500 text-sm">Est. Travel time</h3>
                                <p className="uppercase text-gray-400 text-3xl">{data.destinations[0].travel}</p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Planets