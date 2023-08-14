import BasicLineChart from '@/components/BasicLineChart'
import { GetStaticProps } from 'next/types'
import { useEffect } from 'react'

const Index = ({ data }: any) => {
  useEffect(() => {
    console.log(data.data)
  }, [data])

  return (
    <>
      <BasicLineChart data={data.data} />
    </>
  )
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  const endpoint =
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'

  const response = await fetch(endpoint)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

export default Index
