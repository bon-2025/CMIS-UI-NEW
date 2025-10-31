import { useState, useEffect } from 'react'
import { getDashboardData } from '../../service/Home/dashboardService'

export const useWidgetData = () => {
  const [widgets, setWidgets] = useState([])
  const [chartData, setChartData] = useState(null)
  const [statusWidgets, setStatusWidgets] = useState([])

  useEffect(() => {
    const data = getDashboardData()
    setWidgets(data.widgets)
    setChartData(data.chartData)
    setStatusWidgets(data.statusWidgets)
  }, [])

  return { widgets, chartData, statusWidgets }
}
