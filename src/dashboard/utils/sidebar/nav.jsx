import {
  FaHome, FaUserPlus, FaFileAlt, FaLeaf, FaHourglassHalf, FaBan,
  FaCalendarAlt, FaSync, FaBell, FaLock, FaUsersCog, FaDatabase,
  FaArchive, FaClipboardList, FaLaptopCode,
} from 'react-icons/fa';


export const menu = [
  { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/' },
  { name: 'Records', icon: <FaFileAlt />, path: '/dashboard/records' },
  { name: 'Register', icon: <FaUserPlus />, path: '/dashboard/register' },
];

export const analytics = [
  { name: 'Renewable', icon: <FaLeaf />, path: '/dashboard/renewable' },
  { name: 'Expiring', icon: <FaHourglassHalf />, path: '/dashboard/expiring' },
  { name: 'Expired', icon: <FaBan />, path: '/dashboard/expired' },
];

export const settings = [
  { name: 'Contract Duration', icon: <FaCalendarAlt />, path: '/dashboard/settings/contract-duration' },
  { name: 'Renewable Rules', icon: <FaSync />, path: '/dashboard/settings/renewable-rules' },
  { name: 'Expiration Notification', icon: <FaBell />, path: '/dashboard/settings/expiration-notification' },
  { name: 'Change Password', icon: <FaLock />, path: '/dashboard/settings/change-password' },
  { name: 'Employee Controls', icon: <FaUsersCog />, path: '/dashboard/settings/employee-controls' },
  { name: 'Backup Data', icon: <FaDatabase />, path: '/dashboard/settings/backup-data' },
  { name: 'Archive Records', icon: <FaArchive />, path: '/dashboard/settings/archive-records' },
  { name: 'Activity Log', icon: <FaClipboardList />, path: '/dashboard/settings/activity-log' },
  { name: 'Login Log', icon: <FaLaptopCode />, path: '/dashboard/settings/login-log' },
];