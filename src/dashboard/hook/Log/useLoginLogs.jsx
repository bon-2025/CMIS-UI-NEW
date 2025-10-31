// src/hooks/useLoginLogs.js
import { useState, useEffect } from 'react'
import { fetchLoginLogs } from '../../service/Log/loginLogService'

export const useLoginLogs = () => {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const loadLogs = async () => {
      const data = await fetchLoginLogs()
      setLogs(data)
    }
    loadLogs()
  }, [])

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || log.status === filter
    return matchesSearch && matchesFilter
  })

  const getBadgeColor = (status) => {
    switch (status) {
      case 'Success': return 'success'
      case 'Failed': return 'danger'
      default: return 'secondary'
    }
  }

  return {
    logs: filteredLogs,
    search,
    setSearch,
    filter,
    setFilter,
    getBadgeColor,
  }
}
