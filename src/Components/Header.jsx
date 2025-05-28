import React from 'react'
import Navigation from '../UI/Navigation'
import { Menu, X } from 'lucide-react'


const Header = () => {
    return (
        <div className='
        relative flex flex-row w-full items-center justify-between gap-8 pl-12 mt-12 z-10
        lg:mt-12 lg:gap-12 lg:justify-start
        '>
            {/* Logo */}
            <img src="../public/assets/shared/logo.svg" alt="logo" className='w-12 h-12' />
            {/* Divider */}
            <div className='
                hidden
                lg:h-[1px] lg:z-10 lg:bg-gray-700 lg:w-[28%]
                '>
            </div>
            <Navigation />
            <div className="p-4 mr-6">
                <Menu size={32}/>
                <X />
            </div>
        </div>

    )
}

export default Header