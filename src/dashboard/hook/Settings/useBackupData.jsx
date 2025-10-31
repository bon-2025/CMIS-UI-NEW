// src/hooks/useBackupData.js
import { useState } from 'react'
import { simulateBackup, simulateRestore } from '../../service/Settings/backupService'

export const useBackupData = () => {
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [backupProgress, setBackupProgress] = useState(0)
  const [showRestoreModal, setShowRestoreModal] = useState(false)
  const [file, setFile] = useState(null)
  const [autoBackup, setAutoBackup] = useState(false)

  const handleBackup = async () => {
    setBackupProgress(0)
    setAlert({ type: 'info', message: 'Starting backup process...' })
    const message = await simulateBackup(setBackupProgress)
    setAlert({ type: 'success', message })
  }

  const handleDownloadBackup = () => {
    setAlert({ type: 'success', message: 'Backup file is ready for download.' })
    // Integrate with backend API for actual download
  }

  const handleRestore = async (e) => {
    e.preventDefault()
    try {
      setAlert({ type: 'info', message: 'Restoring data from backup file...' })
      const message = await simulateRestore(file)
      setShowRestoreModal(false)
      setAlert({ type: 'success', message })
    } catch (err) {
      setAlert({ type: 'danger', message: err })
    }
  }

  const handleFileChange = (e) => setFile(e.target.files[0])

  const toggleAutoBackup = () => {
    setAutoBackup(!autoBackup)
    setAlert({
      type: 'primary',
      message: autoBackup
        ? 'Automatic backup disabled.'
        : 'Automatic backup enabled. Your data will be backed up daily.',
    })
  }

  return {
    alert,
    setAlert,
    backupProgress,
    showRestoreModal,
    file,
    autoBackup,
    handleBackup,
    handleDownloadBackup,
    handleRestore,
    handleFileChange,
    toggleAutoBackup,
    setShowRestoreModal,
  }
}
