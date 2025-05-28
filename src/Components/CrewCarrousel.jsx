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
                className='
                    relative flex flex-col items-center w-full gap-4 px-4
                    lg:items-end lg:justify-between lg:max-w-[72rem] lg:flex-row lg:gap-12 lg:h-full
                    '>
                {/* Crew Information | Left container */}
                <div className="
                relative flex flex-col items-start justify-start w-full h-full
                lg:max-w-[60%] lg:px-24 lg:mb-[6rem] lg:max-h-[75%] lg:justify-between
                ">
                    <h1 className='
                    uppercase text-gray-300 tracking-widest text-2xl ml-8
                    lg:text-3xl lg:ml-0
                    '>
                        <span className='text-gray-500 mr-4'>02</span>Meet your crew
                    </h1>
                    {/* Crew Information | Crew Member text */}
                    <div 
                        className="
                            flex flex-col w-full items-center justify-center text-center mt-20
                            lg:items-start lg:justify-start lg:text-start lg:mt-0
                            ">    
                        <h2 className='uppercase font-[bellefair] text-2xl text-gray-500'>{activeCrewMember.role}</h2>
                        <h3 className='uppercase font-[bellefair] text-5xl text-gray-100 mt-2'>{activeCrewMember.name}</h3>
                        <p 
                        className='
                        text-lg text-gray-400 mt-4 max-w-[72ch] tracking-wider leading-[1.6]
                        lg:mt-8 lg:max-w-[50ch]
                        '>{activeCrewMember.bio}</p>
                        {/* Carrousel visual tracker */}
                        <div 
                        className='
                        flex flex-row gap-4 mt-8
                        lg:mt-24
                        '>
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
                <div 
                className="
                    flex justify-center w-full object-contain mt-16
                    lg:max-w-[50%] lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:w-full lg:items-end lg:justify-center lg:mt-0
                    ">
                    <img src={activeCrewMember.images.png} alt={activeCrewMember.name}
                    className='
                    max-w-[36rem] w-full object-contain object-end
                    lg:object-bottom lg:max-w-full
                    ' />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default CrewCarrousel    