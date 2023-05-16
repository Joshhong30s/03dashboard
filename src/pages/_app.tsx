import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'
import { useState } from 'react'
import { MdMenu, MdOutlineAccountBox } from 'react-icons/md'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showUserProfile, setShowUserProfile] = useState(false)
  const router = useRouter()

  return (
    <div className='flex min-h-screen'>
      {router.pathname !== '/' && (
        <Sidebar
          show={showSidebar}
          onToggle={() => setShowSidebar(!showSidebar)}
        />
      )}
      <div className='flex flex-grow'>
        <div className='flex flex-col w-full'>
          {router.pathname !== '/' && (
            <header className='flex justify-between items-center p-4 md:hidden bg-black border-b border-gray-100'>
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className='md:hidden text-gray-700'
              >
                <MdMenu size={30} className='text-white' />
              </button>
              <button
                onClick={() => setShowUserProfile(!showUserProfile)}
                className='md:hidden text-gray-700'
              >
                <MdOutlineAccountBox size={30} className='text-white' />
              </button>
            </header>
          )}
          <main className='flex-grow'>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
      {router.pathname !== '/' && (
        <UserProfile
          show={showUserProfile}
          onToggle={() => setShowUserProfile(!showUserProfile)}
        />
      )}
    </div>
  )
}

export default MyApp
