import { Routes, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import Home from './Home';
import Records from './Records';
import Register from './Register';

const Dashboard = () => {

  return (
    <div className="d-flex vh-100">
        {/* Sidebar */}
        <SideBar/>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-3" style={{ backgroundColor: '#e6f0fa' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Records" element={<Records />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </div>
    );
}
export default Dashboard;
