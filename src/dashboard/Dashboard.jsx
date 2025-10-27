import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Records from './pages/Records';
import Register from './pages/Register';
import Header from './components/Header';

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
import RestoreData from './pages/Settings/RestoreData';

const API_URL = 'http://localhost:5000/records';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchRecords = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch records');
        const data = await res.json();
        if (isMounted) {
          setRecords(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch records:', error);
        if (isMounted) setLoading(false);
      }
    };

    fetchRecords();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleFormSubmit = async (newRecord) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord),
    });

    if (!response.ok) throw new Error('Failed to save record');

    const savedRecord = await response.json();
    setRecords(prev => [...prev, savedRecord]);
    return savedRecord;
  };

  if (loading) {
    return <div className="text-center p-5">Loading records...</div>;
  }

  return (
    <div className="d-flex vh-100">
      <SideBar handle={collapsed} />

      <div className="flex-grow-1 p-0" style={{ backgroundColor: '#e6f0fa' }}>
        <Header handleChange={() => setCollapsed(!collapsed)} />
      </div>

      <div className="container-fluid p-4 overflow-y-auto" style={{ backgroundColor: '#e6f0fa' }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home records={records} />} />
          <Route path="/records" element={<Records records={records} />} />
          <Route path="/register" element={<Register onSubmit={handleFormSubmit} />} />

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
          <Route path="/settings/restore-data" element={<RestoreData />} />
          <Route path="/settings/archive-records" element={<ArchiveRecords />} />
          <Route path="/settings/activity-log" element={<ActivityLog />} />
          <Route path="/settings/login-log" element={<LoginLog />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
