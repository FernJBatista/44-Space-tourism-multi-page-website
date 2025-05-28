import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        /* Navigation Bar */
        <div className='absolute right-0 top-[-3rem] z-[-1] w-full h-screen flex flex-col items-center justify-center bg-gray-500/20 backdrop-blur-lg 
                        lg:h-auto lg:flex-row lg:right-0 lg:top-auto lg:items-start lg:justify-start lg:rounded-s-md lg:gap-20 lg:py-8 lg:pl-32 lg:pr-16 lg:max-w-[65%]
                        '>
            <Link to="/">
                <button className='
                flex flex-row items-start justify-center gap-2 h-full mb-6
                lg:mb-0
                '>
                    <h5 
                        className='
                            font-bold text-4xl
                            lg:text-lg 
                            '>00</h5>
                    <p 
                        className='
                            uppercase text-4xl tracking-widest text-gray-300
                            lg:text-lg
                            '>Home</p>
                </button>
            </Link>
            <Link to="/destination">
                <button className='
                flex flex-row items-start justify-center gap-2 h-full mb-6
                lg:mb-0
                '>
                    <h5 className='
                            font-bold text-4xl
                            lg:text-lg 
                            '>01</h5>
                    <p className='
                            uppercase text-4xl tracking-widest text-gray-300
                            lg:text-lg
                            '>Destination</p>
                </button>
            </Link>
            <Link to="/crew">
                <button className='
                flex flex-row items-start justify-center gap-2 h-full mb-6
                lg:mb-0
                '>
                    <h5 className='
                            font-bold text-4xl
                            lg:text-lg 
                            '>02</h5>
                    <p className='
                            uppercase text-4xl tracking-widest text-gray-300
                            lg:text-lg
                            '>Crew</p>
                </button>
            </Link>
            <Link to="/technology">
                <button className='
                flex flex-row items-start justify-center gap-2 h-full mb-6
                lg:mb-0
                '>
                    <h5 className='
                            font-bold text-4xl
                            lg:text-lg 
                            '>03</h5>
                    <p className='
                            uppercase text-4xl tracking-widest text-gray-300
                            lg:text-lg
                            '>Technology</p>
                </button>
            </Link>
        </div>
    )
}

export default Navigation