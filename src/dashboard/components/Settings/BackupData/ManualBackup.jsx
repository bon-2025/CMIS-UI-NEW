import React from 'react'
import { CCard, CCardBody, CCardTitle, CCardText, CButton, CProgress } from '@coreui/react'
import { FaCloudUploadAlt, FaDownload } from 'react-icons/fa'

export const ManualBackup = ({ backupProgress, handleBackup, handleDownloadBackup }) => (
  <CCard className="shadow-sm border-0 mb-4">
    <CCardBody>
      <CCardTitle className="fw-bold fs-5 mb-3">Manual Backup</CCardTitle>
      <CCardText>
        Create a manual backup of all records and system configurations.
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
)
