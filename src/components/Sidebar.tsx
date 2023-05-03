import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  show: boolean
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ show, onToggle }) => {
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } md:flex flex-col items-start space-y-10 p-4 bg-gray-200 md:w-64 w-full min-h-screen fixed md:static md:h-auto z-10`}
    >
      <button
        onClick={onToggle}
        className='absolute top-4 left-4 text-gray-700 md:hidden'
      >
        Close
      </button>
      <h2 className='text-2xl font-semibold text-gray-800'>
        Coffee Chain Customer Analysis Dashboard
      </h2>
      <nav className='flex flex-col space-y-2'>
        <Link href='/overview' className='text-lg font-medium text-gray-700'>
          Store Overview
        </Link>
        <Link href='/comparison' className='text-lg font-medium text-gray-700'>
          Store Comparison
        </Link>
        <Link href='/evaluation' className='text-lg font-medium text-gray-700'>
          Store Evaluation
        </Link>
        <Link href='/dataimport' className='text-lg font-medium text-gray-700'>
          Store DataImport
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
