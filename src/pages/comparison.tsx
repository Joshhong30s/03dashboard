import { useState, useEffect } from 'react'
import React, { ChangeEvent } from 'react'
import { AreaChart, Area } from 'recharts'
import {
  blue,
  gray,
  green,
  purple,
  red,
  yellow,
  orange,
} from 'tailwindcss/colors'
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
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { LineChart, Line } from 'recharts'

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
  const [selectedSiteA, setSelectedSiteA] = useState(0)
  const [selectedSiteB, setSelectedSiteB] = useState(0)
  const siteA = sites[selectedSiteA]
  const siteB = sites[selectedSiteB]
  const siteAName = sites[selectedSiteA]?.place || ''
  const siteBName = sites[selectedSiteB]?.place || ''
  const [refresh, setRefresh] = useState(0)

  const handleSiteAChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSiteA(Number(event.target.value))
  }

  const handleSiteBChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSiteB(Number(event.target.value))
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
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      return [
        {
          id: 'whitecollar',
          A: siteA.whitecollar,
          B: siteB.whitecollar,
          fullMark: 5000,
        },
        {
          id: 'bluecollar',
          A: siteA.bluecollar,
          B: siteB.bluecollar,
          fullMark: 5000,
        },
        {
          id: 'housewives',
          A: siteA.housewives,
          B: siteB.housewives,
          fullMark: 5000,
        },
        {
          id: 'tourists',
          A: siteA.tourists,
          B: siteB.tourists,
          fullMark: 5000,
        },
        {
          id: 'elders',
          A: siteA.elders,
          B: siteB.elders,
          fullMark: 5000,
        },
        {
          id: 'students',
          A: siteA.students,
          B: siteB.students,
          fullMark: 5000,
        },
      ]
    }
  }

  const bar = () => {
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      // If siteA or siteB are not selected, set their values to 0

      return [
        {
          id: 'coffee',
          A: siteA.coffee,
          B: siteB.coffee,
          amt: 5000,
        },
        {
          id: 'bread',
          A: siteA.bread,
          B: siteB.bread,
          amt: 5000,
        },
        {
          id: 'desert',
          A: siteA.desert,
          B: siteB.desert,
          amt: 5000,
        },
        {
          id: 'pasta',
          A: siteA.pasta,
          B: siteB.pasta,
          amt: 5000,
        },
      ]
    }
  }

  const InfoCard = () => {
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      const siteAAvgPrice = siteA ? siteA.avgprice : 0
      const siteBAvgPrice = siteB ? siteB.avgprice : 0
      const siteAAvgCount = siteA ? siteA.avgcount : 0
      const siteBAvgCount = siteB ? siteB.avgcount : 0

      return (
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
          {/* Site A Average Ticket Size */}
          <div className='bg-blue-500  border-2 p-4 m-2 rounded-lg shadow-md w-full flex-grow flex flex-col justify-center items-center gap-4'>
            <div className='text-base md:text-lg font-bold text-black'>
              Avg. Ticket Size {siteAName}
            </div>
            <p className='text-2xl md:text-4xl font-bold text-black'>
              ${siteAAvgPrice.toFixed(0)}
            </p>
          </div>

          {/* Site A Average Ticket Count */}
          <div className='bg-blue-500  border-2 p-4 m-2 rounded-lg shadow-md w-full flex-grow flex flex-col justify-center items-center gap-4'>
            <div className='text-base md:text-lg font-bold text-black'>
              Avg. Ticket Count {siteAName}
            </div>
            <p className='text-2xl md:text-4xl font-bold text-black'>
              #{siteAAvgCount.toFixed(0)}
            </p>
          </div>

          {/* Site B Average Ticket Size */}
          <div className='bg-card bg-orange-500 border-2 p-4 m-2 rounded-lg shadow-md w-full flex-grow flex flex-col justify-center items-center gap-4'>
            <div className='text-base md:text-lg font-bold text-black'>
              Avg. Ticket Size {siteBName}
            </div>
            <p className='text-2xl md:text-4xl font-bold text-black'>
              ${siteBAvgPrice.toFixed(0)}
            </p>
          </div>

          {/* Site B Average Ticket Count */}
          <div className='bg-card bg-orange-500 border-2 p-4 m-2 rounded-lg shadow-md w-full flex-grow flex flex-col justify-center items-center gap-4'>
            <div className='text-base md:text-lg font-bold text-black'>
              Avg. Ticket Count {siteBName}
            </div>
            <p className='text-2xl md:text-4xl font-bold text-black'>
              #{siteBAvgCount.toFixed(0)}
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  const weekday = () => {
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      return [
        {
          id: '7am',
          A: siteA.weekday7am,
          B: siteB.weekday7am,
          fullMark: 2000,
        },
        {
          id: '8am',
          A: siteA.weekday8am,
          B: siteB.weekday8am,
          fullMark: 2000,
        },
        {
          id: '9am',
          A: siteA.weekday9am,
          B: siteB.weekday9am,
          fullMark: 2000,
        },
        {
          id: '10am',
          A: siteA.weekday10am,
          B: siteB.weekday10am,
          fullMark: 2000,
        },
        {
          id: '11am',
          A: siteA.weekday11am,
          B: siteB.weekday11am,
          fullMark: 2000,
        },
        {
          id: '12pm',
          A: siteA.weekday12pm,
          B: siteB.weekday12pm,
          fullMark: 2000,
        },
        {
          id: '1pm',
          A: siteA.weekday1pm,
          B: siteB.weekday1pm,
          fullMark: 2000,
        },
        {
          id: '2pm',
          A: siteA.weekday2pm,
          B: siteB.weekday2pm,
          fullMark: 2000,
        },
        {
          id: '3pm',
          A: siteA.weekday3pm,
          B: siteB.weekday3pm,
          fullMark: 2000,
        },
        {
          id: '4pm',
          A: siteA.weekday4pm,
          B: siteB.weekday4pm,
          fullMark: 2000,
        },
        {
          id: '5pm',
          A: siteA.weekday5pm,
          B: siteB.weekday5pm,
          fullMark: 2000,
        },
        {
          id: '6pm',
          A: siteA.weekday6pm,
          B: siteB.weekday6pm,
          fullMark: 2000,
        },
      ]
    }
  }

  const weekend = () => {
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      const siteA = sites[selectedSiteA]
      const siteB = sites[selectedSiteB]

      return [
        {
          id: '7am',
          A: siteA.weekend7am,
          B: siteB.weekend7am,
          fullMark: 2000,
        },
        {
          id: '8am',
          A: siteA.weekend8am,
          B: siteB.weekend8am,
          fullMark: 2000,
        },
        {
          id: '9am',
          A: siteA.weekend9am,
          B: siteB.weekend9am,
          fullMark: 2000,
        },
        {
          id: '10am',
          A: siteA.weekend10am,
          B: siteB.weekend10am,
          fullMark: 2000,
        },
        {
          id: '11am',
          A: siteA.weekend11am,
          B: siteB.weekend11am,
          fullMark: 2000,
        },
        {
          id: '12pm',
          A: siteA.weekend12pm,
          B: siteB.weekend12pm,
          fullMark: 2000,
        },
        {
          id: '1pm',
          A: siteA.weekend1pm,
          B: siteB.weekend1pm,
          fullMark: 2000,
        },
        {
          id: '2pm',
          A: siteA.weekend2pm,
          B: siteB.weekend2pm,
          fullMark: 2000,
        },
        {
          id: '3pm',
          A: siteA.weekend3pm,
          B: siteB.weekend3pm,
          fullMark: 2000,
        },
        {
          id: '4pm',
          A: siteA.weekend4pm,
          B: siteB.weekend4pm,
          fullMark: 2000,
        },
        {
          id: '5pm',
          A: siteA.weekend5pm,
          B: siteB.weekend5pm,
          fullMark: 2000,
        },
        {
          id: '6pm',
          A: siteA.weekend6pm,
          B: siteB.weekend6pm,
          fullMark: 2000,
        },
      ]
    }
  }

  const axisStyle = {
    fontFamily: 'sans-serif',
    fontSize: '12px',
  }

  return (
    <div className='bg-black min-h-screen'>
      <main className='container mx-auto p-8'>
        <div className='text-black bg-gray-100 border-2 mt-4 rounded-md shadow-md flex justify-between items-center'>
          <div className='relative w-5/12 border-2 rounded-lg'>
            <select
              id='site-select-A'
              onChange={handleSiteAChange}
              className='appearance-none py-4 px-4 w-full h-full  text-xl  text-center font-bold focus:outline-none bg-gray-100 transition-all'
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

          <div className='relative w-5/12 border-2 rounded-lg '>
            <select
              id='site-select-B'
              onChange={handleSiteBChange}
              className='appearance-none py-4 px-4 w-full h-full text-xl text-center font-bold focus:outline-none bg-gray-100  transition-all'
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {/* 1st div: radar chart */}

          <div className='text-black bg-gray-100 border-2 p-4 mt-8  rounded-lg shadow-md text-center'>
            <p className='font-bold mb-6 text-lg'>Demographics</p>
            <ResponsiveContainer width='100%' height={500}>
              <RadarChart
                cx='50%'
                cy='50%'
                outerRadius='80%'
                width={500}
                height={500}
                data={radar()}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey='id' />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  dataKey='A'
                  stroke={blue[500]}
                  fill={blue[500]}
                  fillOpacity={0.6}
                />
                <Radar
                  dataKey='B'
                  stroke={orange[500]}
                  fill={orange[500]}
                  fillOpacity={0.4}
                />
                <Tooltip />
                <Legend
                  formatter={(value, entry, index) => {
                    if (value === 'A') {
                      return siteAName
                    } else if (value === 'B') {
                      return siteBName
                    } else {
                      return value
                    }
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* 2nd div: bar chart */}
          <div className='text-black bg-gray-100 border-2 p-4 mt-8  rounded-lg shadow-md  text-center'>
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
                <Tooltip />
                <Legend
                  formatter={(value, entry, index) => {
                    if (value === 'A') {
                      return siteAName
                    } else if (value === 'B') {
                      return siteBName
                    } else {
                      return value
                    }
                  }}
                />
                <Bar dataKey='A' fill={blue[500]}></Bar>
                <Bar dataKey='B' fill={orange[500]}></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='text-black  bg-gray-100 border-2  p-4 mt-8 rounded-lg shadow-md text-center flex flex-col'>
            <p className='font-bold mb-6 text-lg'>Ticket Count & Ticket Size</p>
            <InfoCard />
          </div>
        </div>

        {/* 4th div: weekday customer line chart */}
        <div className='text-black bg-gray-100 border-2  p-4 mt-8 rounded-lg shadow-md text-center'>
          <p className='font-bold mb-6 text-lg'>Weekday Customer</p>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
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
                    return siteAName
                  } else if (value === 'B') {
                    return siteBName
                  } else {
                    return value
                  }
                }}
              />
              <Line
                type='monotone'
                dataKey='A'
                stroke={blue[500]}
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='B'
                stroke={orange[500]}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/*  5th div: weekend Customer line chart */}
        <div className='text-black bg-gray-100 border-2   p-4 mt-8 mb-8 rounded-lg shadow-md  text-center'>
          <p className='font-bold mb-6 text-lg'>Weekend Customer</p>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
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
              <Tooltip />
              <Legend
                formatter={(value, entry, index) => {
                  if (value === 'A') {
                    return siteAName
                  } else if (value === 'B') {
                    return siteBName
                  } else {
                    return value
                  }
                }}
              />
              <Line
                type='monotone'
                dataKey='A'
                stroke={blue[500]}
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='B'
                stroke={orange[500]}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
