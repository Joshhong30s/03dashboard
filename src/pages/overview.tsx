import { useState, useEffect } from 'react'
import { blue, gray, green, purple, red, yellow } from 'tailwindcss/colors'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import { AreaChart, Area } from 'recharts'

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

export default function Overivew() {
  const [sites, setSites] = useState<Sites[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedSiteIndex, setSelectedSiteIndex] = useState(0)
  const siteName = sites[selectedSiteIndex]?.place || ''
  const [refresh, setRefresh] = useState(0)

  const handleSiteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSiteIndex(Number(event.target.value))
  }

  useEffect(() => {
    fetchSite()
  }, [refresh])

  // Fetch message board data from Google Sheets here

  const fetchSite = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/loading', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        console.log('data', data)

        // Extract the values property from the fetched data
        const values = data.sites ?? []

        // Skip the header row (row with 'Place', 'whitecollar', etc.)
        const rowsWithoutHeader = values.slice(1)

        const sitesData = rowsWithoutHeader.map((row: any[]) => {
          return {
            place: row[0],
            whitecollar: Number(row[1]),
            bluecollar: Number(row[2]),
            housewives: Number(row[3]),
            tourists: Number(row[4]),
            elders: Number(row[5]),
            students: Number(row[6]),
            coffee: Number(row[7]),
            bread: Number(row[8]),
            desert: Number(row[9]),
            pasta: Number(row[10]),
            avgprice: Number(row[11]),
            avgcount: Number(row[12]),
            weekday7am: Number(row[13]),
            weekday8am: Number(row[14]),
            weekday9am: Number(row[15]),
            weekday10am: Number(row[16]),
            weekday11am: Number(row[17]),
            weekday12pm: Number(row[18]),
            weekday1pm: Number(row[19]),
            weekday2pm: Number(row[20]),
            weekday3pm: Number(row[21]),
            weekday4pm: Number(row[22]),
            weekday5pm: Number(row[23]),
            weekday6pm: Number(row[24]),
            weekend7am: Number(row[25]),
            weekend8am: Number(row[26]),
            weekend9am: Number(row[27]),
            weekend10am: Number(row[28]),
            weekend11am: Number(row[29]),
            weekend12pm: Number(row[30]),
            weekend1pm: Number(row[31]),
            weekend2pm: Number(row[32]),
            weekend3pm: Number(row[33]),
            weekend4pm: Number(row[34]),
            weekend5pm: Number(row[35]),
            weekend6pm: Number(row[36]),
          }
        })

        console.log('sitesData', sitesData)
        setSites(sitesData) // Store fetched messages in the state
      } else {
        throw new Error('Error loading data')
      }
    } catch (error) {
      console.error('Error loading data:', error)
      alert('Error loading data')
    } finally {
      setLoading(false)
    }
  }

  const radar = () => {
    if (sites.length > 0) {
      const {
        whitecollar,
        bluecollar,
        housewives,
        tourists,
        elders,
        students,
      } = sites[selectedSiteIndex] // <-- Use the selectedSiteIndex here

      return [
        { id: 'whitecollar', A: whitecollar, fullMark: 5000 },
        { id: 'bluecollar', A: bluecollar, fullMark: 5000 },
        { id: 'housewives', A: housewives, fullMark: 5000 },
        { id: 'tourists', A: tourists, fullMark: 5000 },
        { id: 'elders', A: elders, fullMark: 5000 },
        { id: 'students', A: students, fullMark: 5000 },
      ]
    }
    return []
  }

  const bar = () => {
    if (sites.length > 0) {
      const { coffee, bread, desert, pasta } = sites[selectedSiteIndex]

      return [
        { id: 'coffee', A: coffee, fullMark: 5000 },
        { id: 'bread', A: bread, fullMark: 5000 },
        { id: 'desert', A: desert, fullMark: 5000 },
        { id: 'pasta', A: pasta, fullMark: 5000 },
      ]
    }
    return []
  }

  const InfoCard = () => {
    if (sites.length > 0) {
      const { avgprice, avgcount } = sites[selectedSiteIndex]

      return (
        <div className='space-y-4'>
          <div className='bg-blue-500 border-2 p-4 m-2 rounded-lg shadow-md w-full md:h-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='text-lg  font-bold text-black'>
              Avg. Ticket Size
            </div>
            <p className='text-4xl font-bold text-black'>
              ${avgprice.toFixed(0)}
            </p>
          </div>

          <div className='bg-blue-500  border-2 p-4 m-2 rounded-lg shadow-md w-full md:h-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='text-lg font-bold text-black'>
              Avg. Ticket Count
            </div>
            <p className='text-4xl font-bold text-black'>
              #{avgcount.toFixed(0)}
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  const weekday = () => {
    if (sites.length > 0) {
      const {
        weekday7am,
        weekday8am,
        weekday9am,
        weekday10am,
        weekday11am,
        weekday12pm,
        weekday1pm,
        weekday2pm,
        weekday3pm,
        weekday4pm,
        weekday5pm,
        weekday6pm,
      } = sites[selectedSiteIndex]

      return [
        { id: '7am', A: weekday7am, fullMark: 2000 },
        { id: '8am', A: weekday8am, fullMark: 2000 },
        { id: '9am', A: weekday9am, fullMark: 2000 },
        { id: '10am', A: weekday10am, fullMark: 2000 },
        { id: '11am', A: weekday11am, fullMark: 2000 },
        { id: '12pm', A: weekday12pm, fullMark: 2000 },
        { id: '1pm', A: weekday1pm, fullMark: 2000 },
        { id: '2pm', A: weekday2pm, fullMark: 2000 },
        { id: '3pm', A: weekday3pm, fullMark: 2000 },
        { id: '4pm', A: weekday4pm, fullMark: 2000 },
        { id: '5pm', A: weekday5pm, fullMark: 2000 },
        { id: '6pm', A: weekday6pm, fullMark: 2000 },
      ]
    }
    return []
  }

  const weekend = () => {
    if (sites.length > 0) {
      const {
        weekend7am,
        weekend8am,
        weekend9am,
        weekend10am,
        weekend11am,
        weekend12pm,
        weekend1pm,
        weekend2pm,
        weekend3pm,
        weekend4pm,
        weekend5pm,
        weekend6pm,
      } = sites[selectedSiteIndex]

      return [
        { id: '7am', A: weekend7am, fullMark: 2000 },
        { id: '8am', A: weekend8am, fullMark: 2000 },
        { id: '9am', A: weekend9am, fullMark: 2000 },
        { id: '10am', A: weekend10am, fullMark: 2000 },
        { id: '11am', A: weekend11am, fullMark: 2000 },
        { id: '12pm', A: weekend12pm, fullMark: 2000 },
        { id: '1pm', A: weekend1pm, fullMark: 2000 },
        { id: '2pm', A: weekend2pm, fullMark: 2000 },
        { id: '3pm', A: weekend3pm, fullMark: 2000 },
        { id: '4pm', A: weekend4pm, fullMark: 2000 },
        { id: '5pm', A: weekend5pm, fullMark: 2000 },
        { id: '6pm', A: weekend6pm, fullMark: 2000 },
      ]
    }
    return []
  }

  const CustomLegend = () => {
    return (
      <div className='w-full flex justify-center mt-6'>
        <div className='text-sm font-bold text-center'>
          {sites[selectedSiteIndex]?.place ?? 'Site'}
        </div>
      </div>
    )
  }

  const axisStyle = {
    fontFamily: 'sans-serif',
    fontSize: '12px',
  }

  return (
    <div className='bg-black min-h-screen'>
      <main className='container mx-auto p-8'>
        <div className='text-black bg-gray-100 border-2 mt-4 rounded-md shadow-md flex justify-between items-center'>
          <div className='relative w-full'>
            <select
              id='site-select'
              onChange={handleSiteChange}
              className='appearance-none py-4 px-2 pr-12 w-full h-full bg-gray-100 rounded-lg text-xl text-center font-bold focus:outline-none focus:border-black hover:border-black transition-all'
            >
              {sites.map((site, index) => (
                <option key={index} value={index}>
                  {site.place}
                </option>
              ))}
            </select>

            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black'>
              <svg
                className='w-10 h-10'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M5 8l5 5 5-5H5z' />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className='flex justify-center items-center space-x-4 h-64'>
            <span className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white '></span>
            <span className='text-white'>Loading Data, please wait ...</span>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
            {/* 1st div: radar chart */}
            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Demographics</p>
              <ResponsiveContainer width='100%' height={500}>
                <RadarChart
                  cx='50%'
                  cy='50%'
                  outerRadius='60%'
                  width={500}
                  height={800}
                  data={radar()}
                  margin={{ top: 5, right: 30, bottom: 5, left: 30 }}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey='id' />
                  <PolarRadiusAxis />
                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Radar
                    name={sites[selectedSiteIndex]?.place ?? 'Site'}
                    dataKey='A'
                    stroke={blue[500]}
                    fill={blue[500]}
                    fillOpacity={0.6}
                    className='text-sm'
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            {/* 2nd div: bar chart */}
            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Item Sold</p>
              <ResponsiveContainer width='100%' height={500}>
                <BarChart
                  width={500}
                  height={500}
                  data={bar()}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='id' style={axisStyle} />
                  <YAxis style={axisStyle} />

                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Bar dataKey='A' fill={blue[500]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className='text-black bg-gray-100 border-2  p-4 mt-8 rounded-lg shadow-md text-center flex flex-col'>
              <p className='font-bold mb-6 text-lg'>
                Ticket Count & Ticket Size
              </p>
              <InfoCard />
            </div>
          </div>
        )}
        {/* 4th div: weekday customer line chart */}
        <div className='text-black bg-gray-100 border-2  p-4 mt-8 rounded-lg shadow-md text-center'>
          <p className='font-bold mb-6 text-lg'>Weekday Customer</p>
          <ResponsiveContainer width='100%' height={300}>
            <AreaChart
              width={500}
              height={400}
              data={weekday()}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='id' style={axisStyle} />
              <YAxis style={axisStyle} />
              <Tooltip />
              <Legend
                formatter={(value, entry, index) => {
                  if (value === 'A') {
                    return siteName
                  } else {
                    return value
                  }
                }}
              />
              <Area
                type='monotone'
                dataKey='A' //
                stroke={blue[500]}
                fill={blue[500]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 5th div: weekend customer line chart*/}
        <div className='text-black bg-gray-100 border-2   p-4 mt-8 mb-8 rounded-lg shadow-md  text-center'>
          <p className='font-bold mb-6 text-lg'>Weekend Customer</p>
          <ResponsiveContainer width='100%' height={300}>
            <AreaChart
              width={500}
              height={400}
              data={weekend()}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />

              <XAxis dataKey='id' style={axisStyle} />
              <YAxis style={axisStyle} />
              <Legend
                formatter={(value, entry, index) => {
                  if (value === 'A') {
                    return siteName
                  } else {
                    return value
                  }
                }}
              />
              <Area
                type='monotone'
                dataKey='A' //
                stroke={blue[500]}
                fill={blue[500]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
