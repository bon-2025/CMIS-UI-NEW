// src/components/Year/YearFilters.jsx
import React from 'react'

export const YearFilters = ({ selectedYear, setSelectedYear }) => {
  return (
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
  )
}
