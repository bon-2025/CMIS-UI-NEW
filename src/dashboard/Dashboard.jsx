import { Routes, Route } from 'react-router-dom';

import SideBar from '../shared/components/Sidebar/Sidebar';
import Home from './pages/Home';
import Records from './pages/Menu/Records';
import Register from './pages/Menu/Register';

// Analytics Pages
import Renewable from "./pages/Analytics/Renewable";
import Expiring from './pages/Analytics/Expiring';
import Expired from './pages/Analytics/Expired';

// Settings Pages
import ActivityLog from './pages/Settings/ActivityLog';
import ArchiveRecords from './pages/Settings/ArchiveRecords';
import BackupData from './pages/Settings/BackupData';
import ChangePassword from './pages/Settings/ChangePassword';
import ContractDuration from './pages/Settings/ContractDuration';
import EmployeeControls from './pages/Settings/EmployeeControls';
import ExpirationNotification from './pages/Settings/ExpirationNotification';
import LoginLog from './pages/Settings/LoginLog';
import RenewableRules from './pages/Settings/RenewableRules';

const Dashboard = () => {
  return (
    <div className="d-flex vh-100">
      <SideBar />

      <div className="container-fluid p-4 overflow-y-auto" style={{ backgroundColor: '#e6f0fa' }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/register" element={<Register />} />

          {/* Analytics Pages */}
          <Route path="/renewable" element={<Renewable />} />
          <Route path="/expiring" element={<Expiring />} />
          <Route path="/expired" element={<Expired />} />

          {/* Settings Subpages */}
          <Route path="/settings/contract-duration" element={<ContractDuration />} />
          <Route path="/settings/renewable-rules" element={<RenewableRules />} />
          <Route path="/settings/expiration-notification" element={<ExpirationNotification />} />
          <Route path="/settings/change-password" element={<ChangePassword />} />
          <Route path="/settings/employee-controls" element={<EmployeeControls />} />
          <Route path="/settings/backup-data" element={<BackupData />} />
          <Route path="/settings/archive-records" element={<ArchiveRecords />} />
          <Route path="/settings/activity-log" element={<ActivityLog />} />
          <Route path="/settings/login-log" element={<LoginLog />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
