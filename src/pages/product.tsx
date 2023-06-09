import React, { useState, useEffect, PureComponent } from 'react'

import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

interface Sites {
  place: string
  美式咖啡: number
  卡布奇諾: number
  拿鐵: number
  莊園特調: number
  摩卡: number
  哥倫比亞: number
  CoffeeTotal: number
  CoffeeAvgPrice: number
  可頌: number
  法式吐司: number
  肉桂捲: number
  全麥麵包: number
  酸酵母麵包: number
  法國長棍: number
  BreadTotal: number
  BreadAvgPrice: number
  巧克力蛋糕: number
  草莓慕斯: number
  馬卡龍: number
  焦糖布丁: number
  紅豆麻糬: number
  提拉米蘇: number
  DessertTotal: number
  DessertAvgPrice: number
  千層麵: number
  青醬義大利麵: number
  海鮮義大利麵: number
  焗烤雞肉燉飯: number
  牛肉義大利麵: number
  通心粉: number
  PastaTotal: number
  PastaAvgPrice: number
  CoffeeRevenue: number
  BreadRevenue: number
  DessertRevenue: number
  PastaRevenue: number
  StoreRevenue: number
}

export default function Product() {
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

  const fetchSite = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/loadingP', {
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

        // Skip the header row
        const rowsWithoutHeader = values.slice(1)

        const sitesData = rowsWithoutHeader.map((row: any[]) => {
          return {
            place: row[0],
            美式咖啡: Number(row[1]),
            卡布奇諾: Number(row[2]),
            拿鐵: Number(row[3]),
            莊園特調: Number(row[4]),
            摩卡: Number(row[5]),
            哥倫比亞: Number(row[6]),
            CoffeeTotal: Number(row[7]),
            CoffeeAvgPrice: Number(row[8]),
            可頌: Number(row[9]),
            法式吐司: Number(row[10]),
            肉桂捲: Number(row[11]),
            全麥麵包: Number(row[12]),
            酸酵母麵包: Number(row[13]),
            法國長棍: Number(row[14]),
            BreadTotal: Number(row[15]),
            BreadAvgPrice: Number(row[16]),
            巧克力蛋糕: Number(row[17]),
            草莓慕斯: Number(row[18]),
            馬卡龍: Number(row[19]),
            焦糖布丁: Number(row[20]),
            紅豆麻糬: Number(row[21]),
            提拉米蘇: Number(row[22]),
            DessertTotal: Number(row[23]),
            DessertAvgPrice: Number(row[24]),
            千層麵: Number(row[25]),
            青醬義大利麵: Number(row[26]),
            海鮮義大利麵: Number(row[27]),
            焗烤雞肉燉飯: Number(row[28]),
            牛肉義大利麵: Number(row[29]),
            通心粉: Number(row[30]),
            PastaTotal: Number(row[31]),
            PastaAvgPrice: Number(row[32]),
            CoffeeRevenue: Number(row[33]),
            BreadRevenue: Number(row[34]),
            DessertRevenue: Number(row[35]),
            PastaRevenue: Number(row[36]),
            StoreRevenue: Number(row[37]),
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

  const bar1 = () => {
    if (sites.length > 0) {
      const { 美式咖啡, 卡布奇諾, 拿鐵, 莊園特調, 摩卡, 哥倫比亞 } =
        sites[selectedSiteIndex]

      return [
        { id: '美式咖啡', A: 美式咖啡, fullMark: 1000 },
        { id: '卡布奇諾', A: 卡布奇諾, fullMark: 1000 },
        { id: '拿鐵', A: 拿鐵, fullMark: 1000 },
        { id: '莊園特調', A: 莊園特調, fullMark: 1000 },
        { id: '摩卡', A: 摩卡, fullMark: 1000 },
        { id: '哥倫比亞', A: 哥倫比亞, fullMark: 1000 },
      ]
    }
    return []
  }

  const bar2 = () => {
    if (sites.length > 0) {
      const { 可頌, 法式吐司, 肉桂捲, 全麥麵包, 酸酵母麵包, 法國長棍 } =
        sites[selectedSiteIndex]

      return [
        { id: '可頌', A: 可頌, fullMark: 1000 },
        { id: '法式吐司', A: 法式吐司, fullMark: 1000 },
        { id: '肉桂捲', A: 肉桂捲, fullMark: 1000 },
        { id: '全麥麵包', A: 全麥麵包, fullMark: 1000 },
        { id: '酸酵母麵包', A: 酸酵母麵包, fullMark: 1000 },
        { id: '法國長棍', A: 法國長棍, fullMark: 1000 },
      ]
    }
    return []
  }

  const bar3 = () => {
    if (sites.length > 0) {
      const { 巧克力蛋糕, 草莓慕斯, 馬卡龍, 焦糖布丁, 紅豆麻糬, 提拉米蘇 } =
        sites[selectedSiteIndex]

      return [
        { id: '巧克力蛋糕', A: 巧克力蛋糕, fullMark: 5000 },
        { id: '草莓慕斯', A: 草莓慕斯, fullMark: 1000 },
        { id: '馬卡龍', A: 馬卡龍, fullMark: 1000 },
        { id: '焦糖布丁', A: 焦糖布丁, fullMark: 1000 },
        { id: '紅豆麻糬', A: 紅豆麻糬, fullMark: 1000 },
        { id: '提拉米蘇', A: 提拉米蘇, fullMark: 1000 },
      ]
    }
    return []
  }

  const bar4 = () => {
    if (sites.length > 0) {
      const {
        千層麵,
        青醬義大利麵,
        海鮮義大利麵,
        焗烤雞肉燉飯,
        牛肉義大利麵,
        通心粉,
      } = sites[selectedSiteIndex]

      return [
        { id: '千層麵', A: 千層麵, fullMark: 5000 },
        { id: '青醬義大利麵', A: 青醬義大利麵, fullMark: 1000 },
        { id: '海鮮義大利麵', A: 海鮮義大利麵, fullMark: 1000 },
        { id: '焗烤雞肉燉飯', A: 焗烤雞肉燉飯, fullMark: 1000 },
        { id: '牛肉義大利麵', A: 牛肉義大利麵, fullMark: 1000 },
        { id: '通心粉', A: 通心粉, fullMark: 1000 },
      ]
    }
    return []
  }

  const pie = () => {
    if (sites.length > 0) {
      const { CoffeeRevenue, BreadRevenue, DessertRevenue, PastaRevenue } =
        sites[selectedSiteIndex]

      return [
        { id: 'Coffee', value: CoffeeRevenue },
        { id: 'Bread', value: BreadRevenue },
        { id: 'Desert', value: DessertRevenue },
        { id: 'Pasta', value: PastaRevenue },
      ]
    }
    return []
  }

  const COLORS = ['#1E40AF', '#047857', '#D97706', '#B91C1C']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  const scatter1 = () => {
    if (sites.length > 0) {
      const { CoffeeTotal, CoffeeAvgPrice, CoffeeRevenue } =
        sites[selectedSiteIndex]

      return [{ x: CoffeeTotal, y: CoffeeAvgPrice, z: CoffeeRevenue }]
    }
    return []
  }

  const scatter2 = () => {
    if (sites.length > 0) {
      const { BreadTotal, BreadAvgPrice, BreadRevenue } =
        sites[selectedSiteIndex]

      return [{ x: BreadTotal, y: BreadAvgPrice, z: BreadRevenue }]
    }
    return []
  }

  const scatter3 = () => {
    if (sites.length > 0) {
      const { DessertTotal, DessertAvgPrice, DessertRevenue } =
        sites[selectedSiteIndex]

      return [{ x: DessertTotal, y: DessertAvgPrice, z: DessertRevenue }]
    }
    return []
  }

  const scatter4 = () => {
    if (sites.length > 0) {
      const { PastaTotal, PastaAvgPrice, PastaRevenue } =
        sites[selectedSiteIndex]

      return [{ x: PastaTotal, y: PastaAvgPrice, z: PastaRevenue }]
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
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
            {/* 1-4 div: bar chart */}
            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Coffee Ticket Count</p>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart
                  width={500}
                  height={500}
                  layout='vertical'
                  data={bar1()}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis type='number' style={axisStyle} />
                  <YAxis dataKey='id' type='category' style={axisStyle} />
                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Bar dataKey='A' fill='#1E40AF' barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Bread Ticket Count</p>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart
                  width={500}
                  height={500}
                  layout='vertical'
                  data={bar2()}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis type='number' style={axisStyle} />
                  <YAxis dataKey='id' type='category' style={axisStyle} />
                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Bar dataKey='A' fill='#047857' barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Dessert Ticket Count</p>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart
                  width={500}
                  height={500}
                  layout='vertical'
                  data={bar3()}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis type='number' style={axisStyle} />
                  <YAxis dataKey='id' type='category' style={axisStyle} />
                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Bar dataKey='A' fill='#D97706' barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
              <p className='font-bold mb-6 text-lg'>Pasta Ticket Count</p>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart
                  width={500}
                  height={500}
                  layout='vertical'
                  data={bar4()}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis type='number' style={axisStyle} />
                  <YAxis dataKey='id' type='category' style={axisStyle} />
                  <Legend
                    formatter={(value, entry, index) => {
                      if (value === 'A') {
                        return siteName
                      } else {
                        return value
                      }
                    }}
                  />
                  <Bar dataKey='A' fill='#B91C1C' barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          {/* 5th div: pie chart */}
          <div className='text-black bg-gray-100 border-2 p-4 mt-8 rounded-lg shadow-md text-center'>
            <p className='font-bold mb-6 text-lg'>Product Revenue Analysis</p>
            <ResponsiveContainer width='100%' height={400}>
              <PieChart>
                <Pie
                  data={pie()}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill='#8884d8'
                  dataKey='value'
                  nameKey='id'
                >
                  {pie().map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* 6th div: scatter chart */}
          <div className='text-black bg-gray-100 border-2  p-4 mt-8 rounded-lg shadow-md text-center'>
            <p className='font-bold mb-6 text-lg'>Product Category Analysis</p>
            <ResponsiveContainer width='100%' height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type='number' dataKey='x' name='Total' unit='Qty' />
                <YAxis type='number' dataKey='y' name='Avg. Price' unit='NT' />
                <ZAxis
                  type='number'
                  dataKey='z'
                  range={[50, 500]}
                  name='Revenue'
                  unit='NT'
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter
                  name='Coffee'
                  data={scatter1()}
                  fill='#1E40AF'
                  shape='star'
                />
                <Scatter
                  name='Bread'
                  data={scatter2()}
                  fill='#047857'
                  shape='star'
                />
                <Scatter
                  name='Dessert'
                  data={scatter3()}
                  fill='#D97706'
                  shape='star'
                />
                <Scatter
                  name='Pasta'
                  data={scatter4()}
                  fill='#B91C1C'
                  shape='star'
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
