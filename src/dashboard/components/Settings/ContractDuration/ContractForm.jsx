// src/components/ContractForm.jsx
import React from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CForm, CFormInput, CFormCheck, CButton } from '@coreui/react'

export const ContractForm = ({
  visible,
  setVisible,
  editing,
  formData,
  handleChange,
  handlePermanentChange,
  handleSubmit,
}) => (
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
)
