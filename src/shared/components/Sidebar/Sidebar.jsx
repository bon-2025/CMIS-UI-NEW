import { Nav } from 'react-bootstrap';
import { CButton } from '@coreui/react';
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { menu, analytics, settingsGeneral, settingsLogs } from '../../utils/sidebar/nav';
import { useSidebar } from '../../hook/useSidebar';
import SidebarNavItem from './components/SidebarNavItem';
import SidebarSection from './components/SidebarSection';
import './sidebar.css';

const SideBar = () => { 
    const { 
        collapsed, toggleCollapsed, openAnalytics, toggleAnalytics, 
        openSettings, toggleSettings, openSettingsLogs, toggleSettingsLogs, 
        handleLogout, user, 
    } = useSidebar();

  return (
    <div
      className="d-flex flex-column bg-dark text-light shadow-lg"
      style={{
        width: collapsed ? '70px' : '300px',
        transition: 'width 0.3s',
        height: '100vh',
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary">
        {!collapsed && (
          <h5 className="fw-bold text-white mb-0">
            <span className="text-info">CMIS</span> Dashboard
          </h5>
        )}
        <CButton
          color="secondary"
          className="p-1 d-flex align-items-center justify-content-center"
          onClick={toggleCollapsed}
        >
          <FaBars />
        </CButton>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-3 border-bottom border-secondary">
          <span className="text-white fw-semibold">Welcome, {user?.name || 'User'}!</span>
        </div>
      )}

      {/* Scrollable Menu */}
      <div className="flex-grow-1 overflow-auto" style={{ padding: '0 0.5rem', marginTop: '0.5rem' }}>
        <Nav className="flex-column">
          {menu.map((item) => (
            <SidebarNavItem key={item.name} {...item} collapsed={collapsed} />
          ))}

          <SidebarSection
            title="Analytics"
            icon="📊"
            items={analytics}
            collapsed={collapsed}
            isOpen={openAnalytics}
            toggle={toggleAnalytics}
          />
          <SidebarSection
            title="Settings"
            icon="⚙️"
            items={settingsGeneral}
            collapsed={collapsed}
            isOpen={openSettings}
            toggle={toggleSettings}
          />
          <SidebarSection
            title="Logs"
            icon="📂"
            items={settingsLogs}
            collapsed={collapsed}
            isOpen={openSettingsLogs}
            toggle={toggleSettingsLogs}
          />
        </Nav>
      </div>

      {/* Logout Button */}
      <div className="p-3 border-top border-secondary mt-auto">
        <CButton
          color="danger"
          className="w-100 d-flex align-items-center justify-content-center"
          onClick={handleLogout}
        >
          <FaSignOutAlt style={{ marginRight: collapsed ? 0 : 8 }} />
          {!collapsed && <span>Logout</span>}
        </CButton>
      </div>
    </div>
  );
};

export default SideBar;
