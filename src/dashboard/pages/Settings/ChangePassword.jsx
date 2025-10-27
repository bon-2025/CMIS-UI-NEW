import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CForm,
  CFormInput,
  CButton,
  CAlert,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { FaLock, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa'

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [alert, setAlert] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const toggleShowPassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { currentPassword, newPassword, confirmPassword } = formData

    if (!currentPassword || !newPassword || !confirmPassword) {
      setAlert({ type: 'danger', message: 'Please fill in all fields.' })
      return
    }

    if (newPassword.length < 8) {
      setAlert({ type: 'warning', message: 'New password must be at least 8 characters long.' })
      return
    }

    if (newPassword !== confirmPassword) {
      setAlert({ type: 'danger', message: 'New passwords do not match.' })
      return
    }

    // Simulate success (replace this with actual API call)
    setTimeout(() => {
      setAlert({ type: 'success', message: 'Password changed successfully!' })
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    }, 800)
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaLock className="me-2 text-primary" /> Change Password
      </h2>

      <CCard className="shadow-sm border-0 mx-auto" style={{ maxWidth: '500px' }}>
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">Update Your Password</CCardTitle>

          {alert.message && (
            <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
              {alert.message}
            </CAlert>
          )}

          <CForm onSubmit={handleSubmit}>
            {/* Current Password */}
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <FaKey />
              </CInputGroupText>
              <CFormInput
                type={showPassword.current ? 'text' : 'password'}
                name="currentPassword"
                placeholder="Current Password"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
              <CInputGroupText
                role="button"
                onClick={() => toggleShowPassword('current')}
              >
                {showPassword.current ? <FaEyeSlash /> : <FaEye />}
              </CInputGroupText>
            </CInputGroup>

            {/* New Password */}
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <FaLock />
              </CInputGroupText>
              <CFormInput
                type={showPassword.new ? 'text' : 'password'}
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <CInputGroupText
                role="button"
                onClick={() => toggleShowPassword('new')}
              >
                {showPassword.new ? <FaEyeSlash /> : <FaEye />}
              </CInputGroupText>
            </CInputGroup>

            {/* Confirm Password */}
            <CInputGroup className="mb-4">
              <CInputGroupText>
                <FaLock />
              </CInputGroupText>
              <CFormInput
                type={showPassword.confirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <CInputGroupText
                role="button"
                onClick={() => toggleShowPassword('confirm')}
              >
                {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
              </CInputGroupText>
            </CInputGroup>

            <div className="text-end">
              <CButton color="primary" type="submit">
                Update Password
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ChangePassword
