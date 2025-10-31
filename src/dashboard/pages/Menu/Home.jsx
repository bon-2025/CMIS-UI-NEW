import React from 'react'
import { StatusChart } from '../../components/Home/StatusChart'
import { StatusWidgetGroup } from '../../components/Home/StatusWidgetGroup'
import { TopWidgetGroup } from '../../components/Home/TopWidgetGroup'
import { useWidgetData } from '../../hook/Home/useWidgetData'
import './Home.css'

const Home = () => {
  const { widgets, chartData, statusWidgets } = useWidgetData()

  return (
    <div className="container-fluid p-3">
      {/* ✅ Top widgets section */}
      <TopWidgetGroup widgets={widgets} chartData={chartData} />

      {/* Chart section */}
      <div className="container-fluid bg-light p-3 border border-dark-subtle">
        <StatusChart />
      </div>

      {/* ✅ Status widgets section */}
      <StatusWidgetGroup widgets={statusWidgets} />
    </div>
  )
}

export default Home
