// src/services/loginLogService.js
export const fetchLoginLogs = async () => {
  // Replace with actual API call
  return [
    { id: 1, user: 'Admin', status: 'Success', ip: '192.168.0.101', date: '2025-10-25 09:45 AM' },
    { id: 2, user: 'Elay', status: 'Failed', ip: '192.168.0.105', date: '2025-10-25 08:22 AM' },
    { id: 3, user: 'Maria', status: 'Success', ip: '192.168.0.108', date: '2025-10-24 06:55 PM' },
    { id: 4, user: 'Ramon', status: 'Success', ip: '192.168.0.103', date: '2025-10-24 05:11 PM' },
    { id: 5, user: 'Jessa', status: 'Failed', ip: '192.168.0.110', date: '2025-10-24 01:09 PM' },
    { id: 6, user: 'Admin', status: 'Success', ip: '192.168.0.101', date: '2025-10-23 09:30 AM' },
  ]
}
