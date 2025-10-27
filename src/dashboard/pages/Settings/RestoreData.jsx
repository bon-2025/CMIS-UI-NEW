import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CAlert,
  CProgress,
  CForm,
  CFormInput,
  CRow,
  CCol,
} from '@coreui/react'
import { FaCloudUploadAlt, FaDatabase, FaCheckCircle } from 'react-icons/fa'

const RestoreData = () => {
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [file, setFile] = useState(null)
  const [restoreProgress, setRestoreProgress] = useState(0)
  const [isRestoring, setIsRestoring] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleRestore = (e) => {
    e.preventDefault()

    if (!file) {
      setAlert({ type: 'danger', message: 'Please select a backup file before restoring.' })
      return
    }

    setAlert({ type: 'info', message: 'Restoration process started...' })
    setIsRestoring(true)
    setRestoreProgress(0)

    // Simulate restore progress
    const simulateRestore = setInterval(() => {
      setRestoreProgress((prev) => {
        if (prev >= 100) {
          clearInterval(simulateRestore)
          setIsRestoring(false)
          setAlert({ type: 'success', message: 'Data restored successfully!' })
          return 100
        }
        return prev + 20
      })
    }, 500)
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaCloudUploadAlt className="me-2 text-warning" /> Restore Data
      </h2>

      {alert.message && (
        <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </CAlert>
      )}

      <CRow>
        <CCol md={8} lg={6}>
          <CCard className="shadow-sm border-0">
            <CCardBody>
              <CCardTitle className="fw-bold fs-5 mb-3">Upload Backup File</CCardTitle>
              <CCardText>
                Choose a backup file to restore your system data.  
                Make sure the file is valid and generated from your system’s backup feature.
              </CCardText>

              <CForm onSubmit={handleRestore}>
                <CFormInput
                  type="file"
                  accept=".zip,.bak,.json"
                  label="Select Backup File"
                  onChange={handleFileChange}
                  disabled={isRestoring}
                />

                <div className="d-flex justify-content-end mt-3">
                  <CButton
                    color="warning"
                    type="submit"
                    disabled={isRestoring}
                    className="px-4 fw-semibold"
                  >
                    <FaDatabase className="me-2" />
                    {isRestoring ? 'Restoring...' : 'Start Restore'}
                  </CButton>
                </div>
              </CForm>

              {isRestoring && (
                <CProgress className="mt-4" value={restoreProgress}>
                  {restoreProgress}%
                </CProgress>
              )}

              {restoreProgress === 100 && (
                <div className="text-center text-success mt-4">
                  <FaCheckCircle size={40} className="mb-2" />
                  <h6>Restore Complete!</h6>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default RestoreData
