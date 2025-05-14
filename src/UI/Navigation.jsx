const Navigation = () => {

    return (
        /* Navigation Bar */
        <div className='absolute right-0 z-1 rounded-s-md w-full flex flex-row gap-16 py-8 pl-32 bg-gray-500/20 backdrop-blur-lg
                        md:pl-12 md:max-w-[80%]
                        lg:pl-16 lg:max-w-[60%]
                        '>
            <button className='flex flex-row items-start justify-center gap-2 h-full'>
                <h5 className='font-bold'>00</h5>
                <p className='uppercase'>Home</p>
            </button>
            <button className='flex flex-row items-start justify-center gap-2'>
                <h5 className='font-bold'>01</h5>
                <p className='uppercase'>Destination</p>
            </button>
            <button className='flex flex-row items-start justify-center gap-2'>
                <h5 className='font-bold'>02</h5>
                <p className='uppercase'>Crew</p>
            </button>
            <button className='flex flex-row items-start justify-center gap-2'>
                <h5 className='font-bold'>03</h5>
                <p className='uppercase'>Technology</p>
            </button>
        </div>
    )
}

export default Navigation