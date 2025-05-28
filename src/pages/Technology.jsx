import React from 'react'
import TechnologyCarrousel from '../Components/TechnologyCarrousel'

const Technology = () => {
    return (
        <section 
        className='
            flex flex-col w-full h-full px-6 mt-12
            lg:max-w-[90rem] lg:pl-12
            '>
            {/* Technology Container */}
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/technology/background-technology-desktop.jpg"
                />
                <source
                    media="(min-width: 640px)"
                    srcSet="/assets/technology/background-technology-tablet.jpg"
                />
                <source
                    media="(min-width: 480px)"
                    srcSet="/assets/technology/background-technology-mobile.jpg"
                />
                <img
                    src="/assets/technology/background-technology-mobile.jpg" 
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                />
            </picture>
            {/* Title */}
            <div className="uppercase flex flex-row gap-4 text-3xl text-gray-200 tracking-widest mt-12 mb-6 z-[1]">
                <span className='text-gray-500 tracking-widest'>03</span>Space Launch 101 
            </div>
            <main className='z-[1] flex flex-col items-center justify-start'>
                <TechnologyCarrousel />
            </main>
        </section>
    )
}

export default Technology