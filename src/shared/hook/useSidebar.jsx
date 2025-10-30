import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../components/AuthProvider';

export const useSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openSettingsLogs, setOpenSettingsLogs] = useState(false); // Added state for Logs

  const { logout, user } = useAuthContext();
  const navigate = useNavigate();

  const toggleCollapsed = () => setCollapsed(!collapsed);
  const toggleAnalytics = () => setOpenAnalytics(!openAnalytics);
  const toggleSettings = () => setOpenSettings(!openSettings);
  const toggleSettingsLogs = () => setOpenSettingsLogs(!openSettingsLogs); // Added toggle for Logs

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return {
    collapsed,
    toggleCollapsed,
    openAnalytics,
    toggleAnalytics,
    openSettings,
    toggleSettings,
    openSettingsLogs,      // Expose Logs state
    toggleSettingsLogs,    // Expose Logs toggle
    handleLogout,
    user,
  };
};
