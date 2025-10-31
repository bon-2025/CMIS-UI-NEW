// src/hooks/useDayChart.js
import { useState, useMemo } from "react"
import { getDayDataset } from "../../service/Analytics/dayDataService"

export const useDayChart = () => {
  const dataset = getDayDataset()

  const [selectedYear, setSelectedYear] = useState("2025")
  const [selectedMonth, setSelectedMonth] = useState("All")
  const [selectedDay, setSelectedDay] = useState("All")

  const months = Object.keys(dataset[selectedYear])
  const days = selectedMonth !== "All" ? Object.keys(dataset[selectedYear][selectedMonth]) : []

  const { labels, values } = useMemo(() => {
    let labels = []
    let values = []

    if (selectedMonth === "All") {
      labels = months
      values = months.map((month) => {
        const monthData = dataset[selectedYear][month]
        const sum = Object.values(monthData).reduce((a, b) => a + b, 0)
        return Math.round(sum / Object.values(monthData).length)
      })
    } else if (selectedDay === "All") {
      labels = days.map((day) => `Day ${day}`)
      values = days.map((day) => dataset[selectedYear][selectedMonth][day])
    } else {
      labels = [`${selectedMonth} ${selectedDay}`]
      values = [dataset[selectedYear][selectedMonth][selectedDay]]
    }

    return { labels, values }
  }, [dataset, selectedYear, selectedMonth, selectedDay, months, days])

  return {
    dataset,
    selectedYear,
    selectedMonth,
    selectedDay,
    setSelectedYear,
    setSelectedMonth,
    setSelectedDay,
    months,
    days,
    labels,
    values,
  }
}
