import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CAlert,
  CProgress,
  CForm,
  CFormSelect,
  CFormInput,
  CRow,
  CCol,
} from '@coreui/react'
import { FaArchive, FaCheckCircle } from 'react-icons/fa'

const ArchiveRecords = () => {
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [isArchiving, setIsArchiving] = useState(false)
  const [progress, setProgress] = useState(0)
  const [formData, setFormData] = useState({
    year: '',
    recordType: '',
    keyword: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleArchive = (e) => {
    e.preventDefault()

    if (!formData.year || !formData.recordType) {
      setAlert({ type: 'danger', message: 'Please fill in all required fields.' })
      return
    }

    setAlert({ type: 'info', message: 'Archiving process started...' })
    setIsArchiving(true)
    setProgress(0)

    // Simulate archive progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsArchiving(false)
          setAlert({ type: 'success', message: 'Records archived successfully!' })
          return 100
        }
        return prev + 20
      })
    }, 500)
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaArchive className="me-2 text-secondary" /> Archive Records
      </h2>

      {alert.message && (
        <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </CAlert>
      )}

      <CRow>
        <CCol md={8} lg={6}>
          <CCard className="shadow-sm border-0">
            <CCardBody>
              <CCardTitle className="fw-bold fs-5 mb-3">Archive Old Records</CCardTitle>
              <CCardText>
                Select the criteria for records you want to archive.  
                Archived data will be stored securely and can be restored anytime.
              </CCardText>

              <CForm onSubmit={handleArchive}>
                <div className="mb-3">
                  <CFormSelect
                    name="year"
                    label="Select Year"
                    value={formData.year}
                    onChange={handleChange}
                    disabled={isArchiving}
                    required
                  >
                    <option value="">-- Select Year --</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </CFormSelect>
                </div>

                <div className="mb-3">
                  <CFormSelect
                    name="recordType"
                    label="Record Type"
                    value={formData.recordType}
                    onChange={handleChange}
                    disabled={isArchiving}
                    required
                  >
                    <option value="">-- Select Type --</option>
                    <option value="contracts">Contracts</option>
                    <option value="permits">Permits</option>
                    <option value="licenses">Licenses</option>
                    <option value="employee">Employee Records</option>
                  </CFormSelect>
                </div>

                <div className="mb-3">
                  <CFormInput
                    type="text"
                    name="keyword"
                    label="Keyword (Optional)"
                    value={formData.keyword}
                    onChange={handleChange}
                    placeholder="e.g. Business Permit, Employee ID"
                    disabled={isArchiving}
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <CButton color="secondary" type="submit" disabled={isArchiving} className="px-4 fw-semibold">
                    {isArchiving ? 'Archiving...' : 'Start Archive'}
                  </CButton>
                </div>
              </CForm>

              {isArchiving && (
                <CProgress className="mt-4" value={progress}>
                  {progress}%
                </CProgress>
              )}

              {progress === 100 && (
                <div className="text-center text-success mt-4">
                  <FaCheckCircle size={40} className="mb-2" />
                  <h6>Archive Complete!</h6>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default ArchiveRecords
