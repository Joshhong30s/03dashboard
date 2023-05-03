import { useState, useEffect } from 'react'
import React, { ChangeEvent } from 'react'
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
      const siteA = sites[selectedSiteA]
      const siteB = sites[selectedSiteB]

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
      const siteA = sites[selectedSiteA]
      const siteB = sites[selectedSiteB]
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
      const siteA = sites[selectedSiteA]
      const siteB = sites[selectedSiteB]
      const siteAAvgPrice = siteA ? siteA.avgprice : 0
      const siteBAvgPrice = siteB ? siteB.avgprice : 0
      const siteAAvgCount = siteA ? siteA.avgcount : 0
      const siteBAvgCount = siteB ? siteB.avgcount : 0

      return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-white p-4 rounded-lg shadow-md'>
          {/* Site A Average Ticket Size */}
          <div className='flex flex-col justify-center items-center p-4 bg-blue-100 rounded-lg'>
            <h3 className='text-lg font-bold'>Avg Ticket Size (Site A)</h3>
            <p className='text-xl text-blue-800'>{siteAAvgPrice.toFixed(2)}</p>
          </div>

          {/* Site A Average Ticket Count */}
          <div className='flex flex-col justify-center items-center p-4 bg-blue-100 rounded-lg'>
            <h3 className='text-lg font-bold'>Avg Ticket Count (Site A)</h3>
            <p className='text-xl text-blue-800'>{siteAAvgCount.toFixed(0)}</p>
          </div>

          {/* Site B Average Ticket Size */}
          <div className='flex flex-col justify-center items-center p-4 bg-green-100 rounded-lg'>
            <h3 className='text-lg font-bold'>Avg Ticket Size (Site B)</h3>
            <p className='text-xl text-green-800'>{siteBAvgPrice.toFixed(2)}</p>
          </div>

          {/* Site B Average Ticket Count */}
          <div className='flex flex-col justify-center items-center p-4 bg-green-100 rounded-lg'>
            <h3 className='text-lg font-bold'>Avg Ticket Count (Site B)</h3>
            <p className='text-xl text-green-800'>{siteBAvgCount.toFixed(0)}</p>
          </div>
        </div>
      )
    }
    return null
  }

  const weekday = () => {
    if (sites.length > 0 && selectedSiteA !== null && selectedSiteB !== null) {
      const siteA = sites[selectedSiteA]
      const siteB = sites[selectedSiteB]

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

  return (
    <div className='bg-gray-100 min-h-screen'>
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Store Comparison</h1>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <select
            onChange={handleSiteAChange}
            className='ml-2 p-1 border rounded'
          >
            {sites.map((site: Sites, index: number) => (
              <option key={index} value={index}>
                {site.place}
              </option>
            ))}
          </select>

          <select
            onChange={handleSiteBChange}
            className='ml-2 p-1 border rounded'
          >
            {sites.map((site: Sites, index: number) => (
              <option key={index} value={index}>
                {site.place}
              </option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {/* 1st div: radar chart */}

          <div className='bg-white p-4 rounded-lg shadow-md'>
            <p className='font-bold'>Demographics</p>
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
                  name={
                    selectedSiteA !== null
                      ? sites[selectedSiteA]?.place
                      : 'Site A'
                  }
                  dataKey='A'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.4}
                />
                <Radar
                  name={
                    selectedSiteB !== null
                      ? sites[selectedSiteB]?.place
                      : 'Site B'
                  }
                  dataKey='B'
                  stroke='#82ca9d'
                  fill='#82ca9d'
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* 2nd div: bar chart */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <p className='font-bold'>Item Sold</p>
            <ResponsiveContainer width='100%' height={500}>
              <BarChart
                width={500}
                height={500}
                data={bar()}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='id' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='A' fill='#8884d8' />
                <Bar dataKey='B' fill='#82ca9d' />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-md'>
            <p className='font-bold'>Ticket Count/Size</p>
            <InfoCard />
          </div>
        </div>

        {/* 4th div: weekday footfall line chart */}
        <div className='bg-white p-4 mt-8 rounded-lg shadow-md'>
          <p className='font-bold'>Weekday Footfall</p>
          <ResponsiveContainer width='100%' height={200}>
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
              <XAxis dataKey='id' />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='A'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='B'
                stroke='#82ca9d'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/*  5th div: weekend footfall line chart */}
        <div className='bg-white p-4 mt-8 mb-8 rounded-lg shadow-md'>
          <p className='font-bold'>Weekend Footfall</p>
          <ResponsiveContainer width='100%' height={200}>
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
              <XAxis dataKey='id' />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='A'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='B'
                stroke='#82ca9d'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
