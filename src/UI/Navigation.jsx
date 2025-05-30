import { Link } from "react-router-dom"

// This component renders the navigation bar for the application.
// The navigation is responsive and stays on all pages.
const Navigation = ({ isOpen, onClose }) => {

    return (
        /* Navigation Bar */
        <nav 
            className={`absolute left-0 top-[-3rem] z-[-1] w-full h-screen flex flex-col items-center justify-center bg-gray-500/20 backdrop-blur-lg 
                        transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                        lg:translate-x-0 lg:h-auto lg:flex-row lg:right-0 lg:left-auto lg:top-auto lg:items-start lg:justify-start lg:rounded-s-md lg:gap-20 lg:py-8 lg:pl-32 lg:pr-16 lg:max-w-[65%]
                        `}>
            <Link to="/" onClick={onClose}>
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
            <Link to="/destination" onClick={onClose}>
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
            <Link to="/crew" onClick={onClose}>
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
            <Link to="/technology" onClick={onClose}>
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
        </nav>
    )
}

export default Navigation