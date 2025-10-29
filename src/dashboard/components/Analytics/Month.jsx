import { useEffect, useRef, useState } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

export const Month = () => {
  const chartRef = useRef(null)
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedMonth, setSelectedMonth] = useState('All')

  // Simulated dataset: year → month → data (you can replace this with backend API data)
  const dataset = {
    2023: {
      January: 20, February: 10, March: 15, April: 25, May: 30, June: 20, July: 25, August: 40, September: 35,
    },
    2024: {
      January: 35, February: 25, March: 40, April: 20, May: 15, June: 45, July: 30, August: 50, September: 55,
    },
    2025: {
      January: 40, February: 20, March: 12, April: 39, May: 10, June: 40, July: 39, August: 80, September: 40,
    },
  }

  // List of months (for dropdown and labels)
  const months = ['January','February','March','April','May','June','July','August','September']

  // Filtered data based on selected year and month
  const filteredData = selectedMonth === 'All'
    ? months.map((m) => dataset[selectedYear][m])
    : [dataset[selectedYear][selectedMonth]]

  const filteredLabels = selectedMonth === 'All'
    ? months
    : [selectedMonth]

  // Handle dark/light theme dynamically
  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance
        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }
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
    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: `Renewed Licenses (${selectedYear}${selectedMonth !== 'All' ? ' - ' + selectedMonth : ''})`,
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        data: filteredData,
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
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
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
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="All">All</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart */}
      <CChart
        type="bar"
        data={data}
        options={options}
        ref={chartRef}
        height={110}
      />
    </div>
  )
}
