import React, { useState } from 'react'
import {
  CCard, CCardBody, CCardTitle, CButton, CForm, CFormInput, CTable,
  CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell,
  CModal, CModalBody, CModalHeader, CModalTitle, CModalFooter, CFormCheck
} from '@coreui/react'
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'

const ContractDuration = () => {
  const [durations, setDurations] = useState([
    { id: 1, name: 'Temporary Burial', duration: '5 Years', isPermanent: false },
    { id: 2, name: 'Rental Burial', duration: '10 Years', isPermanent: false },
    { id: 3, name: 'Private Lot', duration: 'Permanent', isPermanent: true },
  ])

  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({ name: '', duration: '', isPermanent: false })

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle Permanent Toggle
  const handlePermanentChange = (e) => {
    const checked = e.target.checked
    setFormData({
      ...formData,
      isPermanent: checked,
      duration: checked ? 'Permanent' : ''
    })
  }

  // Handle Add or Update
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      setDurations(durations.map(d => (d.id === editing.id ? { ...d, ...formData } : d)))
    } else {
      setDurations([...durations, { id: Date.now(), ...formData }])
    }
    setVisible(false)
    setEditing(null)
    setFormData({ name: '', duration: '', isPermanent: false })
  }

  // Handle Edit
  const handleEdit = (item) => {
    setEditing(item)
    setFormData({
      name: item.name,
      duration: item.isPermanent ? 'Permanent' : item.duration,
      isPermanent: item.isPermanent
    })
    setVisible(true)
  }

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contract duration?')) {
      setDurations(durations.filter(d => d.id !== id))
    }
  }

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

      {/* Modal for Add/Edit */}
      <CModal visible={visible} onClose={() => setVisible(false)} alignment="center">
        <CModalHeader>
          <CModalTitle>{editing ? 'Edit Contract Duration' : 'Add Contract Duration'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Contract Type Name"
              placeholder="e.g., Temporary Burial"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <CFormCheck
              className="mb-3"
              label="Permanent (No Expiration)"
              checked={formData.isPermanent}
              onChange={handlePermanentChange}
            />

            {!formData.isPermanent && (
              <CFormInput
                className="mb-3"
                type="text"
                label="Duration"
                placeholder="e.g., 5 Years, 10 Years"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            )}

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

export default ContractDuration
