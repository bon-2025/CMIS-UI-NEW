// src/pages/ChangePassword.jsx
import React from 'react'
import { CCard, CCardBody, CCardTitle } from '@coreui/react'
import { FaLock } from 'react-icons/fa'
import { useChangePassword } from '../../hook/Settings/useChangePassword'
import { PasswordForm } from '../../components/Settings/ChangePassword/PasswordForm'

const ChangePassword = () => {
  const passwordHook = useChangePassword()

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaLock className="me-2 text-primary" /> Change Password
      </h2>

      <CCard className="shadow-sm border-0 mx-auto" style={{ maxWidth: '500px' }}>
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3">Update Your Password</CCardTitle>

          <PasswordForm {...passwordHook} />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ChangePassword
