import React from 'react'
import TechnologyCarrousel from '../Components/TechnologyCarrousel'

const Technology = () => {
    return (
        <section className='flex flex-row w-full h-full gap-12 pl-12 mt-12 max-w-[72rem]'>
            {/* Technology Container */}
            <img src="../Public\assets\technology\background-technology-desktop.jpg" alt="technology-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {/* Title */}
            <div className="uppercase flex flex-row gap-4 text-3xl text-gray-200 tracking-widest mt-12">
                <span className='text-3xl text-gray-500 tracking-widest'>03</span>Space Launch 101 
            </div>
            <main>
                <TechnologyCarrousel />
            </main>
        </section>
    )
}

export default Technology