// src/services/contractService.js
export const getContractDurations = async () => {
  // Mock fetching
  return [
    { id: 1, name: 'Rental Burial', duration: '10 Years', isPermanent: false },
    { id: 2, name: 'Private Lot', duration: 'Permanent', isPermanent: true },
  ]
}

export const addContractDuration = async (data) => {
  return { id: Date.now(), ...data }
}

export const updateContractDuration = async (id, data) => {
  return { id, ...data }
}

export const deleteContractDuration = async (id) => {
  return true
}
