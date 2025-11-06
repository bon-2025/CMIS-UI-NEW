// src/components/ActivityLog/ActivityLogTable.jsx
import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CBadge,
} from '@coreui/react'
import { getBadgeColor } from '../../../utils/Log/activityLogUtils'

export const ActivityLogTable = ({ logs }) => (
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
      {logs.length > 0 ? (
        logs.map((log) => (
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
)
