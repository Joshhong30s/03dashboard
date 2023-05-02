import React, { useState } from 'react'
import fetchSheetData from '../components/SheetsHelper'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

interface OverviewProps {
  data1: DataItem[]
  data2: DataItem[]
  data3: DataItem[]
}

interface DataItem {
  data: any
  id: string
  A: number
  fullMark: number
}

export async function getServerSideProps() {
  const range1 = `site2!B3:G3`
  const rawData1 = await fetchSheetData(range1)

  const data1 = rawData1?.map((row, index) => {
    const [whitecollar, bluecollar, housewives, tourists, elders, students] =
      row
    return {
      id: `item-${index}`,
      data: [
        { id: 'whitecollar', A: Number(whitecollar), fullMark: 5000 },
        { id: 'bluecollar', A: Number(bluecollar), fullMark: 5000 },
        { id: 'housewives', A: Number(housewives), fullMark: 5000 },
        { id: 'tourists', A: Number(tourists), fullMark: 5000 },
        { id: 'elders', A: Number(elders), fullMark: 5000 },
        { id: 'students', A: Number(students), fullMark: 5000 },
      ],
    }
  })

  const range2 = `site2!H3:L3`
  const rawData2 = await fetchSheetData(range2)

  const data2 = rawData2?.map((row, index) => {
    const [companies, coffee, convenient, food, touristsite] = row
    return {
      id: `item-${index}`,
      data: [
        { id: 'companies', A: Number(companies), fullMark: 100 },
        { id: 'coffee', A: Number(coffee), fullMark: 50 },
        { id: 'convenient', A: Number(convenient), fullMark: 100 },
        { id: 'food', A: Number(food), fullMark: 50 },
        { id: 'tourist site', A: Number(touristsite), fullMark: 50 },
      ],
    }
  })

  const range3 = `site2!H4:L4`
  const rawData3 = await fetchSheetData(range3)

  const data3 = rawData3?.map((row, index) => {
    const [companies, coffee, convenient, food, touristsite] = row
    return {
      id: `item-${index}`,
      data: [
        { id: 'companies', A: Number(companies), fullMark: 100 },
        { id: 'coffee', A: Number(coffee), fullMark: 50 },
        { id: 'convenient', A: Number(convenient), fullMark: 100 },
        { id: 'food', A: Number(food), fullMark: 50 },
        { id: 'tourist site', A: Number(touristsite), fullMark: 50 },
      ],
    }
  })

  return {
    props: {
      data1,
      data2,
      data3,
    },
  }
}

const Overview: React.FC<OverviewProps> = ({ data1, data2, data3 }) => {
  const flattenedData1 = data1.flatMap((item) => item.data)
  const flattenedData2 = data2.flatMap((item) => item.data)
  const flattenedData3 = data3.flatMap((item) => item.data)

  return (
    <div>
      <main className='flex-grow'>
        <div>
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a Site for an overview' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='和平高中'>和平高中</SelectItem>
              <SelectItem value='北醫'>北醫</SelectItem>
              <SelectItem value='四四南村'>四四南村</SelectItem>
              <SelectItem value='古亭'>古亭</SelectItem>
              <SelectItem value='小南門'>小南門</SelectItem>
              <SelectItem value='建國花市'>建國花市</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Chart container */}
        <div className='flex flex-col md:flex-row'>
          {/* 1st div: Info cards */}
          <div className='w-full md:w-1/3'>
            <ResponsiveContainer width='100%' height={500}>
              <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={flattenedData1}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey='id' />
                <PolarRadiusAxis />
                <Radar
                  name='A'
                  dataKey='A'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* 2nd div: Full-width chart area for weekday traffic */}
          <div className='w-full md:w-1/3'>
            <ResponsiveContainer width='100%' height={500}>
              <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={flattenedData2}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey='id' />
                <PolarRadiusAxis />
                <Radar
                  name='A'
                  dataKey='A'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* 3rd div: Full-width table area for weekend traffic */}
          <div className='w-full md:w-1/3'>
            <ResponsiveContainer width='100%' height={500}>
              <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={flattenedData3}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey='id' />
                <PolarRadiusAxis />
                <Radar
                  name='A'
                  dataKey='A'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Overview
