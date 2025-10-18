import { FaHome, FaUser, FaUserPlus, FaCog, FaFileAlt, FaBars } from 'react-icons/fa';

import { FaUniversity } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './SideBar.css';

const menuItems = [
  { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/' },
  { name: 'Records', icon: <FaFileAlt />, path: '/dashboard/records' },
  { name: 'Register', icon: <FaUserPlus />, path: '/dashboard/register' },
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
    <div className={`d-flex flex-column text-white overflow-hidden bg-primary bg-opacity-75`}
        style={{
            width: collapsed ? '60px' : '240px',
            transition: 'width 0.3s',
            }}>

        {/* Toggle Button */}
        <div
            className={`sidebar-toggle p-3 d-flex ${collapsed ? 'justify-content-center' : 'justify-content-end'}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
            <FaBars size={24} />
        </div>

        {/* Sidebar Title with Icon */}
        <div className={`px-3 mb-3 d-flex align-items-center ${collapsed ? 'justify-content-center' : ''}`}>
            <FaUniversity size={24} className="me-2" />
            {!collapsed && (
            <h5 className="m-0 fw-bold" style={{ fontSize: '1.25rem' }}>
                CMIS
            </h5>
            )}
        </div>

        {/* Menu Items */}
        <Nav className="flex-column" style={{ flexGrow: 1 }}>
            {menuItems.map(({ name, icon, path }) => (
            <Nav.Link
                as={NavLink}
                to={path}
                key={name}
                className={({ isActive }) =>
                `sidebar-link text-white d-flex align-items-center px-3 py-2 overflow-hidden rounded my-1 mx-2 ${
                    isActive ? 'active-link' : ''
                }`
                }
                style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: 'inherit',
                }}
                title={collapsed ? name : ''}
            >
                <span style={{ marginRight: collapsed ? 0 : 12, fontSize: 20 }}>
                {icon}
                </span>
                {!collapsed && <span>{name}</span>}
            </Nav.Link>
            ))}
        </Nav>
    </div>
    );
}

export default SideBar;
