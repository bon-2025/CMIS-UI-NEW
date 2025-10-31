// src/components/Month/MonthFilters.jsx
import React from 'react'

export const MonthFilters = ({
  selectedYear,
  selectedMonth,
  setSelectedYear,
  setSelectedMonth,
  monthsList,
}) => {
  return (
    <div className="mb-3 d-flex align-items-center gap-3 flex-wrap">
      {/* Year Filter */}
      <div>
        <label htmlFor="yearSelect" className="form-label fw-bold me-2">
          Year:
        </label>
        <select
          id="yearSelect"
          className="form-select d-inline-block w-auto"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      {/* Month Filter */}
      <div>
        <label htmlFor="monthSelect" className="form-label fw-bold me-2">
          Month:
        </label>
        <select
          id="monthSelect"
          className="form-select d-inline-block w-auto"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="All">All</option>
          {monthsList.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
