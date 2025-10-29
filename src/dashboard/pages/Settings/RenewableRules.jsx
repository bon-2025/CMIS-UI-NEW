import React, { useState } from 'react'
import {
  CCard, CCardBody, CCardTitle, CButton, CForm, CFormInput, CFormCheck,
  CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell,
  CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter
} from '@coreui/react'
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'

const RenewableRules = () => {
  const [rules, setRules] = useState([
    { id: 1, contractType: 'Temporary Burial', renewable: true, feeRequired: true },
    { id: 2, contractType: 'Rental Burial', renewable: true, feeRequired: false },
    { id: 3, contractType: 'Private Lot', renewable: false, feeRequired: false },
  ])

  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    contractType: '',
    renewable: false,
    feeRequired: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheck = (e) => {
    const { name, checked } = e.target
    setFormData({ ...formData, [name]: checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      setRules(rules.map(rule => (rule.id === editing.id ? { ...rule, ...formData } : rule)))
    } else {
      setRules([...rules, { id: Date.now(), ...formData }])
    }
    setVisible(false)
    setEditing(null)
    setFormData({ contractType: '', renewable: false, feeRequired: false })
  }

  const handleEdit = (rule) => {
    setEditing(rule)
    setFormData(rule)
    setVisible(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this renewable rule?')) {
      setRules(rules.filter(rule => rule.id !== id))
    }
  }

  return (
    <div className="p-4 bg-light">
      <h2 className="fw-bold mb-4">Renewable Rules</h2>
      <p className="text-muted mb-4">
        Define which contracts can be renewed. Each renewal automatically extends the contract by <strong>1 year</strong>.
      </p>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CCardTitle className="fw-bold fs-5">Renewal Rules</CCardTitle>
            <CButton color="primary" onClick={() => setVisible(true)}>
              <FaPlus className="me-2" /> Add Rule
            </CButton>
          </div>

          <CTable hover responsive>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Contract Type</CTableHeaderCell>
                <CTableHeaderCell>Renewable</CTableHeaderCell>
                <CTableHeaderCell>Renewal Period</CTableHeaderCell>
                <CTableHeaderCell>Fee Required</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {rules.length > 0 ? (
                rules.map((rule, index) => (
                  <CTableRow key={rule.id}>
                    <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{rule.contractType}</CTableDataCell>
                    <CTableDataCell>{rule.renewable ? 'Yes' : 'No'}</CTableDataCell>
                    <CTableDataCell>
                      {rule.renewable ? 'Extends by 1 Year' : '—'}
                    </CTableDataCell>
                    <CTableDataCell>{rule.feeRequired ? 'Yes' : 'No'}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton color="info" size="sm" className="me-2" onClick={() => handleEdit(rule)}>
                        <FaEdit />
                      </CButton>
                      <CButton color="danger" size="sm" onClick={() => handleDelete(rule.id)}>
                        <FaTrashAlt />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="6" className="text-center text-muted">
                    No renewable rules available.
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)} alignment="center">
        <CModalHeader>
          <CModalTitle>{editing ? 'Edit Renewable Rule' : 'Add Renewable Rule'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              label="Contract Type"
              name="contractType"
              value={formData.contractType}
              onChange={handleChange}
              placeholder="e.g., Niche Rental"
              required
            />

            <CFormCheck
              className="mb-3"
              label="Renewable (adds 1 year upon renewal)"
              name="renewable"
              checked={formData.renewable}
              onChange={handleCheck}
            />

            <CFormCheck
              className="mb-3"
              label="Require Renewal Fee"
              name="feeRequired"
              checked={formData.feeRequired}
              onChange={handleCheck}
            />

            <div className="text-end">
              <CButton color="secondary" className="me-2" onClick={() => setVisible(false)}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                {editing ? 'Update' : 'Add'}
              </CButton>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter></CModalFooter>
      </CModal>
    </div>
  )
}

export default RenewableRules
