import React from 'react';
import { FaHome, FaUser, FaUserPlus, FaCog, FaFileAlt, FaBars } from 'react-icons/fa';
const Header = ({handleChange}) => {

    return (
        <div className="fluid p-3 `sidebar-toggle p-3" style={{height: 90, borderTopRightRadius: 10, borderTopLeftRadius: 10, padding: 10}}>
            <div onClick={handleChange}><FaBars size={24} /></div>
        </div>
    );
}

export default Header;
