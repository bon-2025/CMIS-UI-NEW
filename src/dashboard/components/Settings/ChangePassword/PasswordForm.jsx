// src/components/PasswordForm.jsx
import React from 'react'
import {
  CForm,
  CFormInput,
  CButton,
  CAlert,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { FaLock, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa'

export const PasswordForm = ({
  formData,
  showPassword,
  alert,
  loading,
  handleChange,
  toggleShowPassword,
  handleSubmit,
  setAlert,
}) => (
  <>
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
        <CInputGroupText role="button" onClick={() => toggleShowPassword('current')}>
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
        <CInputGroupText role="button" onClick={() => toggleShowPassword('new')}>
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
        <CInputGroupText role="button" onClick={() => toggleShowPassword('confirm')}>
          {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
        </CInputGroupText>
      </CInputGroup>

      <div className="text-end">
        <CButton color="primary" type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Password'}
        </CButton>
      </div>
    </CForm>
  </>
)
