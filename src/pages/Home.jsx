import React from 'react'
import Header from '../Components/Header.jsx'

const Home = () => {
    return (
        /* Home Container */
        <div className='relative flex flex-col items-center justify-start w-full h-screen'>
            <Header />
            {/* Home Background Image */}
            <img src="../Public\assets\home\background-home-desktop.jpg" alt="home-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {/* Home Content */}
            <main className='flex flex-row items-end justify-center w-full h-full'>
                <section className="
                flex flex-row items-center justify-between w-full
                lg:max-w-[72rem] lg:pb-32 lg:px-24
                ">
                    {/* Text Layout */} 
                    <div className="
                    flex flex-col gap-4 w-full
                    md:max-w-100%
                    lg:max-w-[28rem]
                    ">
                        <h1 className='uppercase text-2xl tracking-wider'>So, you want to travel to</h1>
                        <h2 className='uppercase font-regular tracking-widest text-9xl'>Space</h2>
                        <p className='text-base text-gray-400 mt-5'>
                            Let's face it; you want to go to space, you might as well
                            genuinely go to outer space and not hover kind of on the
                            edge of it. Well sit back, and relax because we'll give you
                            a truly out of this world experience!
                        </p>
                    </div>
                    {/* Circled "Explore" Button */}
                    <div className='
                    relative aspect-square w-full bg-gray-100/90 backdrop-blur-md flex items-center justify-center rounded-full
                    transition-background-color duration-300 ease-in-out
                    hover:bg-white hover:transition-background-color hover:duration-300 hover:ease-in-out
                    lg:max-w-56
                    '>
                        <button className='absolute top-0 left-0 text-black uppercase text-2xl font-regular tracking-widest h-full w-full'>Explore</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home