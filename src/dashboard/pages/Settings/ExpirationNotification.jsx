import { useState } from 'react'
import { CCard, CCardBody, CCardTitle, CButton } from '@coreui/react'
import { FaBell, FaPlus } from 'react-icons/fa'
import { useNotifications } from '../../hook/Settings/useNotifications'
import { NotificationModal } from '../../components/Settings/ExpirationNotification/NotificationModal'
import { NotificationTable } from '../../components/Settings/ExpirationNotification/NotificationTable '

const ExpirationNotification = () => {
  const { notifications, addNotification, updateNotification, deleteNotification } = useNotifications()
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({ type: '', daysBefore: '', enabled: true })

  const handleEdit = (notif) => { setEditing(notif); setFormData({ ...notif }); setVisible(true) }
  const handleDelete = (id) => { if(window.confirm('Are you sure?')) deleteNotification(id) }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(editing) updateNotification({ ...editing, ...formData })
    else addNotification(formData)
    setVisible(false)
    setEditing(null)
    setFormData({ type: '', daysBefore: '', enabled: true })
  }

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 d-flex align-items-center"><FaBell className="me-2 text-warning" /> Expiration Notification Settings</h2>
      <CCard className="shadow-sm border-0">
        <CCardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CCardTitle className="fw-bold fs-5">Notification List</CCardTitle>
            <CButton color="primary" onClick={()=>setVisible(true)}><FaPlus className="me-2"/> Add Notification</CButton>
          </div>
          <NotificationTable notifications={notifications} onEdit={handleEdit} onDelete={handleDelete} />
          <NotificationModal visible={visible} onClose={()=>setVisible(false)} onSubmit={handleSubmit} formData={formData} setFormData={setFormData} editing={editing} />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ExpirationNotification
