import { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

/**
 * StatusChart
 * Displays a responsive multi-line chart showing status data (Renewable, Expiring, Expired)
 * Automatically adapts to CoreUI color scheme changes (light/dark)
 */
export const StatusChart = () => {
  const chartRef = useRef(null)

  // --- Handle color scheme changes dynamically ---
  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        // Update legend label colors
        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        // Update X-axis colors
        if (options.scales?.x) {
          if (options.scales.x.grid) {
            options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.x.ticks) {
            options.scales.x.ticks.color = getStyle('--cui-body-color')
          }
        }

        // Update Y-axis colors
        if (options.scales?.y) {
          if (options.scales.y.grid) {
            options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          }
          if (options.scales.y.ticks) {
            options.scales.y.ticks.color = getStyle('--cui-body-color')
          }
        }

        // Refresh chart to apply new styles
        chartInstance.update()
      }
    }

    // Listen for CoreUI theme change events
    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  // --- Chart data ---
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Renewable',
        backgroundColor: '#f3f4f7',
        borderColor: '#1b9e3e',
        pointBackgroundColor: '#1b9e3e',
        pointBorderColor: '#1b9e3e',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        data: [40, 20, 12, 39, 10, 40, 39, 8, 40],
        fill: false,
      },
      {
        label: 'Expiring',
        backgroundColor: '#f3f4f7',
        borderColor: '#f9b115',
        pointBackgroundColor: '#f9b115',
        pointBorderColor: '#f9b115',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        data: [4, 9, 12, 9, 10, 4, 39, 8, 50],
        fill: false,
      },
      {
        label: 'Expired',
        backgroundColor: '#f3f4f7',
        borderColor: '#e55353',
        pointBackgroundColor: '#e55353',
        pointBorderColor: '#e55353',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        data: [50, 12, 28, 29, 7, 25, 12, 70, 6],
        fill: false,
      },
    ],
  }

  // --- Chart configuration ---
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      tooltip: {
        displayColors: true,
        boxPadding: 8,
        boxWidth: 12,
        boxHeight: 12,
        bodySpacing: 6,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.formattedValue}`,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
      },
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      animationDuration: 400,
    },
    scales: {
      x: {
        type: 'category',
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  }

  // --- Render chart ---
  return <CChart type="line" data={data} options={options} ref={chartRef} height={110} />
}
