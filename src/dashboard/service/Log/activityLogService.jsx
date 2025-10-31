// src/services/activityLogService.js

export const fetchActivityLogs = async () => {
  // Simulated API response
  return [
    { id: 1, user: 'Admin', action: 'Updated Contract #203', date: '2025-10-20', type: 'Update' },
    { id: 2, user: 'Elay', action: 'Updated Contract #203', date: '2025-10-19', type: 'Update' },
    { id: 3, user: 'Ramon', action: 'Deleted Record #18', date: '2025-10-18', type: 'Delete' },
    { id: 4, user: 'Admin', action: 'Renewed Business Permit', date: '2025-10-17', type: 'Renewal' },
    { id: 5, user: 'Jessa', action: 'Added new Employee', date: '2025-10-16', type: 'Add' },
  ]
}
