// src/pages/LoginLog.jsx
import React from 'react'
import { CCard, CCardBody, CCardTitle } from '@coreui/react'
import { FaSignInAlt } from 'react-icons/fa'
import { useLoginLogs } from '../../hook/Log/useLoginLogs'
import { LoginLogTable } from '../../components/Logs/LoginLog/LoginLogTable'
import { LoginLogFilters } from '../../components/Logs/LoginLog/LoginLogFilters'

const LoginLog = () => {
  const { logs, search, setSearch, filter, setFilter, getBadgeColor } = useLoginLogs()

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaSignInAlt className="me-2 text-secondary" /> Login Log
      </h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">User Login Activity</CCardTitle>

          <LoginLogFilters
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />

          <LoginLogTable logs={logs} getBadgeColor={getBadgeColor} />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default LoginLog
