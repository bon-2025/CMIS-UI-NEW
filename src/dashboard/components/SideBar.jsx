import { useState } from 'react';
import { useAuthContext } from '../../shared/components/AuthProvider';
import { menu, analytics, settings } from '../utils/sidebar/nav';

import { NavLink, useNavigate } from 'react-router-dom';
import { Nav, Collapse } from 'react-bootstrap';
import { CButton } from '@coreui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import '../style/SideBar.css';



const SideBar = ({ handle }) => {
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };


  return (
    <div
      className={`d-flex flex-column bg-dark text-light`}
      style={{
        width: handle ? '0px' : '240px',
        transition: 'width 0.3s',
        height: '100vh',
      }}
    >
      <h2>Welcome, {user?.name || "User"}!</h2>

      {/* Sidebar Header */}
      <div className="p-3 border-bottom border-secondary">
        <h5 className="fw-bold text-white mb-0">
          <span className="text-secondary">CMIS </span>
          <span className="text-info">Main Title</span>
        </h5>
      </div>

      {/* Menu Items */}
      <Nav className="flex-column" style={{ flexGrow: 1 }}>
        {menu.map(({ name, icon, path }) => (
          <Nav.Link
            as={NavLink}
            to={path}
            key={name}
            className={({ isActive }) =>
              `sidebar-link text-white d-flex align-items-center px-3 py-2 rounded my-1 mx-2 ${
                isActive ? 'active-link' : ''
              }`
            }
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              color: 'inherit',
            }}
            title={handle ? name : ''}
          >
            <span style={{ marginRight: handle ? 0 : 12, fontSize: 20 }}>{icon}</span>
            {!handle && <span>{name}</span>}
          </Nav.Link>
        ))}

        {/* ANALYTICS SECTION */}
        <CButton
          color=""
          className="text-light border-top border-2 mt-1 fs-5 text-start w-100"
          onClick={() => setOpenAnalytics(!openAnalytics)}
          aria-expanded={openAnalytics}
        >
          Analytics {openAnalytics ? '▾' : '▸'}
        </CButton>
        <Collapse in={openAnalytics}>
          <div>
            {analytics.map(({ name, icon, path }) => (
              <Nav.Link
                as={NavLink}
                to={path}
                key={name}
                className={({ isActive }) =>
                  `sidebar-link text-white d-flex align-items-center px-3 py-2 rounded my-1 mx-2 ${
                    isActive ? 'active-link' : ''
                  }`
                }
              >
                <span style={{ marginRight: handle ? 0 : 12, fontSize: 20 }}>{icon}</span>
                {!handle && <span>{name}</span>}
              </Nav.Link>
            ))}
          </div>
        </Collapse>

        {/* SETTINGS SECTION */}
        <CButton
          color=""
          className="text-light border-top border-2 mt-1 fs-5 text-start w-100"
          onClick={() => setOpenSettings(!openSettings)}
          aria-expanded={openSettings}
        >
          Settings {openSettings ? '▾' : '▸'}
        </CButton>
        <Collapse in={openSettings}>
          <div>
            {settings.map(({ name, icon, path }) => (
              <Nav.Link
                as={NavLink}
                to={path}
                key={name}
                className={({ isActive }) =>
                  `sidebar-link text-white d-flex align-items-center px-3 py-2 rounded my-1 mx-2 ${
                    isActive ? 'active-link' : ''
                  }`
                }
              >
                <span style={{ marginRight: handle ? 0 : 12, fontSize: 20 }}>{icon}</span>
                {!handle && <span>{name}</span>}
              </Nav.Link>
            ))}
          </div>
        </Collapse>
      </Nav>

      {/* LOGOUT BUTTON */}
      <div className="p-3 border-top border-secondary">
        <CButton
          color="danger"
          className="w-100 d-flex align-items-center justify-content-center"
          onClick={handleLogout}
        >
          <FaSignOutAlt style={{ marginRight: 8 }} />
          {!handle && <span>Logout</span>}
        </CButton>
      </div>
    </div>
  );
};

export default SideBar;
