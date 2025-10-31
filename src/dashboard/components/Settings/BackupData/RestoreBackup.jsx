import React from 'react'
import { CCard, CCardBody, CCardTitle, CCardText, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CForm, CFormInput, CModalFooter } from '@coreui/react'
import { FaSyncAlt } from 'react-icons/fa'

export const RestoreBackup = ({ showRestoreModal, setShowRestoreModal, handleRestore, handleFileChange }) => (
  <>
    <CCard className="shadow-sm border-0 mb-4">
      <CCardBody>
        <CCardTitle className="fw-bold fs-5 mb-3">Restore from Backup</CCardTitle>
        <CCardText>
          Restore your data from a previously created backup file.
        </CCardText>
        <CButton color="warning" onClick={() => setShowRestoreModal(true)}>
          <FaSyncAlt className="me-2" /> Restore Data
        </CButton>
      </CCardBody>
    </CCard>

    <CModal visible={showRestoreModal} onClose={() => setShowRestoreModal(false)}>
      <CModalHeader>
        <CModalTitle>Restore Data</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleRestore}>
          <CFormInput type="file" accept=".zip,.bak" label="Select Backup File" onChange={handleFileChange} />
          <CModalFooter className="mt-3">
            <CButton color="secondary" onClick={() => setShowRestoreModal(false)}>Cancel</CButton>
            <CButton color="primary" type="submit">Restore</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  </>
)
