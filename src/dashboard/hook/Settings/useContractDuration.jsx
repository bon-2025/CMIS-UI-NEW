// src/hooks/useContractDuration.js
import { useState, useEffect } from 'react'
import {
  getContractDurations,
  addContractDuration,
  updateContractDuration,
  deleteContractDuration,
} from '../../service/Settings/contractService'

export const useContractDuration = () => {
  const [durations, setDurations] = useState([])
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({ name: '', duration: '', isPermanent: false })

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContractDurations()
      setDurations(data)
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePermanentChange = (e) => {
    const checked = e.target.checked
    setFormData({
      ...formData,
      isPermanent: checked,
      duration: checked ? 'Permanent' : '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editing) {
      const updated = await updateContractDuration(editing.id, formData)
      setDurations(durations.map(d => (d.id === editing.id ? updated : d)))
    } else {
      const added = await addContractDuration(formData)
      setDurations([...durations, added])
    }
    setVisible(false)
    setEditing(null)
    setFormData({ name: '', duration: '', isPermanent: false })
  }

  const handleEdit = (item) => {
    setEditing(item)
    setFormData({
      name: item.name,
      duration: item.isPermanent ? 'Permanent' : item.duration,
      isPermanent: item.isPermanent,
    })
    setVisible(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contract duration?')) {
      await deleteContractDuration(id)
      setDurations(durations.filter(d => d.id !== id))
    }
  }

  return {
    durations,
    visible,
    formData,
    editing,
    setVisible,
    handleChange,
    handlePermanentChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  }
}
