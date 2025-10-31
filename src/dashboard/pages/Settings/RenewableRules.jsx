import { useState } from 'react'
import { CCard, CCardBody, CCardTitle, CButton } from '@coreui/react'
import { FaPlus } from 'react-icons/fa'
import { useRenewableRules } from '../../hook/Settings/useRenewableRules'
import { RenewableRuleModal } from '../../components/Settings/RenewableRules/RenewableRuleModal'
import { RenewableRulesTable } from '../../components/Settings/RenewableRules/RenewableRulesTable'

const RenewableRules = () => {
  const { rules, addRule, updateRule, deleteRule } = useRenewableRules()
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({ contractType: '', renewable: false, feeRequired: false })

  const handleEdit = (rule) => { setEditing(rule); setFormData(rule); setVisible(true) }
  const handleDelete = (id) => { if(window.confirm('Are you sure?')) deleteRule(id) }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(editing) updateRule({ ...editing, ...formData })
    else addRule(formData)
    setVisible(false)
    setEditing(null)
    setFormData({ contractType: '', renewable: false, feeRequired: false })
  }

  return (
    <div className="p-4 bg-light">
      <h2 className="fw-bold mb-4">Renewable Rules</h2>
      <p className="text-muted mb-4">
        Define which contracts can be renewed. Each renewal automatically extends the contract by <strong>1 year</strong>.
      </p>

      <CCard className="shadow-sm border-0">
        <CCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CCardTitle className="fw-bold fs-5">Renewal Rules</CCardTitle>
            <CButton color="primary" onClick={() => setVisible(true)}><FaPlus className="me-2"/> Add Rule</CButton>
          </div>
          <RenewableRulesTable rules={rules} onEdit={handleEdit} onDelete={handleDelete} />
          <RenewableRuleModal visible={visible} onClose={()=>setVisible(false)} onSubmit={handleSubmit} formData={formData} setFormData={setFormData} editing={editing} />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default RenewableRules
