import React from 'react'

interface HeaderProps {
  toggleSidebar: () => void
  toggleProfile: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, toggleProfile }) => {
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-white shadow-md md:hidden'>
      <button onClick={toggleSidebar} className='focus:outline-none'>
        <i className='fas fa-bars text-xl text-gray-800 mr-2'>Sidebar</i>
      </button>
      <h1 className='text-2xl font-semibold text-gray-800 w-full'>
        Health Dashboard
      </h1>
      <button onClick={toggleProfile} className='focus:outline-none'>
        <i className='fas fa-user-circle text-xl text-gray-800 mr-2'>Profile</i>
      </button>
    </div>
  )
}

export default Header
