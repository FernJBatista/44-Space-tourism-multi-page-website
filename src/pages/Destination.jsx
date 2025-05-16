import React from 'react'
import Planets from '../Components/Planets'

const Destination = () => {
    return (
        <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Destination Container */}
            <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Destination Background Image */}
            <img src="../Public\assets\destination\background-destination-desktop.jpg" alt="destination-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {/* Home Content */}
                <main className='flex flex-row items-end justify-center w-full h-full'>
                    <Planets />
                </main>
            </div>
        </div>
    )
}

export default Destination