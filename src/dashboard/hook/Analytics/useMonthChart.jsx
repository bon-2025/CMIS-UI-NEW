// src/hooks/useMonthChart.js
import { useState, useMemo } from 'react'
import { getMonthDataset, monthsList } from '../../service/Analytics/monthDataService'

export const useMonthChart = () => {
  const dataset = getMonthDataset()
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedMonth, setSelectedMonth] = useState('All')

  const { labels, values } = useMemo(() => {
    const labels = selectedMonth === 'All' ? monthsList : [selectedMonth]
    const values =
      selectedMonth === 'All'
        ? monthsList.map((m) => dataset[selectedYear][m])
        : [dataset[selectedYear][selectedMonth]]

    return { labels, values }
  }, [dataset, selectedYear, selectedMonth])

  return {
    dataset,
    monthsList,
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
    labels,
    values,
  }
}
