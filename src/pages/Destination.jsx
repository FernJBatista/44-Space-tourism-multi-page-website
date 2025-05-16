import React from 'react'

const Destination = () => {
    return (
        <div>
            {/* Destination Container */}
            <div className='flex flex-col items-center justify-start w-full h-screen'>
            {/* Destination Background Image */}
            <img src="../Public\assets\destination\background-destination-desktop.jpg" alt="destination-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {/* Home Content */}
            <main className='flex flex-row items-end justify-center w-full h-full'>
                <section className="
                flex flex-row items-center justify-between w-full
                lg:max-w-[72rem] lg:pb-64 lg:px-24
                ">
                    {/* Pick Destination Container */} 
                    <div className="
                    flex flex-col gap-4 w-full
                    md:max-w-100%
                    lg:max-w-[50%]
                    ">
                        {/* Pick content here */}
                    </div>
                    {/* Planets Text Container */}
                    <div>
                        Text goes here
                    </div>
                </section>
            </main>
        </div>
        </div>
    )
}

export default Destination