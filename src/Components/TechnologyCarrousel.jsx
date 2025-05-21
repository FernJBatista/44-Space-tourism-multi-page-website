import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const TechnologyCarrousel = () => {

    // Track selected index for each crew object
        const [technology, setTechnology] = useState(0);
        const [data, setData] = useState(null)
    
        // Fetch data
        useEffect(() => {
            fetch('../Public/data.json')
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.log('Error fetching data:', error));
        }, []);
        if (!data) {
            return <div>Loading...</div>;
        }

        console.log(data.technology)
    
        const activeTechnology = data.technology[technology]

    return (
        // Carrousel Container
        <div className='flex flex-row h-full items-center gap-16 mt-4'>
            {/* Carrousel content */}
            <div className="flex flex-col gap-6 items-center"> 
                {/* Technology Selector */}
                {data.technology.map((_,index) => (
                    <button
                    key={index}
                    onClick={() => setTechnology(index)}
                    className={`
                    w-16 h-16 rounded-full border-2 text-2xl font-bold font-bellefair 
                    ${technology === index ? 'bg-white text-black' : 'bg-transparent text-gray-400 border-gray-700'}
                    transition duration-300 ease-in-out
                    `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {/* Technology Text */}
            <div>
                <div className='flex flex-col gap-4 mr-16'>
                    <h1 className='uppercase text-lg text-gray-500 tracking-widest'>The Technology...</h1>
                    <h2 className='uppercase font-bellefair text-5xl'>{activeTechnology.name}</h2> 
                    <p className='text-lg text-gray-400 tracking-wider max-w-[50ch]'>{activeTechnology.description}</p>
                </div>
            </div>
            {/* Technology Image */}
            <div className="justify-self-end">
                <img src={activeTechnology.images.portrait} alt={activeTechnology.name} />
            </div>
        </div>
    )
}

export default TechnologyCarrousel