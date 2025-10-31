// src/components/Month/MonthChart.jsx
import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

export const MonthChart = ({ labels, values, selectedYear, selectedMonth }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (!chartInstance) return

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
        })`,
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

  return <CChart type="bar" data={data} options={options} ref={chartRef} height={110} />
}
