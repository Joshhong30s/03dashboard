import Image from 'next/image'
import React from 'react'
import { Calendar } from '@/components/calendar'
import { Button } from '@/components/button'

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
      <div className='flex flex-col items-center md:w-full '>
        <Image
          src='/pp1.png'
          alt='User Profile'
          className='rounded-full w-24 h-24 '
          width={96}
          height={96}
        />
        <p className='text-xl font-semibold text-white mt-2'>Josh Hong</p>
        <p className='text-lg text-gray-300 mt-2'>Regional Manager</p>
        <Button variant='outline' className='text-center text-white mt-6'>
          Sign Out
        </Button>
      </div>

      <hr className='w-full my-4 border-t-2 border-gray-500'></hr>

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
