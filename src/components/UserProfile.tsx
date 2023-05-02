import Image from 'next/image'
import React from 'react'

interface UserProfileProps {
  show: boolean
  onToggle: () => void
}

const UserProfile: React.FC<UserProfileProps> = ({ show, onToggle }) => {
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } md:flex flex-col items-start space-y-10 p-4 bg-gray-200 md:w-64 w-full min-h-screen fixed md:static md:h-auto z-10`}
    >
      <button
        onClick={onToggle}
        className='absolute top-4 right-4 text-gray-700 md:hidden'
      >
        Close
      </button>
      <Image
        src='/pp1.png'
        alt='User Profile'
        className='rounded-full w-24 h-24'
        width={50}
        height={50}
      />
      <p className='text-xl font-semibold text-gray-800'>John Doe</p>
      <p className='text-lg text-gray-700'>Height: 180cm</p>
      <p className='text-lg text-gray-700'>Weight: 75kg</p>
      <button className='text-lg text-gray-700 hover:text-gray-900'>
        Sign Out
      </button>
    </div>
  )
}

export default UserProfile
