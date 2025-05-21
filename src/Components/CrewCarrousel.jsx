import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const CrewCarrousel = () => {

    // Track selected index for each crew object
    const [activeCrew, setActiveCrew] = useState(0);
    const [data, setData] = useState(null)

    // Fetch data
    useEffect(() => {
        fetch('../Public/data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log('Error fetching data:', error));
    }, []);

    // Crew carrousel updater
    useEffect(() => {
        // Don't do anything until data arrives
        if (!data) return;

        // Start real interval and use the functional updater
        // to always have the last activeCrew value.
        const intervalID = setInterval(() => {
            setActiveCrew(current => (current + 1) % data.crew.length)
        }, 8000);

        // Cleanup on unmount or whenever data changes
        return () => clearInterval(intervalID);
    }, [data]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const activeCrewMember = data.crew[activeCrew]

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={activeCrew}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                className='relative flex flex-row items-end justify-between w-full h-full gap-12 px-4 lg:max-w-[72rem]'>
                {/* Crew Information | Left container */}
                <div className="
                relative flex flex-col items-start justify-between w-full h-full
                lg:max-w-[60%] lg:px-24 lg:mb-[6rem] lg:max-h-[75%]
                ">
                    <h1 className='
                    uppercase text-gray-300 tracking-widest
                    md:text-2xl
                    lg:text-3xl
                    '>
                        <span className='text-gray-500 mr-4'>02</span>Meet your crew
                    </h1>
                    {/* Crew Information | Crew Member text */}
                    <div className="
                    flex flex-col w-full
                    ">    
                        <h2 className='uppercase text-3xl text-gray-500'>{activeCrewMember.role}</h2>
                        <h3 className='uppercase text-6xl text-gray-100 mt-2'>{activeCrewMember.name}</h3>
                        <p className='text-lg text-gray-400 mt-8 max-w-[50ch] tracking-wider leading-[1.6]'>{activeCrewMember.bio}</p>
                        {/* Carrousel visual tracker */}
                        <div className='flex flex-row gap-4 mt-24'>
                            {data.crew.map((member, index) => (
                                <div
                                    key={member.name}
                                    className={`w-3 h-3 rounded-full ${index === activeCrew ? 'bg-gray-200' : 'bg-gray-500'}`}>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Crew Image | Right container */}
                <div className="absolute bottom-0 right-0 h-full max-w-[50%] flex items-end justify-end">
                    <img src={activeCrewMember.images.png} alt={activeCrewMember.name}
                    className='
                    w-full h-full object-contain object-bottom
                    ' />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default CrewCarrousel    