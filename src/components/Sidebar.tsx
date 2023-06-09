import React from 'react'
import Link from 'next/link'
import {
  MdOutlineStore,
  MdOutlineAnalytics,
  MdOutlineShoppingCart,
  MdMenuBook,
  MdOutlinePeopleAlt,
} from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'

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
      } md:flex flex-col md:items-center space-y-10 p-4 bg-black md:w-64 w-full min-h-screen fixed md:static md:h-auto z-10`}
    >
      <button
        onClick={onToggle}
        className='absolute top-4 left-4 text-white md:hidden'
      >
        <MdClose size={30} />
      </button>
      <div className='space-y-10 flex flex-col items-center'>
        <h2 className='text-3xl font-extrabold text-white text-center'>
          Coffee Manager
        </h2>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={120}
            height={120}
            className='text-center'
          />
        </Link>
      </div>
      <nav className='flex flex-col space-y-6 items-center md:items-start justify-center'>
        <div className={navItemClasses}>
          <MdOutlineStore size={24} className='text-gray-300' />
          <Link
            href='/overview'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            STORE OVERVIEW
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdOutlineAnalytics size={24} className='text-gray-300' />
          <Link
            href='/comparison'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            STORE COMPARISON
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdOutlineShoppingCart size={24} className='text-gray-300' />
          <Link
            href='/product'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            PRODUCT ANALYSIS
          </Link>
        </div>
        <div className={navItemClasses}>
          <MdMenuBook size={24} className='text-gray-300' />
          <Link
            href='/menu'
            className='text-base font-medium text-gray-300 hover:text-white transition-colors hover:scale-110'
          >
            STORE MENU
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
