// src/hooks/useActivityLogs.js
import { useState, useEffect, useMemo } from 'react'
import { fetchActivityLogs } from '../../service/Log/activityLogService'
import { filterLogs } from '../../utils/Log/activityLogUtils'

export const useActivityLogs = () => {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const loadLogs = async () => {
      const data = await fetchActivityLogs()
      setLogs(data)
    }
    loadLogs()
  }, [])

  const filteredLogs = useMemo(() => filterLogs(logs, search, filter), [logs, search, filter])

  return { logs, search, setSearch, filter, setFilter, filteredLogs }
}
