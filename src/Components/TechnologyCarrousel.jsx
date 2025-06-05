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
            fetch('/data.json')
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
        <div 
        className='
        flex flex-col h-full gap-6 mt-20 items-center justify-center text-center
        lg:flex-row lg:items-center lg:mt-4 lg:gap-16 lg:justify-start lg:text-start
        '>
            {/* Carrousel content */}
            <div 
                className="
                flex flex-row gap-6 items-center
                lg:flex-col
                "> 
                {/* Technology Selector */}
                {data.technology.map((_,index) => (
                    <button
                    key={index}
                    onClick={() => setTechnology(index)}
                    className={`
                    w-12 h-12 rounded-full border-2 text-2xl font-bold font-[bellefair] 
                    lg:w-16 lg:h-16
                    ${technology === index ? 'bg-white text-black' : 'bg-transparent text-gray-400 border-gray-700'}
                    transition duration-300 ease-in-out
                    `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {/* Technology Text */}
            <div 
                className='
                    flex flex-col gap-6 mt-4
                    lg:mt-16 lg:gap-4
                '>
                <h1 className='uppercase text-lg text-gray-500 tracking-widest font-[bellefair]'>The Technology...</h1>
                <h2 className='uppercase font-[bellefair] text-5xl'>{activeTechnology.name}</h2> 
                <p className='text-lg text-gray-400 tracking-wider max-w-[50ch]'>{activeTechnology.description}</p>
            </div>
            {/* Technology Image */}
            <div 
                className="
                    order-first max w-full min-h-[35%] mb-4
                    lg:justify-self-end lg:w-auto lg:mb-0
                    ">
                <picture>
                    <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/home/background-home-desktop.jpg"
                />
                <source
                    media="(min-width: 640px)"
                    srcSet="/assets/home/background-home-tablet.jpg"
                />
                <source
                    media="(min-width: 480px)"
                    srcSet="/assets/home/background-home-mobile.jpg"
                />
                <img
                    src={activeTechnology.images.landscape} 
                    alt="background"
                    className='h-full object-cover object-center rounded-lg'
                />
                </picture>
            </div>
        </div>
    )
}

export default TechnologyCarrousel