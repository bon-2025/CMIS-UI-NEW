import { useState } from "react";
import { Nav } from "react-bootstrap";


const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-light" style={{ width: "250px" }}>
      <Nav className="flex-column p-2">
        <Navigation/>
        <Navigation/>
      </Nav>
    </div>
  );
};

export default Sidebar;
