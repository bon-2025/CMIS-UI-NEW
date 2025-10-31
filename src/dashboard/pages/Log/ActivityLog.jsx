// src/components/ActivityLog/ActivityLog.jsx
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CRow,
  CCol,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import { FaClipboardList } from 'react-icons/fa'
import { useActivityLogs } from '../../hook/Log/useActivityLogs'
import { ActivityLogTable } from '../../components/Logs/Activitylog/ActivityLogTable'

const ActivityLog = () => {
  const { search, setSearch, filter, setFilter, filteredLogs } = useActivityLogs()

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaClipboardList className="me-2 text-secondary" /> Activity Log
      </h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">System Activities</CCardTitle>

          {/* Filters */}
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormInput
                type="text"
                placeholder="Search by user or action..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All Types</option>
                <option value="Login">Login</option>
                <option value="Logout">Logout</option>
                <option value="Add">Add</option>
                <option value="Update">Update</option>
                <option value="Delete">Delete</option>
                <option value="Renewal">Renewal</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <ActivityLogTable logs={filteredLogs} />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ActivityLog
