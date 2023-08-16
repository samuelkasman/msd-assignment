import { useEffect, useState } from 'react'

const ENDPOINT = 'https://api.coronavirus.data.gov.uk/v1/data?'

const FILTERS_ENG = 'filters=areaType=nation;areaName=england'
const FILTERS_TO_DATE = `filters=areaType=nation;date=2023-08-01`

const STRUCTURE_ENG = {
  date: 'date',
  newCases: 'newCasesByPublishDate',
}
const STRUCTURE_TO_DATE = {
  areaName: 'areaName',
  cumCasesByPublishDate: 'cumCasesByPublishDate',
}

const requestEng = `${ENDPOINT}${FILTERS_ENG}&structure=${JSON.stringify(
  STRUCTURE_ENG
)}`

const requestToDate = `${ENDPOINT}${FILTERS_TO_DATE}&structure=${JSON.stringify(
  STRUCTURE_TO_DATE
)}`

export const useHome = () => {
  const [eng, setEng] = useState<EngData[]>([])
  const [toDate, setToDate] = useState<ToDateData[]>([])

  const [engLoading, setEngLoading] = useState(true)
  const [toDateLoading, setToDateLoading] = useState(true)

  useEffect(() => {
    fetch(requestEng)
      .then((res) => res.json())
      .then((data) => {
        setEng(data.data)
        setEngLoading(false)
      })

    fetch(requestToDate)
      .then((res) => res.json())
      .then((data) => {
        setToDate(data.data)
        setToDateLoading(false)
      })
  }, [])

  return {
    eng,
    engLoading,
    toDate,
    toDateLoading
  }
}
