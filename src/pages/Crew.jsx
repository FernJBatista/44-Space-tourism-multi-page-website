import React from 'react'
import CrewCarrousel from '../Components/CrewCarrousel'

const Crew = () => {
    return (
        <div
        className='
            flex flex-col items-center justify-start w-full h-full mt-24
            lg:mt-0'>
            <div className='flex flex-col items-center justify-start w-full h-full'>
            {/* Destination Background Image */}
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/crew/background-crew-desktop.jpg"
                />
                <source
                    media="(min-width: 640px)"
                    srcSet="/assets/crew/background-crew-tablet.jpg"
                />
                <source
                    media="(min-width: 480px)"
                    srcSet="/assets/crew/background-crew-mobile.jpg"
                />
                <img
                    src="/assets/crew/background-crew-mobile.jpg" 
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                />
            </picture>
            {/* Destination Content */}
                <main className='flex flex-row items-start justify-center w-full h-full'>
                    <CrewCarrousel />
                </main>
            </div>
        </div>
    )
}

export default Crew