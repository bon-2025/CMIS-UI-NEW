import { FaHome, FaUser, FaUserPlus, FaCog, FaFileAlt, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../style/SideBar.css';

const menuItems = [
  { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/' },
  { name: 'Records', icon: <FaFileAlt />, path: '/dashboard/records' },
  { name: 'Register', icon: <FaUserPlus />, path: '/dashboard/register' },
];

const SideBar = ({handle}) => {

    return (
        
    <div className={`d-flex flex-column overflow-hidden bg-dark text-light`}
        style={{
            width: handle ? '0px' : '240px',
            transition: 'width 0.3s',
            }}>
        
        <div className="p-3 border-bottom border-secondary">
            <h5 className="fw-bold text-white mb-0">
            <span className="text-secondary">CMIS</span><span className="text-info">Main title</span>
            </h5>
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
                title={handle ? name : ''}
            >
                <span style={{ marginRight: handle ? 0 : 12, fontSize: 20 }}>
                {icon}
                </span>
                {!handle && <span>{name}</span>}
            </Nav.Link>
            ))}
            <Nav.Link>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">1</option>
                </select>
            </Nav.Link>
        </Nav>
    </div>
    );
}

export default SideBar;
