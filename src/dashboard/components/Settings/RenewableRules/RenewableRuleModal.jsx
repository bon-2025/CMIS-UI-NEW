import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CForm, CFormInput, CFormCheck, CButton } from '@coreui/react'

export const RenewableRuleModal = ({ visible, onClose, onSubmit, formData, setFormData, editing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheck = (e) => {
    const { name, checked } = e.target
    setFormData({ ...formData, [name]: checked })
  }

  return (
    <CModal visible={visible} onClose={onClose} alignment="center">
      <CModalHeader>
        <CModalTitle>{editing ? 'Edit Renewable Rule' : 'Add Renewable Rule'}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={onSubmit}>
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
            <CButton color="secondary" className="me-2" onClick={onClose}>Cancel</CButton>
            <CButton color="primary" type="submit">{editing ? 'Update' : 'Add'}</CButton>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter></CModalFooter>
    </CModal>
  )
}
