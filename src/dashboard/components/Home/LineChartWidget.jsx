// components/widgets/LineChartWidget.jsx
import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'

const LineChartWidget = ({ color, title, value, chartData }) => {
  const chartOptions = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      x: { border: { display: false }, grid: { display: false }, ticks: { display: false } },
      y: { min: 30, max: 89, display: false, grid: { display: false }, ticks: { display: false } },
    },
    elements: {
      line: { borderWidth: 1, tension: 0.4 },
      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
    },
  }

  return (
    <CWidgetStatsA
      className="mb-1 modern-widget"
      color={color}
      value={
        <>
          {value}{' '}
          <span className="fs-6 fw-normal">
            (40.8% <CIcon icon={cilArrowTop} height={15} />)
          </span>
        </>
      }
      title={title}
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret className={`p-0 text-${color}`}>
            <CIcon icon={cilOptions} className="text-white" />
          </CDropdownToggle>
          <CDropdownMenu>
            {[2025, 2024, 2023, 2022].map((year) => (
              <CDropdownItem key={year}>{year}</CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>
      }
      chart={<CChartLine className="mt-3 mx-3" style={{ height: '70px' }} data={chartData} options={chartOptions} />}
    />
  )
}

export default LineChartWidget
