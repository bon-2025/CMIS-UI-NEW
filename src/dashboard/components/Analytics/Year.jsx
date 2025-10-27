import { useEffect, useRef, useState } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

export const Year = () => {
  const chartRef = useRef(null)
  const [selectedYear, setSelectedYear] = useState('2025') // default year

  // Sample dataset by year (replace with your backend data)
  const yearlyData = {
    2023: [20, 10, 15, 25, 30, 20, 25, 40, 35],
    2024: [35, 25, 40, 20, 15, 45, 30, 50, 55],
    2025: [40, 20, 12, 39, 10, 40, 39, 80, 40],
  }

  // Handle color scheme changes dynamically
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: `Renewed Licenses (${selectedYear})`,
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        data: yearlyData[selectedYear] || [],
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
      {/* Dropdown Filter */}
      <div className="mb-3">
        <label htmlFor="yearSelect" className="form-label fw-bold">
          Filter by Year:
        </label>
        <select
          id="yearSelect"
          className="form-select w-auto d-inline-block ms-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
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
