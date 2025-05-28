import React from 'react'

const Home = () => {
    return (
        /* Home Container */
        <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Home Background Image */}
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
                    src="/assets/home/background-home-mobile.jpg" 
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                />
            </picture>


            {/* Home Content */}
            <main className='
            relative flex flex-row justify-center w-full h-full items-center px-6 z-[1]
            lg:items-end
            '>
                <section className="
                flex flex-col items-center justify-between w-full
                lg:max-w-[90rem] lg:pb-40 lg:px-24 lg:flex-row
                ">
                    {/* Text Layout */} 
                    <div className='
                    flex flex-col w-full max-w-[28rem] text-center gap-4 
                    lg:text-start lg:gap-4
                    '>
                        <h1 className='uppercase text-2xl  text-gray-400 tracking-widest'>So, you want to travel to</h1>
                        <h2 className='uppercase font-regular font-[bellefair] tracking-wider text-9xl'>Space</h2>
                        <p className='
                        text-lg text-gray-400 tracking-wider mt-1
                        lg:max-w-[50ch] lg:mt-5
                        '> 
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
                    hover:bg-white hover:transition-background-color hover:duration-300 hover:ease-in-out max-w-56 mt-24
                    min-lg:max-w-72
                    '>
                        <button className='
                        absolute top-0 left-0 text-gray-700 uppercase text-3xl font-bold font-[bellefair] tracking-wide h-full w-full
                        '>Explore</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home