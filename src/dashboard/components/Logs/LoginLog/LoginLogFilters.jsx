// src/components/LoginLogFilters.jsx
import React from 'react'
import { CRow, CCol, CFormInput, CFormSelect } from '@coreui/react'

export const LoginLogFilters = ({ search, setSearch, filter, setFilter }) => (
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
)
