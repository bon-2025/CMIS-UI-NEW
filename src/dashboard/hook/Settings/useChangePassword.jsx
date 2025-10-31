// src/hooks/useChangePassword.js
import { useState } from 'react'
import { changePassword } from '../../service/Settings/passwordService'

export const useChangePassword = () => {
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
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const toggleShowPassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] })
  }

  const handleSubmit = async (e) => {
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

    setLoading(true)
    try {
      const response = await changePassword({ currentPassword, newPassword })
      setAlert({ type: 'success', message: response.message })
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } catch (err) {
      setAlert({ type: 'danger', message: err.message || 'Error changing password.' })
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    showPassword,
    alert,
    loading,
    handleChange,
    toggleShowPassword,
    handleSubmit,
    setAlert,
  }
}
