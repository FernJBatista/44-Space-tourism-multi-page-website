import React from 'react'
import Navigation from '../UI/Navigation'

const Header = () => {
    return (
        <div className='
        relative flex flex-row w-full items-center justify-start gap-12 pl-12 mt-12
        md:gap-8
        '>
            {/* Logo */}
            <img src="../public/assets/shared/logo.svg" alt="logo" className='w-12 h-12' />
            {/* Divider */}
            <div className='
                h-[1px] z-10 bg-gray-700
                md:w-[10%]
                lg:w-[28%]
                '>
            </div>
            <Navigation />
        </div>

    )
}

export default Header