// src/components/Archive/ArchiveRecords.jsx
import React from 'react'
import { CAlert, CRow, CCol } from '@coreui/react'
import { FaArchive } from 'react-icons/fa'
import { useArchiveRecords } from '../../hook/Log/useArchiveRecords'
import { ArchiveForm } from '../../components/Logs/Archive/ArchiveForm'

const ArchiveRecords = () => {
  const { formData, handleChange, handleArchive, isArchiving, progress, alert, setAlert } = useArchiveRecords()

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaArchive className="me-2 text-secondary" /> Archive Records
      </h2>

      {alert.message && (
        <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </CAlert>
      )}

      <CRow>
        <CCol md={8} lg={6}>
          <ArchiveForm
            formData={formData}
            handleChange={handleChange}
            handleArchive={handleArchive}
            isArchiving={isArchiving}
            progress={progress}
          />
        </CCol>
      </CRow>
    </div>
  )
}

export default ArchiveRecords
