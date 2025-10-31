import React from 'react'
import { CRow, CCol, CWidgetStatsB } from '@coreui/react'
import PropTypes from 'prop-types'

/**
 * StatusWidgetGroup
 * Renders a row of CoreUI progress widgets (e.g., Renewable / Expiring / Expired)
 * Accepts a list of status widgets as props.
 */
export const StatusWidgetGroup = ({ widgets }) => {
  return (
    <div className="container-fluid bg-light p-3 border border-dark-subtle">
      <CRow>
        {widgets.map((w, idx) => (
          <CCol xs={3} className="m-1" key={idx}>
            <CWidgetStatsB
              className="mb-3 modern-widget"
              progress={{ color: w.color, value: w.progress ?? 75 }}
              title={w.title}
              value={w.value}
            />
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

// ✅ Add prop validation (optional but recommended)
StatusWidgetGroup.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      progress: PropTypes.number,
    })
  ).isRequired,
}
