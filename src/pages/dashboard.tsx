import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import InfoCard from '../components/InfoCard'
import Chart from '../components/Chart'
import UserProfile from '../components/UserProfile'

import Header from '../components/Header'
import { Calendar } from '@/components/calendar'

const Dashboard: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    setShowProfile(false)
  }

  const toggleProfile = () => {
    setShowProfile(!showProfile)
    setShowSidebar(false)
  }

  return (
    <div className='flex flex-col md:flex-row h-screen overflow-x-hidden'>
      <Header toggleSidebar={toggleSidebar} toggleProfile={toggleProfile} />
      <Sidebar show={showSidebar} />
      <div className='flex-grow p-4 space-y-4 overflow-y-auto'>
        <h1 className='text-3xl font-semibold text-gray-800 md:hidden'>
          Welcome
        </h1>
        <InfoCard />
        <Chart />
      </div>
      <div
        className={`space-y-4 md:w-64 md:px-4 md:py-2 flex flex-col min-h-screen ${
          showProfile ? 'w-full' : ''
        } bg-gray-200 overflow-y-auto`}
      >
        <UserProfile show={showProfile} />
        <div
          className={`flex-grow w-full ${
            showProfile ? 'hidden' : 'block'
          } md:block`}
        ></div>
        <Calendar className='w-full' />
      </div>
    </div>
  )
}

export default Dashboard
