import React, { useState, useEffect, PureComponent } from 'react'

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

export default function Menu() {
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

  const categories = [
    { name: 'Coffee', items: bar1() },
    { name: 'Bread', items: bar2() },
    { name: 'Dessert', items: bar3() },
    { name: 'Pasta', items: bar4() },
  ]

  const getBgColor = (index: any) => {
    switch (index) {
      case 0:
        return 'bg-green-100'
      case 1:
        return 'bg-blue-100'
      case 2:
        return 'bg-yellow-100'
      default:
        return ''
    }
  }

  const getIcon = (index: any) => {
    switch (index) {
      case 0:
        return '👑'
      case 1:
        return '🥈'
      case 2:
        return '🥉'
      default:
        return ''
    }
  }

  return (
    <div className='p-6'>
      <h1 className='text-4xl mb-6 text-center font-semibold'>Our Menu</h1>
      {categories.map((category) => (
        <div key={category.name} className='mb-8'>
          <h2 className='text-3xl mb-4 font-semibold'>{category.name}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {category.items
              .sort((a, b) => b.A - a.A)
              .map((item, index) => (
                <div
                  key={item.id}
                  className={`border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ${getBgColor(
                    index
                  )}`}
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='text-2xl mb-2 font-bold'>{item.id}</h3>
                    {getIcon(index) && (
                      <div className='text-2xl'>{getIcon(index)}</div>
                    )}
                  </div>
                  <div className='flex justify-between'>
                    <p>本月銷售 {item.A} 個</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
