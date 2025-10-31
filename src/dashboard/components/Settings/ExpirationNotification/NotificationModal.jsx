import { CModal, CModalHeader, CModalTitle, CModalBody, CForm, CFormSelect, CFormInput, CFormSwitch, CButton } from '@coreui/react'

export const NotificationModal = ({ visible, onClose, onSubmit, formData, setFormData, editing }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  return (
    <CModal visible={visible} onClose={onClose} alignment="center">
      <CModalHeader>
        <CModalTitle>{editing ? 'Edit Notification' : 'Add Notification Setting'}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={onSubmit}>
          <CFormSelect className="mb-3" label="Notification Type" name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="In-App">In-App Notification</option>
          </CFormSelect>

          <CFormInput
            className="mb-3"
            type="number"
            label="Days Before Expiration"
            name="daysBefore"
            placeholder="Enter number of days before expiration"
            value={formData.daysBefore}
            onChange={handleChange}
            required
          />

          <div className="d-flex align-items-center mb-3">
            <CFormSwitch id="enableSwitch" label="Enable Notification" name="enabled" checked={formData.enabled} onChange={handleChange} />
          </div>

          <div className="text-end">
            <CButton color="secondary" className="me-2" onClick={onClose}>Cancel</CButton>
            <CButton color="primary" type="submit">{editing ? 'Update' : 'Add'}</CButton>
          </div>
        </CForm>
      </CModalBody>
    </CModal>
  )
}
