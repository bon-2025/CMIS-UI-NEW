import React, { useState } from 'react'
import { CCard, CCardBody, CCardTitle, CButton, CAlert } from '@coreui/react'
import { FaUsersCog, FaPlus } from 'react-icons/fa'
import { useEmployees } from '../../hook/Settings/useEmployees'
import { EmployeeTable } from '../../components/Settings/EmployeeControls/EmployeeTable'
import { EmployeeModal } from '../../components/Settings/EmployeeControls/EmployeeModal'

const EmployeeControls = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee, alert, setAlert } = useEmployees()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({ id: '', name: '', role: '', email: '' })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.role || !formData.email) {
      setAlert({ type: 'danger', message: 'Please fill in all fields.' })
      return
    }

    editMode ? updateEmployee(formData) : addEmployee(formData)
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

          {alert.message && <CAlert color={alert.type} dismissible onClose={() => setAlert({ type: '', message: '' })}>{alert.message}</CAlert>}

          <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={deleteEmployee} />
        </CCardBody>
      </CCard>

      <EmployeeModal
        visible={visible}
        onClose={() => setVisible(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editMode={editMode}
      />
    </div>
  )
}

export default EmployeeControls
