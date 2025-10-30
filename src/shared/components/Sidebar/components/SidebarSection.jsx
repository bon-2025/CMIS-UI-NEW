import { Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CButton } from '@coreui/react';
import SidebarNavItem from './SidebarNavItem';

const SidebarSection = ({ title, icon, items, collapsed, isOpen, toggle }) => {
  const renderTooltip = (name) => <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>;

  return (
    <>
      <OverlayTrigger placement="right" overlay={collapsed ? renderTooltip(title) : <></>}>
        <CButton
          color=""
          className="text-light sidebar-section-btn mt-1 d-flex justify-content-between align-items-center w-100"
          onClick={toggle}
          aria-expanded={isOpen}
        >
          {!collapsed && <span className="fw-semibold">{title}</span>}
          {collapsed && <span style={{ fontSize: 18 }}>{icon}</span>}
          {!collapsed && <span className="arrow">{isOpen ? '▾' : '▸'}</span>}
        </CButton>
      </OverlayTrigger>
      <Collapse in={isOpen}>
        <div className="sidebar-dropdown-content">
          {items.map((item) => (
            <SidebarNavItem key={item.name} {...item} collapsed={collapsed} />
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default SidebarSection;
