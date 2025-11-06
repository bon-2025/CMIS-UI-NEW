// src/components/LoginLogTable.jsx
import React from 'react'
import { CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody, CTableDataCell, CBadge } from '@coreui/react'

export const LoginLogTable = ({ logs, getBadgeColor }) => (
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
      {logs.length > 0 ? (
        logs.map((log) => (
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
)
