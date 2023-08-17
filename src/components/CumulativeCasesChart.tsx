import React from 'react'
import dynamic from 'next/dynamic'

const Pie = dynamic(() => import('@ant-design/charts').then(({ Pie }) => Pie), {
  ssr: false,
})

interface CumulativeCasesChartProps {
  data: Array<ToDateData>
}

const CumulativeCasesChart = ({ data }: CumulativeCasesChartProps) => {
  const config = {
    data,
    angleField: 'cumCasesByPublishDate',
    colorField: 'areaName',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  }

  let chart: any

  return (
    <Pie {...config} onReady={(chartInstance) => (chart = chartInstance)} />
  )
}

export default React.memo(CumulativeCasesChart)
