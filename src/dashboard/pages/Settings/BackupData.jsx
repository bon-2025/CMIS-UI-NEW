import React from 'react'
import { CAlert, CRow, CCol } from '@coreui/react'
import { FaDatabase } from 'react-icons/fa'
import { useBackupData } from '../../hook/Settings/useBackupData'
import { ManualBackup } from '../../components/Settings/BackupData/ManualBackup'
import { RestoreBackup } from '../../components/Settings/BackupData/RestoreBackup'
import { AutoBackup } from '../../components/Settings/BackupData/AutoBackup'

const BackupData = () => {
  const backup = useBackupData()

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaDatabase className="me-2 text-primary" /> Backup Data
      </h2>

      {backup.alert.message && (
        <CAlert color={backup.alert.type} dismissible onClose={() => backup.setAlert({ type: '', message: '' })}>
          {backup.alert.message}
        </CAlert>
      )}

      <CRow>
        <CCol md={6}><ManualBackup {...backup} /></CCol>
        <CCol md={6}><RestoreBackup {...backup} /></CCol>
      </CRow>

      <AutoBackup autoBackup={backup.autoBackup} toggleAutoBackup={backup.toggleAutoBackup} />
    </div>
  )
}

export default BackupData
