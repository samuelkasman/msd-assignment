import React from 'react'
import dynamic from 'next/dynamic'

const Line = dynamic(
  () => import('@ant-design/charts').then(({ Line }) => Line),
  { ssr: false }
)

const BasicLineChart = ({ data }: any) => {
  const config = {
    data,
    width: 800,
    height: 400,
    autoFit: true,
    xField: 'date',
    yField: 'newCases',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  }

  let chart: any

  // Export Image
  const downloadImage = () => {
    chart?.downloadImage()
  }

  // Get chart base64 string
  const toDataURL = () => {
    console.log(chart?.toDataURL())
  }

  return (
    <div>
      New cases chart
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        Export Image
      </button>
      <button type="button" onClick={toDataURL}>
        Get base64
      </button>
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </div>
  )
}

export default BasicLineChart
