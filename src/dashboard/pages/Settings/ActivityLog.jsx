import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CFormSelect,
  CRow,
  CCol,
  CBadge,
} from '@coreui/react'
import { FaClipboardList } from 'react-icons/fa'

const ActivityLog = () => {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  // Sample Data (replace with API call)
  useEffect(() => {
    const sampleLogs = [
      { id: 1, user: 'Admin', action: 'Logged in', date: '2025-10-20', type: 'Login' },
      { id: 2, user: 'Elay', action: 'Updated Contract #203', date: '2025-10-19', type: 'Update' },
      { id: 3, user: 'Ramon', action: 'Deleted Record #18', date: '2025-10-18', type: 'Delete' },
      { id: 4, user: 'Admin', action: 'Renewed Business Permit', date: '2025-10-17', type: 'Renewal' },
      { id: 5, user: 'Maria', action: 'Logged out', date: '2025-10-17', type: 'Logout' },
      { id: 6, user: 'Jessa', action: 'Added new Employee', date: '2025-10-16', type: 'Add' },
    ]
    setLogs(sampleLogs)
  }, [])

  // Filter + Search
  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.action.toLowerCase().includes(search.toLowerCase()) || log.user.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || log.type === filter
    return matchesSearch && matchesFilter
  })

  // Badge color based on action type
  const getBadgeColor = (type) => {
    switch (type) {
      case 'Login': return 'success'
      case 'Logout': return 'secondary'
      case 'Update': return 'info'
      case 'Delete': return 'danger'
      case 'Add': return 'primary'
      case 'Renewal': return 'warning'
      default: return 'light'
    }
  }

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

          {/* Activity Table */}
          <CTable hover responsive align="middle">
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>ID</CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
                <CTableHeaderCell>Type</CTableHeaderCell>
                <CTableHeaderCell>Date</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <CTableRow key={log.id}>
                    <CTableDataCell>{log.id}</CTableDataCell>
                    <CTableDataCell>{log.user}</CTableDataCell>
                    <CTableDataCell>{log.action}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color={getBadgeColor(log.type)}>{log.type}</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>{log.date}</CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="5" className="text-center text-muted">
                    No activity found.
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ActivityLog
