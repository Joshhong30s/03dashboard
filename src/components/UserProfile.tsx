import Image from 'next/image'
import React from 'react'
import { Calendar } from '@/components/calendar'

interface UserProfileProps {
  show: boolean
  onToggle: () => void
}
const UserProfile: React.FC<UserProfileProps> = ({ show, onToggle }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } md:flex flex-col items-start space-y-10 p-2 bg-black md:w-80 w-full min-h-screen fixed md:static md:h-auto z-10`}
    >
      <button
        onClick={onToggle}
        className='absolute top-4 right-4 text-white md:hidden'
      >
        Close{' '}
      </button>
      <div className='flex flex-col items-center md:w-full space-y-2'>
        <Image
          src='/pp1.png'
          alt='User Profile'
          className='rounded-full w-24 h-24 '
          width={96}
          height={96}
        />
        <p className='text-xl font-semibold text-white'>Josh Hong</p>
        <p className='text-lg text-gray-300'>Regional Manager</p>
      </div>
      <div className='flex flex-col items-center w-full space-y-4 mt-4'>
        <button className='text-lg text-black hover:text-2xl hover:font-bold w-full text-center p-4 bg-gray-300'>
          Sign Out
        </button>
        <hr className='w-full my-4 border-t-2 border-gray-500'></hr>
      </div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border w-full border-gray-600 text-white'
      />
    </div>
  )
}

export default UserProfile
