import React, { useState } from 'react'

interface DataImportProps {
  onRefresh: () => void
}

interface Sites {
  place: string
  whitecollar: number
  bluecollar: number
  housewives: number
  tourists: number
  elders: number
  students: number
  coffee: number
  bread: number
  desert: number
  pasta: number
  avgprice: number
  avgcount: number
  weekday7am: number
  weekday8am: number
  weekday9am: number
  weekday10am: number
  weekday11am: number
  weekday12pm: number
  weekday1pm: number
  weekday2pm: number
  weekday3pm: number
  weekday4pm: number
  weekday5pm: number
  weekday6pm: number
  weekend7am: number
  weekend8am: number
  weekend9am: number
  weekend10am: number
  weekend11am: number
  weekend12pm: number
  weekend1pm: number
  weekend2pm: number
  weekend3pm: number
  weekend4pm: number
  weekend5pm: number
  weekend6pm: number
}

const DataImport: React.FC<DataImportProps> = ({ onRefresh }) => {
  const [formData, setFormData] = useState<Sites>({
    place: '',
    whitecollar: 0,
    bluecollar: 0,
    housewives: 0,
    tourists: 0,
    elders: 0,
    students: 0,
    coffee: 0,
    bread: 0,
    desert: 0,
    pasta: 0,
    avgprice: 0,
    avgcount: 0,
    weekday7am: 0,
    weekday8am: 0,
    weekday9am: 0,
    weekday10am: 0,
    weekday11am: 0,
    weekday12pm: 0,
    weekday1pm: 0,
    weekday2pm: 0,
    weekday3pm: 0,
    weekday4pm: 0,
    weekday5pm: 0,
    weekday6pm: 0,
    weekend7am: 0,
    weekend8am: 0,
    weekend9am: 0,
    weekend10am: 0,
    weekend11am: 0,
    weekend12pm: 0,
    weekend1pm: 0,
    weekend2pm: 0,
    weekend3pm: 0,
    weekend4pm: 0,
    weekend5pm: 0,
    weekend6pm: 0,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Data imported successfully')
        onRefresh()
      } else {
        throw new Error('Error importing data')
      }
    } catch (error) {
      console.error('Error importing data:', error)
      alert('Error importing data')
    }
  }
  return (
    <div className='overflow-x-auto'>
      <h2>Data Import</h2>
      <form onSubmit={handleSubmit}>
        <table className='table-auto border-collapse w-full'>
          <thead>
            <tr className='flex justify-between'>
              <th className='w-1/12 px-4 py-2'>Place</th>
              <th className='w-1/12 px-4 py-2'>White Collar</th>
              <th className='w-1/12 px-4 py-2'>Blue Collar</th>
              <th className='w-1/12 px-4 py-2'>Housewives</th>
              <th className='w-1/12 px-4 py-2'>Tourists</th>
              <th className='w-1/12 px-4 py-2'>Elders</th>
              <th className='w-1/12 px-4 py-2'>Students</th>
              <th className='w-1/12 px-4 py-2'>Coffee</th>
              <th className='w-1/12 px-4 py-2'>Bread</th>
              <th className='w-1/12 px-4 py-2'>Desert</th>
              <th className='w-1/12 px-4 py-2'>Pasta</th>
              <th className='w-1/12 px-4 py-2'>Avg Price</th>
              <th className='w-1/12 px-4 py-2'>Avg Count</th>
            </tr>
          </thead>

          <tbody>
            <tr className='flex justify-between'>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name='place'
                  value={formData.place}
                  onChange={handleChange}
                  placeholder='Place'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='whitecollar'
                  value={formData.whitecollar}
                  onChange={handleChange}
                  placeholder='White Collar'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='bluecollar'
                  value={formData.bluecollar}
                  onChange={handleChange}
                  placeholder='Blue Collar'
                  required
                />
              </td>

              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='housewives'
                  value={formData.housewives}
                  onChange={handleChange}
                  placeholder='Housewives'
                  required
                />
              </td>
              <td className='w-1/12 order px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='tourists'
                  value={formData.tourists}
                  onChange={handleChange}
                  placeholder='Tourists'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='elders'
                  value={formData.elders}
                  onChange={handleChange}
                  placeholder='Elders'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='students'
                  value={formData.students}
                  onChange={handleChange}
                  placeholder='Students'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='coffee'
                  value={formData.coffee}
                  onChange={handleChange}
                  placeholder='Coffee'
                  required
                />
              </td>
              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='bread'
                  value={formData.bread}
                  onChange={handleChange}
                  placeholder='Bread'
                  required
                />
              </td>

              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='desert'
                  value={formData.desert}
                  onChange={handleChange}
                  placeholder='Desert'
                  required
                />
              </td>

              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='pasta'
                  value={formData.pasta}
                  onChange={handleChange}
                  placeholder='Pasta'
                  required
                />
              </td>

              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='avgprice'
                  value={formData.avgprice}
                  onChange={handleChange}
                  placeholder='Average Price'
                  required
                />
              </td>

              <td className='w-1/12 border px-4 py-2'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='number'
                  name='avgcount'
                  value={formData.avgcount}
                  onChange={handleChange}
                  placeholder='Average Customers per day'
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
        >
          Import Data
        </button>
      </form>
    </div>
  )
}

export default DataImport
