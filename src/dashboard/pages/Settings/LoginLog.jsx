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
import { FaSignInAlt } from 'react-icons/fa'

const LoginLog = () => {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  // Sample Data (Replace with API call)
  useEffect(() => {
    const sampleLogs = [
      { id: 1, user: 'Admin', status: 'Success', ip: '192.168.0.101', date: '2025-10-25 09:45 AM' },
      { id: 2, user: 'Elay', status: 'Failed', ip: '192.168.0.105', date: '2025-10-25 08:22 AM' },
      { id: 3, user: 'Maria', status: 'Success', ip: '192.168.0.108', date: '2025-10-24 06:55 PM' },
      { id: 4, user: 'Ramon', status: 'Success', ip: '192.168.0.103', date: '2025-10-24 05:11 PM' },
      { id: 5, user: 'Jessa', status: 'Failed', ip: '192.168.0.110', date: '2025-10-24 01:09 PM' },
      { id: 6, user: 'Admin', status: 'Success', ip: '192.168.0.101', date: '2025-10-23 09:30 AM' },
    ]
    setLogs(sampleLogs)
  }, [])

  // Filter and Search
  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || log.status === filter
    return matchesSearch && matchesFilter
  })

  // Badge colors
  const getBadgeColor = (status) => {
    switch (status) {
      case 'Success': return 'success'
      case 'Failed': return 'danger'
      default: return 'secondary'
    }
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaSignInAlt className="me-2 text-secondary" /> Login Log
      </h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">User Login Activity</CCardTitle>

          {/* Filters */}
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormInput
                type="text"
                placeholder="Search by username or IP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All Status</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
              </CFormSelect>
            </CCol>
          </CRow>

          {/* Table */}
          <CTable hover responsive align="middle">
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>ID</CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>IP Address</CTableHeaderCell>
                <CTableHeaderCell>Date & Time</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <CTableRow key={log.id}>
                    <CTableDataCell>{log.id}</CTableDataCell>
                    <CTableDataCell>{log.user}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color={getBadgeColor(log.status)}>{log.status}</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>{log.ip}</CTableDataCell>
                    <CTableDataCell>{log.date}</CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="5" className="text-center text-muted">
                    No login activity found.
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

export default LoginLog
