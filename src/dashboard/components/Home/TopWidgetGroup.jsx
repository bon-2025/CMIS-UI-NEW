import React from 'react'
import { CRow, CCol } from '@coreui/react'
import PropTypes from 'prop-types'
import LineChartWidget from './LineChartWidget'

/**
 * TopWidgetGroup
 * Renders a grid of summary widgets (Total / Active / Pending / Inactive)
 * Uses LineChartWidget internally for each item.
 */
export const TopWidgetGroup = ({ widgets, chartData }) => {
  return (
    <CRow className="p-3">
      {widgets.map((config, idx) => (
        <CCol sm={3} key={idx}>
          <LineChartWidget {...config} chartData={chartData} />
        </CCol>
      ))}
    </CRow>
  )
}

TopWidgetGroup.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  chartData: PropTypes.object.isRequired,
}
