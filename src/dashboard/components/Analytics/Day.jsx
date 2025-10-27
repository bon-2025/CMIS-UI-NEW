import { useEffect, useRef, useState } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

export const Day = () => {
  const chartRef = useRef(null)
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedMonth, setSelectedMonth] = useState('All')
  const [selectedDay, setSelectedDay] = useState('All')

  // Simulated dataset: Year → Month → Day → Value
  const dataset = {
    2025: {
      January: { 1: 5, 2: 10, 3: 15, 4: 8, 5: 12 },
      February: { 1: 7, 2: 11, 3: 9, 4: 10, 5: 13 },
      March: { 1: 12, 2: 15, 3: 20, 4: 10, 5: 18 },
    },
    2024: {
      January: { 1: 8, 2: 14, 3: 10, 4: 9, 5: 11 },
      February: { 1: 12, 2: 15, 3: 8, 4: 10, 5: 14 },
      March: { 1: 9, 2: 13, 3: 16, 4: 12, 5: 17 },
    },
    2023: {
      January: { 1: 6, 2: 9, 3: 12, 4: 8, 5: 10 },
      February: { 1: 10, 2: 12, 3: 8, 4: 9, 5: 13 },
      March: { 1: 15, 2: 20, 3: 18, 4: 14, 5: 19 },
    },
  }

  const months = Object.keys(dataset[selectedYear])
  const days =
    selectedMonth !== 'All'
      ? Object.keys(dataset[selectedYear][selectedMonth])
      : []

  // Determine chart labels and values based on selections
  let labels = []
  let values = []

  if (selectedMonth === 'All') {
    labels = months
    values = months.map((month) => {
      const monthData = dataset[selectedYear][month]
      const sum = Object.values(monthData).reduce((a, b) => a + b, 0)
      return Math.round(sum / Object.values(monthData).length)
    })
  } else if (selectedDay === 'All') {
    labels = days.map((day) => `Day ${day}`)
    values = days.map((day) => dataset[selectedYear][selectedMonth][day])
  } else {
    labels = [`${selectedMonth} ${selectedDay}`]
    values = [dataset[selectedYear][selectedMonth][selectedDay]]
  }

  // Handle theme color updates
  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance
        if (options.plugins?.legend?.labels)
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        if (options.scales?.x) {
          options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          options.scales.x.ticks.color = getStyle('--cui-body-color')
        }
        if (options.scales?.y) {
          options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          options.scales.y.ticks.color = getStyle('--cui-body-color')
        }
        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () =>
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: `Renewed Licenses (${selectedYear}${
          selectedMonth !== 'All' ? ' - ' + selectedMonth : ''
        }${selectedDay !== 'All' ? ' - Day ' + selectedDay : ''})`,
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        data: values,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: getStyle('--cui-body-color') },
      },
    },
    scales: {
      x: {
        grid: { color: getStyle('--cui-border-color-translucent') },
        ticks: { color: getStyle('--cui-body-color') },
      },
      y: {
        grid: { color: getStyle('--cui-border-color-translucent') },
        ticks: { color: getStyle('--cui-body-color') },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="mt-5 p-4 bg-light rounded mb-5">
      {/* Filters */}
      <div className="mb-3 d-flex align-items-center gap-3 flex-wrap">
        {/* Year Filter */}
        <div>
          <label htmlFor="yearSelect" className="form-label fw-bold me-2">
            Year:
          </label>
          <select
            id="yearSelect"
            className="form-select d-inline-block w-auto"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value)
              setSelectedMonth('All')
              setSelectedDay('All')
            }}
          >
            {Object.keys(dataset).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Month Filter */}
        <div>
          <label htmlFor="monthSelect" className="form-label fw-bold me-2">
            Month:
          </label>
          <select
            id="monthSelect"
            className="form-select d-inline-block w-auto"
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value)
              setSelectedDay('All')
            }}
          >
            <option value="All">All</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Day Filter */}
        {selectedMonth !== 'All' && (
          <div>
            <label htmlFor="daySelect" className="form-label fw-bold me-2">
              Day:
            </label>
            <select
              id="daySelect"
              className="form-select d-inline-block w-auto"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="All">All</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Chart */}
      <CChart type="bar" data={data} options={options} ref={chartRef} height={110} />
    </div>
  )
}
