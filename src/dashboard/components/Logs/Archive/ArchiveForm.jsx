// src/components/Archive/ArchiveForm.jsx
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CProgress,
  CForm,
  CFormSelect,
  CFormInput,
} from '@coreui/react'
import { FaCheckCircle } from 'react-icons/fa'

export const ArchiveForm = ({ formData, handleChange, handleArchive, isArchiving, progress }) => (
  <CCard className="shadow-sm border-0">
    <CCardBody>
      <CCardTitle className="fw-bold fs-5 mb-3">Archive Old Records</CCardTitle>
      <CCardText>
        Select the criteria for records you want to archive. Archived data will be stored securely and can be restored anytime.
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

      {isArchiving && <CProgress className="mt-4" value={progress}>{progress}%</CProgress>}

      {progress === 100 && (
        <div className="text-center text-success mt-4">
          <FaCheckCircle size={40} className="mb-2" />
          <h6>Archive Complete!</h6>
        </div>
      )}
    </CCardBody>
  </CCard>
)
