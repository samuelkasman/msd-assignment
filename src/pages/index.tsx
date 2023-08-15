import Home from '@/screens/Home'
import Head from 'next/head'
import { GetStaticProps } from 'next/types'

const Index = ({ eng, toDate }: FetchedData) => {
  return (
    <>
      <Head>
        <title>MSD Assignment</title>
        <meta name="description" content="MSD Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Home eng={eng} toDate={toDate} />
    </>
  )
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data?'

  const filtersEng = 'filters=areaType=nation;areaName=england'
  const filtersToDate = `filters=areaType=nation;date=2023-08-01`

  const structureEng = {
    date: 'date',
    newCases: 'newCasesByPublishDate',
  }
  const structureToDate = {
    areaName: 'areaName',
    cumCasesByPublishDate: 'cumCasesByPublishDate',
  }

  const requestEng = `${endpoint}${filtersEng}&structure=${JSON.stringify(
    structureEng
  )}`
  const requestToDate = `${endpoint}${filtersToDate}&structure=${JSON.stringify(
    structureToDate
  )}`

  const responseEng = await fetch(requestEng)
  const responseToDate = await fetch(requestToDate)

  const dataEng = await responseEng.json()
  const dataToDate = await responseToDate.json()

  return {
    props: {
      eng: dataEng,
      toDate: dataToDate,
    },
  }
}

export default Index
