import { useState, useEffect } from 'react'

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
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='bg-blue-100 p-4 m-2 rounded-lg shadow-md w-full md:w-auto'>
            <h3 className='text-lg font-bold'>Average Ticket Size</h3>
            <p className='text-xl'>{avgprice.toFixed(2)}</p>
          </div>
          <div className='bg-blue-100 p-4 m-2 rounded-lg shadow-md w-full md:w-auto'>
            <h3 className='text-lg font-bold'>Average Ticket Count</h3>
            <p className='text-xl'>{avgcount.toFixed(0)}</p>
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

  return (
    <div className='bg-gray-100 min-h-screen'>
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Store Overview</h1>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <label htmlFor='site-select' className='font-bold'>
            Select a Store:
          </label>
          <select
            id='site-select'
            onChange={handleSiteChange}
            className='ml-2 p-1 border rounded'
          >
            {sites.map((site, index) => (
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
                <PolarRadiusAxis />
                <Radar
                  name='和平'
                  dataKey='A'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* 2nd div: bar chart */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <p className='font-bold'>Point of Interests</p>
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
              <XAxis dataKey='id' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='A' //
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 5th div: weekend footfall line chart*/}
        <div className='bg-white p-4 mt-8 mb-8 rounded-lg shadow-md'>
          <p className='font-bold'>Weekend Footfall</p>
          <ResponsiveContainer width='100%' height={200}>
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
              <XAxis dataKey='id' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='A' //
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
