import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  MdOutlineStore,
  MdOutlineAnalytics,
  MdOutlineShoppingCart,
  MdMenuBook,
  MdOutlinePeopleAlt,
} from 'react-icons/md'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-black space-y-12 md:space-y-24'>
      <div></div>
      <h1 className='text-3xl font-semibold text-white text-center leading-relaxed sm:leading-loose mt-30'>
        <span className='text-xl text-gray-400'>
          Welcome to
          <br />
        </span>
        Coffee Manager
      </h1>
      <Image
        src='/logo.svg'
        alt='logo'
        width={300}
        height={300}
        className='mx-auto'
      />

      <Link
        href='/overview'
        className='flex items-center text-2xl p-8 rounded-xl border-gray-300 font-semibold text-white '
      >
        <Button className='text-xl p-8 rounded-full' variant='outline'>
          Enter
        </Button>
      </Link>
    </div>
  )
}
