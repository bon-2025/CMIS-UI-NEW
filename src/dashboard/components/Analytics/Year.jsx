// src/components/Year/Year.jsx
import React from 'react'
import { useYearChart } from '../../hook/Analytics/useYearChart'
import { YearFilters } from './Year/YearFilters'
import { YearChart } from './Year/YearChart'

export const Year = () => {
  const { selectedYear, setSelectedYear, labels, values } = useYearChart()

  return (
    <div className="mt-5 p-4 bg-light rounded mb-5">
      <YearFilters selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <YearChart labels={labels} values={values} selectedYear={selectedYear} />
    </div>
  )
}
