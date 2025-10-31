// src/components/Day/DayFilters.jsx
import React from "react"

export const DayFilters = ({
  dataset,
  selectedYear,
  selectedMonth,
  selectedDay,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDay,
  months,
  days,
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
          onChange={(e) => {
            setSelectedYear(e.target.value)
            setSelectedMonth("All")
            setSelectedDay("All")
          }}
        >
          {Object.keys(dataset).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
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
          onChange={(e) => {
            setSelectedMonth(e.target.value)
            setSelectedDay("All")
          }}
        >
          <option value="All">All</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Day Filter */}
      {selectedMonth !== "All" && (
        <div>
          <label htmlFor="daySelect" className="form-label fw-bold me-2">
            Day:
          </label>
          <select
            id="daySelect"
            className="form-select d-inline-block w-auto"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="All">All</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
