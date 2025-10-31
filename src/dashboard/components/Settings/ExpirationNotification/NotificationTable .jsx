import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from '@coreui/react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export const NotificationTable = ({ notifications, onEdit, onDelete }) => (
  <CTable hover responsive>
    <CTableHead color="dark">
      <CTableRow>
        <CTableHeaderCell>#</CTableHeaderCell>
        <CTableHeaderCell>Type</CTableHeaderCell>
        <CTableHeaderCell>Days Before Expiration</CTableHeaderCell>
        <CTableHeaderCell>Status</CTableHeaderCell>
        <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      {notifications.length ? (
        notifications.map((notif, index) => (
          <CTableRow key={notif.id}>
            <CTableHeaderCell>{index + 1}</CTableHeaderCell>
            <CTableDataCell>{notif.type}</CTableDataCell>
            <CTableDataCell>{notif.daysBefore} days</CTableDataCell>
            <CTableDataCell>
              <span className={`badge ${notif.enabled ? 'bg-success' : 'bg-secondary'}`}>
                {notif.enabled ? 'Enabled' : 'Disabled'}
              </span>
            </CTableDataCell>
            <CTableDataCell className="text-center">
              <CButton color="info" size="sm" className="me-2" onClick={() => onEdit(notif)}>
                <FaEdit />
              </CButton>
              <CButton color="danger" size="sm" onClick={() => onDelete(notif.id)}>
                <FaTrashAlt />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))
      ) : (
        <CTableRow>
          <CTableDataCell colSpan={5} className="text-center text-muted">
            No notification settings available.
          </CTableDataCell>
        </CTableRow>
      )}
    </CTableBody>
  </CTable>
)
