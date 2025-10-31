import React from 'react'
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'

export const AutoBackup = ({ autoBackup, toggleAutoBackup }) => (
  <CCard className="shadow-sm border-0">
    <CCardBody>
      <CCardTitle className="fw-bold fs-5 mb-3">Automatic Backup</CCardTitle>
      <CCardText>
        Enable this option to automatically back up your data at regular intervals.
      </CCardText>
      <CButton color={autoBackup ? 'danger' : 'success'} onClick={toggleAutoBackup}>
        {autoBackup ? 'Disable Auto Backup' : 'Enable Auto Backup'}
      </CButton>
    </CCardBody>
  </CCard>
)
