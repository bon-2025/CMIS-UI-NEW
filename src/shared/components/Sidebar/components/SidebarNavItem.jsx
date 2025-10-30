import { NavLink } from 'react-router-dom';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';

const SidebarNavItem = ({ name, icon, path, collapsed }) => {
  const renderTooltip = (name) => <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>;

  return (
    <OverlayTrigger
      placement="right"
      overlay={collapsed ? renderTooltip(name) : <></>}
    >
      <Nav.Link
        as={NavLink}
        to={path}
        className={({ isActive }) =>
          `sidebar-link d-flex align-items-center justify-content-center px-3 py-2 rounded mb-2 ${
            isActive ? 'active-link bg-primary' : 'text-white'
          }`
        }
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <span style={{ fontSize: 20 }}>{icon}</span>
        {!collapsed && <span className="ms-2">{name}</span>}
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default SidebarNavItem;
