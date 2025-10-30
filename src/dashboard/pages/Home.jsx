import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'
import { CurrentStatus } from "../components/CurrentStatus"
import { CWidgetStatsB } from '@coreui/react'
import {
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetStatsA,
} from '@coreui/react'
import './Home.css' // We'll define hover styles here

// Reusable Line Chart Widget
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

const Home = () => {
  const widgetConfig = [
    { color: 'primary', title: 'Total descendants', value: 300 },
    { color: 'success', title: 'Active descendants', value: 300 },
    { color: 'warning', title: 'Pending descendants', value: 300 },
    { color: 'danger', title: 'Inactive descendants', value: 300 },
  ]

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'descendants',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: '#5856d6',
        data: [65, 59, 84, 84, 51, 55, 40],
      },
    ],
  }

  return (
    <div className="container-fluid p-3">
      <CRow className="p-3">
        {widgetConfig.map((config, idx) => (
          <CCol sm={3} key={idx}>
            <LineChartWidget {...config} chartData={chartData} />
          </CCol>
        ))}
      </CRow>

      <div className="container-fluid bg-light p-3 border border-dark-subtle">
        <CurrentStatus className="container-fluid" />
      </div>

      <div className="container-fluid bg-light p-3 border border-dark-subtle">
        <CRow>
          {[
            { title: 'Renewable', color: 'success', value: '89.9%' },
            { title: 'Expiring', color: 'warning', value: '89.9%' },
            { title: 'Expired', color: 'danger', value: '89.9%' },
          ].map((w, idx) => (
            <CCol xs={3} className="m-1" key={idx}>
              <CWidgetStatsB className="mb-3 modern-widget" progress={{ color: w.color, value: 75 }} title={w.title} value={w.value} />
            </CCol>
          ))}
        </CRow>
      </div>
    </div>
  )
}

export default Home
