import React from 'react'
import Link from 'next/link'
import {
  MdOutlineStore,
  MdOutlineAnalytics,
  MdOutlineShoppingCart,
  MdMenuBook,
  MdOutlinePeopleAlt,
} from 'react-icons/md'

import { GiCoffeeCup } from 'react-icons/gi'

interface SidebarProps {
  show: boolean
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ show, onToggle }) => {
  const navItemClasses =
    'flex gap-4 items-center px-2 py-2 rounded-md bg-transparent hover:bg-gray-800 hover:p-4 hover:text-white transition-colors duration-300'

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } md:flex flex-col items-start space-y-10 p-4 bg-black md:w-64 w-full min-h-screen fixed md:static md:h-auto z-10`}
    >
      <button
        onClick={onToggle}
        className='absolute top-4 left-4 text-white md:hidden'
      >
        Close
      </button>
      <div className='space-y-10 flex flex-col items-center'>
        <GiCoffeeCup size={80} className='text-white text-center' />
        <h2 className='text-xl font-semibold text-white text-center'>
          Customer Analysis Dashboard
        </h2>
      </div>
      <nav className='flex flex-col space-y-6 items-center justify-center'>
        <div className={navItemClasses}>
          <MdOutlineStore size={24} className='text-gray-300' />
          <Link
            href='/'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            Store Overview
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdOutlineAnalytics size={24} className='text-gray-300' />
          <Link
            href='/comparison'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            Store Comparison
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdOutlineShoppingCart size={24} className='text-gray-300' />
          <Link
            href='/product'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            Product Analysis
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdMenuBook size={24} className='text-gray-300' />
          <Link
            href='/menu'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            Menu Planning
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdOutlinePeopleAlt size={24} className='text-gray-300' />
          <Link
            href='/staff'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            Staff Planning
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
