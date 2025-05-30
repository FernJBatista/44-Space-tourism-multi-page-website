import React from 'react'
import Planets from '../Components/Planets'

const Destination = () => {
    return (
        <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Destination Container */}
            <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Destination Background Image */}
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/destination/background-destination-desktop.jpg"
                />
                <source
                    media="(min-width: 640px)"
                    srcSet="/assets/destination/background-destination-tablet.jpg"
                />
                <source
                    media="(min-width: 480px)"
                    srcSet="/assets/destination/background-destination-mobile.jpg"
                />
                <img
                    src="/assets/destination/background-destination-mobile.jpg" 
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                />
            </picture>
            {/* Destination Content */}
                <main className='flex flex-row items-end justify-center w-full h-full z-[1]'>
                    <Planets />
                </main>
            </div>
        </div>
    )
}

export default Destination