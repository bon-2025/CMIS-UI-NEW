import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CAlert,
  CProgress,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CFormInput,
  CRow,
  CCol,
} from '@coreui/react'
import { FaDatabase, FaCloudUploadAlt, FaDownload, FaSyncAlt } from 'react-icons/fa'

const BackupData = () => {
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [backupProgress, setBackupProgress] = useState(0)
  const [showRestoreModal, setShowRestoreModal] = useState(false)
  const [file, setFile] = useState(null)
  const [autoBackup, setAutoBackup] = useState(false)

  const handleBackup = () => {
    setBackupProgress(0)
    setAlert({ type: 'info', message: 'Starting backup process...' })

    const simulateBackup = setInterval(() => {
      setBackupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(simulateBackup)
          setAlert({ type: 'success', message: 'Backup completed successfully!' })
          return 100
        }
        return prev + 20
      })
    }, 400)
  }

  const handleDownloadBackup = () => {
    setAlert({ type: 'success', message: 'Backup file is ready for download.' })
    // You can add backend integration to trigger file download
  }

  const handleRestore = (e) => {
    e.preventDefault()
    if (!file) {
      setAlert({ type: 'danger', message: 'Please select a backup file first.' })
      return
    }
    setAlert({ type: 'info', message: 'Restoring data from backup file...' })
    setTimeout(() => {
      setShowRestoreModal(false)
      setAlert({ type: 'success', message: 'Data restored successfully from backup!' })
    }, 1500)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const toggleAutoBackup = () => {
    setAutoBackup(!autoBackup)
    setAlert({
      type: 'primary',
      message: autoBackup
        ? 'Automatic backup disabled.'
        : 'Automatic backup enabled. Your data will be backed up daily.',
    })
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaDatabase className="me-2 text-primary" /> Backup Data
      </h2>

      {alert.message && (
        <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </CAlert>
      )}

      <CRow>
        <CCol md={6}>
          <CCard className="shadow-sm border-0 mb-4">
            <CCardBody>
              <CCardTitle className="fw-bold fs-5 mb-3">Manual Backup</CCardTitle>
              <CCardText>
                Create a manual backup of all records and system configurations.  
                This ensures you have a safe copy of your data in case of unexpected loss.
              </CCardText>

              <div className="d-flex gap-2 mt-3">
                <CButton color="primary" onClick={handleBackup}>
                  <FaCloudUploadAlt className="me-2" /> Start Backup
                </CButton>
                <CButton color="success" onClick={handleDownloadBackup}>
                  <FaDownload className="me-2" /> Download Backup
                </CButton>
              </div>

              {backupProgress > 0 && (
                <CProgress className="mt-3" value={backupProgress}>
                  {backupProgress}%
                </CProgress>
              )}
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={6}>
          <CCard className="shadow-sm border-0 mb-4">
            <CCardBody>
              <CCardTitle className="fw-bold fs-5 mb-3">Restore from Backup</CCardTitle>
              <CCardText>
                Restore your data from a previously created backup file.  
                Make sure you choose the correct file before restoring.
              </CCardText>
              <CButton color="warning" onClick={() => setShowRestoreModal(true)}>
                <FaSyncAlt className="me-2" /> Restore Data
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">Automatic Backup</CCardTitle>
          <CCardText>
            Enable this option to automatically back up your data at regular intervals.  
            This ensures that all new updates are safely stored.
          </CCardText>
          <CButton
            color={autoBackup ? 'danger' : 'success'}
            onClick={toggleAutoBackup}
          >
            {autoBackup ? 'Disable Auto Backup' : 'Enable Auto Backup'}
          </CButton>
        </CCardBody>
      </CCard>

      {/* Restore Modal */}
      <CModal visible={showRestoreModal} onClose={() => setShowRestoreModal(false)}>
        <CModalHeader>
          <CModalTitle>Restore Data</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleRestore}>
            <CFormInput
              type="file"
              accept=".zip,.bak"
              label="Select Backup File"
              onChange={handleFileChange}
            />
            <CModalFooter className="mt-3">
              <CButton color="secondary" onClick={() => setShowRestoreModal(false)}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Restore
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default BackupData
