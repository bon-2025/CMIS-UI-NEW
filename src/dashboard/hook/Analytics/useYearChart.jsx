// src/hooks/useYearChart.js
import { useState, useMemo } from 'react'
import { getYearDataset, monthsList } from '../../service/Analytics/yearDataService'

export const useYearChart = () => {
  const dataset = getYearDataset()
  const [selectedYear, setSelectedYear] = useState('2025')

  const { labels, values } = useMemo(() => {
    return {
      labels: monthsList,
      values: dataset[selectedYear] || [],
    }
  }, [dataset, selectedYear])

  return {
    dataset,
    monthsList,
    selectedYear,
    setSelectedYear,
    labels,
    values,
  }
}
