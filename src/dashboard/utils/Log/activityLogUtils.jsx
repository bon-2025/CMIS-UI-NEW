// src/utils/activityLogUtils.js

export const getBadgeColor = (type) => {
  switch (type) {
    case 'Login': return 'success'
    case 'Logout': return 'secondary'
    case 'Update': return 'info'
    case 'Delete': return 'danger'
    case 'Add': return 'primary'
    case 'Renewal': return 'warning'
    default: return 'light'
  }
}

export const filterLogs = (logs, search, filter) => {
  return logs.filter(log => {
    const matchesSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.user.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || log.type === filter
    return matchesSearch && matchesFilter
  })
}
