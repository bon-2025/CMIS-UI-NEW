// src/pages/ContractDuration.jsx
import React from 'react'
import { CCard, CCardBody, CCardTitle, CButton, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'
import { useContractDuration } from '../../hook/Settings/useContractDuration'
import { ContractForm } from '../../components/Settings/ContractDuration/ContractForm'

const ContractDuration = () => {
  const {
    durations,
    visible,
    formData,
    editing,
    setVisible,
    handleChange,
    handlePermanentChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useContractDuration()

  return (
    <div className="p-4 bg-light flui">
      <h2 className="fw-bold mb-4">Contract Duration Settings</h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CCardTitle className="fw-bold fs-5">Contract Type List</CCardTitle>
            <CButton color="primary" onClick={() => setVisible(true)}>
              <FaPlus className="me-2" /> Add Contract Type
            </CButton>
          </div>

          <CTable hover responsive>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Contract Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                <CTableHeaderCell scope="col">Permanent</CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {durations.length > 0 ? (
                durations.map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.isPermanent ? '—' : item.duration}</CTableDataCell>
                    <CTableDataCell>{item.isPermanent ? 'Yes' : 'No'}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton color="info" size="sm" className="me-2" onClick={() => handleEdit(item)}>
                        <FaEdit />
                      </CButton>
                      <CButton color="danger" size="sm" onClick={() => handleDelete(item.id)}>
                        <FaTrashAlt />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="5" className="text-center text-muted">
                    No contract types available.
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <ContractForm
        visible={visible}
        setVisible={setVisible}
        editing={editing}
        formData={formData}
        handleChange={handleChange}
        handlePermanentChange={handlePermanentChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default ContractDuration
