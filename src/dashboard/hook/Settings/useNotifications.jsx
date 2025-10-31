import { useState } from 'react'

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Email', daysBefore: 30, enabled: true },
    { id: 2, type: 'SMS', daysBefore: 15, enabled: false },
    { id: 3, type: 'In-App', daysBefore: 7, enabled: true },
  ])

  const addNotification = (notif) => setNotifications([...notifications, { ...notif, id: Date.now() }])
  
  const updateNotification = (updated) => 
    setNotifications(notifications.map((n) => (n.id === updated.id ? updated : n)))
  
  const deleteNotification = (id) => setNotifications(notifications.filter((n) => n.id !== id))

  return { notifications, addNotification, updateNotification, deleteNotification }
}
