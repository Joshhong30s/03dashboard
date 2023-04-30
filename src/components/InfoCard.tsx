import React from 'react'

const InfoCard: React.FC = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h3 className='text-xl font-semibold text-gray-800'>Heart Rate</h3>
        <p className='text-lg text-gray-700'>72 BPM</p>
      </div>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h3 className='text-xl font-semibold text-gray-800'>Blood Pressure</h3>
        <p className='text-lg text-gray-700'>120/80 mmHg</p>
      </div>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h3 className='text-xl font-semibold text-gray-800'>Blood Sugar</h3>
        <p className='text-lg text-gray-700'>100 mg/dL</p>
      </div>
    </div>
  )
}

export default InfoCard
