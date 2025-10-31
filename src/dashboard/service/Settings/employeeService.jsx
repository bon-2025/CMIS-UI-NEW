let employeesDB = [
  { id: 1, name: 'John Doe', role: 'Planner', email: 'john@municipal.gov.ph' },
  { id: 2, name: 'Jane Smith', role: 'Coordinator', email: 'jane@municipal.gov.ph' },
]

export const getEmployees = () => {
  return Promise.resolve([...employeesDB])
}

export const addEmployee = (employee) => {
  const newEmp = { ...employee, id: Date.now() }
  employeesDB.push(newEmp)
  return Promise.resolve(newEmp)
}

export const updateEmployee = (employee) => {
  employeesDB = employeesDB.map((e) => (e.id === employee.id ? employee : e))
  return Promise.resolve(employee)
}

export const deleteEmployee = (id) => {
  employeesDB = employeesDB.filter((e) => e.id !== id)
  return Promise.resolve()
}
