import React from 'react'
import Header from '../Components/Header.jsx'

const Home = () => {
    return (
        /* Home Container */
        <div className='relative flex flex-col items-center justify-start w-full h-screen'>
            <Header />
            <img src="../Public\assets\home\background-home-desktop.jpg" alt="home-bg" className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
        </div>
    )
}

export default Home