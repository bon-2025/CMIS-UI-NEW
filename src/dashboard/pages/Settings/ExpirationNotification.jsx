import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CForm,
  CFormInput,
  CFormSelect,
  CFormSwitch,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react'
import { FaBell, FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'

const ExpirationNotification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Email', daysBefore: 30, enabled: true },
    { id: 2, type: 'SMS', daysBefore: 15, enabled: false },
    { id: 3, type: 'In-App', daysBefore: 7, enabled: true },
  ])

  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    type: '',
    daysBefore: '',
    enabled: true,
  })

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  // Submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      setNotifications(
        notifications.map((n) => (n.id === editing.id ? { ...n, ...formData } : n))
      )
    } else {
      setNotifications([...notifications, { id: Date.now(), ...formData }])
    }
    setVisible(false)
    setEditing(null)
    setFormData({ type: '', daysBefore: '', enabled: true })
  }

  // Edit
  const handleEdit = (notif) => {
    setEditing(notif)
    setFormData({
      type: notif.type,
      daysBefore: notif.daysBefore,
      enabled: notif.enabled,
    })
    setVisible(true)
  }

  // Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this notification setting?')) {
      setNotifications(notifications.filter((n) => n.id !== id))
    }
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaBell className="me-2 text-warning" /> Expiration Notification Settings
      </h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CCardTitle className="fw-bold fs-5">Notification List</CCardTitle>
            <CButton color="primary" onClick={() => setVisible(true)}>
              <FaPlus className="me-2" /> Add Notification
            </CButton>
          </div>

          <CTable hover responsive>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Type</CTableHeaderCell>
                <CTableHeaderCell>Days Before Expiration</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <CTableRow key={notif.id}>
                    <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{notif.type}</CTableDataCell>
                    <CTableDataCell>{notif.daysBefore} days</CTableDataCell>
                    <CTableDataCell>
                      <span
                        className={`badge ${
                          notif.enabled ? 'bg-success' : 'bg-secondary'
                        }`}
                      >
                        {notif.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton
                        color="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(notif)}
                      >
                        <FaEdit />
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(notif.id)}
                      >
                        <FaTrashAlt />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan="5" className="text-center text-muted">
                    No notification settings available.
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Modal Add/Edit */}
      <CModal visible={visible} onClose={() => setVisible(false)} alignment="center">
        <CModalHeader>
          <CModalTitle>
            {editing ? 'Edit Notification' : 'Add Notification Setting'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormSelect
              className="mb-3"
              label="Notification Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
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
              <CFormSwitch
                id="enableSwitch"
                label="Enable Notification"
                name="enabled"
                checked={formData.enabled}
                onChange={handleChange}
              />
            </div>

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
      </CModal>
    </div>
  )
}

export default ExpirationNotification
