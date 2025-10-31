// src/components/Day/Day.jsx
import React from "react"
import { useDayChart } from "../../hook/Analytics/useDayChart"
import { DayFilters } from "./Day/DayFilters"
import { DayChart } from "./Day/DayChart"

export const Day = () => {
  const {
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
  } = useDayChart()

  return (
    <div className="mt-5 p-4 bg-light rounded mb-5">
      <DayFilters
        dataset={dataset}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedYear={setSelectedYear}
        setSelectedMonth={setSelectedMonth}
        setSelectedDay={setSelectedDay}
        months={months}
        days={days}
      />
      <DayChart
        labels={labels}
        values={values}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
      />
    </div>
  )
}
