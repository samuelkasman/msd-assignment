import BasicLineChart from '@/components/BasicLineChart'
import { GetStaticProps } from 'next/types'

const Test = () => {
  return (
    <>
      <BasicLineChart />
    </>
  )
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return {
    props: {},
  }
}

export default Test
