import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        /* Navigation Bar */
        <div className='absolute right-0 z-1 rounded-s-md w-full flex flex-row gap-20 py-8 pl-32 bg-gray-500/20 backdrop-blur-lg
                        md:pl-12 md:max-w-[80%]
                        lg:pl-16 lg:max-w-[65%]
                        '>
            <Link to="/">
                <button className='flex flex-row items-start justify-center gap-2 h-full'>
                    <h5 className='font-bold text-lg'>00</h5>
                    <p className='uppercase text-lg tracking-widest text-gray-300'>Home</p>
                </button>
            </Link>
            <Link to="/destination">
                <button className='flex flex-row items-start justify-center gap-2'>
                    <h5 className='font-bold text-lg'>01</h5>
                    <p className='uppercase text-lg tracking-widest text-gray-300'>Destination</p>
                </button>
            </Link>
            <Link to="/crew">
                <button className='flex flex-row items-start justify-center gap-2'>
                    <h5 className='font-bold text-lg'>02</h5>
                    <p className='uppercase text-lg tracking-widest text-gray-300'>Crew</p>
                </button>
            </Link>
            <Link to="/technology">
                <button className='flex flex-row items-start justify-center gap-2'>
                    <h5 className='font-bold text-lg'>03</h5>
                    <p className='uppercase text-lg tracking-widest text-gray-300'>Technology</p>
                </button>
            </Link>
        </div>
    )
}

export default Navigation