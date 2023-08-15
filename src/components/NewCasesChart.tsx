import React from 'react'
import dynamic from 'next/dynamic'

const Line = dynamic(
  () => import('@ant-design/charts').then(({ Line }) => Line),
  { ssr: false }
)

interface NewCasesChartProps {
  data: Array<EngData>
}

const NewCasesChart = ({ data }: NewCasesChartProps) => {
  const config = {
    data: data.filter((d: any) => d.newCases > 0).reverse(),
    autoFit: true,
    xField: 'date',
    yField: 'newCases',
    smooth: true,
    slider: {
      start: 0,
      end: 1,
    },
  }

  let chart: any

  return (
    <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
  )
}

export default NewCasesChart
