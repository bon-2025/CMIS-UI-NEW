import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormInput,
  CModalFooter,
  CAlert,
} from '@coreui/react'
import { FaUsersCog, FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

const EmployeeControls = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', role: 'Planner', email: 'john@municipal.gov.ph' },
    { id: 2, name: 'Jane Smith', role: 'Coordinator', email: 'jane@municipal.gov.ph' },
  ])

  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [formData, setFormData] = useState({ id: '', name: '', role: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAdd = () => {
    setFormData({ id: '', name: '', role: '', email: '' })
    setEditMode(false)
    setVisible(true)
  }

  const handleEdit = (emp) => {
    setFormData(emp)
    setEditMode(true)
    setVisible(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter((e) => e.id !== id))
      setAlert({ type: 'danger', message: 'Employee removed successfully.' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.role || !formData.email) {
      setAlert({ type: 'danger', message: 'Please fill in all fields.' })
      return
    }

    if (editMode) {
      setEmployees(
        employees.map((e) => (e.id === formData.id ? formData : e))
      )
      setAlert({ type: 'success', message: 'Employee updated successfully.' })
    } else {
      const newEmployee = { ...formData, id: Date.now() }
      setEmployees([...employees, newEmployee])
      setAlert({ type: 'success', message: 'Employee added successfully.' })
    }

    setVisible(false)
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center">
        <FaUsersCog className="me-2 text-primary" /> Employee Controls
      </h2>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <CCardTitle className="fw-bold fs-5 mb-3 d-flex justify-content-between align-items-center">
            Manage Employees
            <CButton color="primary" size="sm" onClick={handleAdd}>
              <FaPlus className="me-1" /> Add Employee
            </CButton>
          </CCardTitle>

          {alert.message && (
            <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>
              {alert.message}
            </CAlert>
          )}

          <CTable hover responsive>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">
                  Actions
                </CTableHeaderCell>
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
                    <CButton
                      color="info"
                      size="sm"
                      className="me-2 text-white"
                      onClick={() => handleEdit(emp)}
                    >
                      <FaEdit />
                    </CButton>
                    <CButton
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(emp.id)}
                    >
                      <FaTrash />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Add/Edit Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{editMode ? 'Edit Employee' : 'Add New Employee'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <CFormInput
              className="mb-3"
              label="Role/Position"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                {editMode ? 'Save Changes' : 'Add Employee'}
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default EmployeeControls
