import React from 'react'
import CrewCarrousel from '../Components/CrewCarrousel'

const Crew = () => {
    return (
        <div className='flex flex-col items-center justify-start w-full h-full'>
            <div className='flex flex-col items-center justify-start w-full h-full'>
            {/* Destination Background Image */}
            <img src="../Public\assets\crew\background-crew-desktop.jpg" alt="destination-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {/* Destination Content */}
                <main className='flex flex-row items-start justify-center w-full h-full'>
                    <CrewCarrousel />
                </main>
            </div>
        </div>
    )
}

export default Crew