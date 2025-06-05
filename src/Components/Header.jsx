import React from 'react'
import Navigation from '../UI/Navigation'
import { Menu, X } from 'lucide-react'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleToggleMenu = () => setIsMenuOpen(true);
    const handleCloseMenu = () => setIsMenuOpen(false);

    return (
        <div className='
        relative flex flex-row w-full items-center justify-between gap-8 pl-12 mt-12 z-10
        lg:mt-12 lg:gap-12 lg:justify-start
        '>
            {/* Logo */}
            <img 
            src="/assets/shared/logo.svg"
            alt="logo"
            className='
                w-8 h-8
                lg:w-12 lg:h-12
                '/>
            {/* Divider */}
            <div className='
                hidden
                lg:h-[1px] lg:z-10 lg:bg-gray-700 lg:w-[28%]
                '>
            </div>
            {/* Navigation */}
            <Navigation isOpen={isMenuOpen} onClose={handleCloseMenu}/>

            {/* Toggle Menu Button */}
            <div className="p-4 mr-6 lg:hidden">
                {/* Menu Icon */}
                {!isMenuOpen && (
                    <button onClick={handleToggleMenu}>
                        <Menu className='w-6 h-6 text-white' />
                    </button>
                )}

                {/* Close Menu Icon */}
                {isMenuOpen && (
                    <button onClick={handleCloseMenu}>
                        <X className='w-6 h-6 text-white' />
                    </button>
                )}
            </div>
        </div>

    )
}

export default Header