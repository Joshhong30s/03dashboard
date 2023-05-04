import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showUserProfile, setShowUserProfile] = useState(false)

  return (
    <div className='flex min-h-screen'>
      <Sidebar
        show={showSidebar}
        onToggle={() => setShowSidebar(!showSidebar)}
      />
      <div className='flex flex-grow'>
        <div className='flex flex-col w-full'>
          <header className='flex justify-between items-center p-10 md:hidden bg-gray-300'>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className='md:hidden text-gray-700'
            >
              Menu
            </button>
            <button
              onClick={() => setShowUserProfile(!showUserProfile)}
              className='md:hidden text-gray-700'
            >
              Profile
            </button>
          </header>
          <main className='flex-grow'>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
      <UserProfile
        show={showUserProfile}
        onToggle={() => setShowUserProfile(!showUserProfile)}
      />
    </div>
  )
}

export default MyApp
