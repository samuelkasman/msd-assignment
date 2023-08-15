interface EngData {
  date: string
  newCases: number
}

interface ToDateData {
  areaName: string
  cumCasesByPublishDate: number
}

interface FetchedData {
  eng: {
    data: Array<EngData>
    length: number
  }
  toDate: {
    data: Array<ToDateData>
    length: number
  }
}
