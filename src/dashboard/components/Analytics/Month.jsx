// src/components/Month/Month.jsx
import React from 'react'
import { useMonthChart } from '../../hook/Analytics/useMonthChart'
import { MonthFilters } from '../Analytics/Month/MonthFilters'
import { MonthChart } from '../Analytics/Month/MonthChart'

export const Month = () => {
  const {
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    labels,
    values,
    monthsList,
  } = useMonthChart()

  return (
    <div className="mt-5 p-4 bg-light rounded mb-5">
      <MonthFilters
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedYear={setSelectedYear}
        setSelectedMonth={setSelectedMonth}
        monthsList={monthsList}
      />
      <MonthChart
        labels={labels}
        values={values}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
      />
    </div>
  )
}
