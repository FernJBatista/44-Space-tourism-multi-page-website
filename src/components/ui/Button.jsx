import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors'
  
  const variants = {
    primary: 'bg-white text-gray-900 hover:bg-gray-200',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 