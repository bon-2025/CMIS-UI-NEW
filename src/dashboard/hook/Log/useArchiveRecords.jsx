// src/hooks/useArchiveRecords.js
import { useState } from 'react'
import { archiveRecords } from '../../service/Log/archiveService'
import { validateArchiveForm } from '../../utils/Log/archiveUtils'

export const useArchiveRecords = () => {
  const [formData, setFormData] = useState({ year: '', recordType: '', keyword: '' })
  const [isArchiving, setIsArchiving] = useState(false)
  const [progress, setProgress] = useState(0)
  const [alert, setAlert] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleArchive = async (e) => {
    e.preventDefault()
    const validation = validateArchiveForm(formData)
    if (!validation.valid) {
      setAlert({ type: 'danger', message: validation.message })
      return
    }

    setAlert({ type: 'info', message: 'Archiving process started...' })
    setIsArchiving(true)
    setProgress(0)

    const message = await archiveRecords(formData, setProgress)
    setIsArchiving(false)
    setAlert({ type: 'success', message })
  }

  return { formData, handleChange, handleArchive, isArchiving, progress, alert, setAlert }
}
