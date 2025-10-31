import { useState, useEffect } from 'react'
import * as employeeService from '../../service/Settings/employeeService'

export const useEmployees = () => {
  const [employees, setEmployees] = useState([])
  const [alert, setAlert] = useState({ type: '', message: '' })

  useEffect(() => {
    employeeService.getEmployees().then(setEmployees)
  }, [])

  const addEmployee = async (emp) => {
    const newEmp = await employeeService.addEmployee(emp)
    setEmployees((prev) => [...prev, newEmp])
    setAlert({ type: 'success', message: 'Employee added successfully.' })
  }

  const updateEmployee = async (emp) => {
    await employeeService.updateEmployee(emp)
    setEmployees((prev) => prev.map((e) => (e.id === emp.id ? emp : e)))
    setAlert({ type: 'success', message: 'Employee updated successfully.' })
  }

  const deleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      await employeeService.deleteEmployee(id)
      setEmployees((prev) => prev.filter((e) => e.id !== id))
      setAlert({ type: 'danger', message: 'Employee removed successfully.' })
    }
  }

  return { employees, addEmployee, updateEmployee, deleteEmployee, alert, setAlert }
}
