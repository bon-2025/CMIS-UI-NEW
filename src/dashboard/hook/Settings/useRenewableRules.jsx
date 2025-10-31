import { useState } from 'react'

export const useRenewableRules = () => {
  const [rules, setRules] = useState([
    { id: 1, contractType: 'Temporary Burial', renewable: true, feeRequired: true },
    { id: 2, contractType: 'Rental Burial', renewable: true, feeRequired: false },
    { id: 3, contractType: 'Private Lot', renewable: false, feeRequired: false },
  ])

  const addRule = (rule) => setRules([...rules, { ...rule, id: Date.now() }])
  
  const updateRule = (updatedRule) =>
    setRules(rules.map((r) => (r.id === updatedRule.id ? updatedRule : r)))

  const deleteRule = (id) => setRules(rules.filter((r) => r.id !== id))

  return { rules, addRule, updateRule, deleteRule }
}
