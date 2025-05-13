import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Space Tourism
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/destination" 
              className={`${isActive('/destination') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Destination
            </Link>
            <Link 
              to="/crew" 
              className={`${isActive('/crew') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Crew
            </Link>
            <Link 
              to="/technology" 
              className={`${isActive('/technology') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 