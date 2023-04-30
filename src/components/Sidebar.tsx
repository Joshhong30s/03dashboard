import React from 'react'

interface SidebarProps {
  show: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  return (
    <div
      className={`${
        show ? 'block md:flex' : 'hidden md:flex'
      } flex flex-col items-start space-y-4 p-4 bg-gray-200 md:w-64 w-full min-h-screen`}
    >
      <h2 className='text-2xl font-semibold text-gray-800'>Health Dashboard</h2>
      <nav className='flex flex-col space-y-2'>
        <a href='#' className='text-lg font-medium text-gray-700'>
          Dashboard Overview
        </a>
        <a href='#' className='text-lg font-medium text-gray-700'>
          Analytics
        </a>
        <a href='#' className='text-lg font-medium text-gray-700'>
          Calendar
        </a>
        <a href='#' className='text-lg font-medium text-gray-700'>
          Profile
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
