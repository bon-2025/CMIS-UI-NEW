import React from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody, CForm, CFormInput, CModalFooter, CButton } from '@coreui/react'

export const EmployeeModal = ({ visible, onClose, formData, setFormData, onSubmit, editMode }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>{editMode ? 'Edit Employee' : 'Add New Employee'}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={onSubmit}>
          <CFormInput className="mb-3" label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
          <CFormInput className="mb-3" label="Role/Position" name="role" value={formData.role} onChange={handleChange} required />
          <CFormInput className="mb-3" type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
          <CModalFooter>
            <CButton color="secondary" onClick={onClose}>Cancel</CButton>
            <CButton color="primary" type="submit">{editMode ? 'Save Changes' : 'Add Employee'}</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  )
}
