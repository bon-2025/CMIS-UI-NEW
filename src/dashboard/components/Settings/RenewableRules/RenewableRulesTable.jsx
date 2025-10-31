import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from '@coreui/react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export const RenewableRulesTable = ({ rules, onEdit, onDelete }) => (
  <CTable hover responsive>
    <CTableHead color="dark">
      <CTableRow>
        <CTableHeaderCell>#</CTableHeaderCell>
        <CTableHeaderCell>Contract Type</CTableHeaderCell>
        <CTableHeaderCell>Renewable</CTableHeaderCell>
        <CTableHeaderCell>Renewal Period</CTableHeaderCell>
        <CTableHeaderCell>Fee Required</CTableHeaderCell>
        <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      {rules.length ? (
        rules.map((rule, index) => (
          <CTableRow key={rule.id}>
            <CTableHeaderCell>{index + 1}</CTableHeaderCell>
            <CTableDataCell>{rule.contractType}</CTableDataCell>
            <CTableDataCell>{rule.renewable ? 'Yes' : 'No'}</CTableDataCell>
            <CTableDataCell>{rule.renewable ? 'Extends by 1 Year' : '—'}</CTableDataCell>
            <CTableDataCell>{rule.feeRequired ? 'Yes' : 'No'}</CTableDataCell>
            <CTableDataCell className="text-center">
              <CButton color="info" size="sm" className="me-2" onClick={() => onEdit(rule)}>
                <FaEdit />
              </CButton>
              <CButton color="danger" size="sm" onClick={() => onDelete(rule.id)}>
                <FaTrashAlt />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))
      ) : (
        <CTableRow>
          <CTableDataCell colSpan={6} className="text-center text-muted">
            No renewable rules available.
          </CTableDataCell>
        </CTableRow>
      )}
    </CTableBody>
  </CTable>
)
