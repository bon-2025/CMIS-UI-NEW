import React from 'react'
import { CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CButton } from '@coreui/react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <CTable hover responsive>
      <CTableHead color="dark">
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {employees.map((emp, index) => (
          <CTableRow key={emp.id}>
            <CTableDataCell>{index + 1}</CTableDataCell>
            <CTableDataCell>{emp.name}</CTableDataCell>
            <CTableDataCell>{emp.role}</CTableDataCell>
            <CTableDataCell>{emp.email}</CTableDataCell>
            <CTableDataCell className="text-center">
              <CButton color="info" size="sm" className="me-2 text-white" onClick={() => onEdit(emp)}>
                <FaEdit />
              </CButton>
              <CButton color="danger" size="sm" onClick={() => onDelete(emp.id)}>
                <FaTrash />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}
