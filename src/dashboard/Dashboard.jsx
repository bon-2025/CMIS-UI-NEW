import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Records from './pages/Records';
import Register from './pages/register';

const API_URL = 'http://localhost:5000/records';

const Dashboard = () => {
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
  
      // Update state to show new record immediately
      setRecords(prev => [...prev, savedRecord]);
  
      return savedRecord;
    };
  
    if (loading) {
      return <div className="text-center p-5">Loading records...</div>;
    }
    return (
        <div className="d-flex vh-100">
            <SideBar />
            <div className="flex-grow-1 p-3" style={{ backgroundColor: '#e6f0fa' }}>
              <Routes>
                <Route path="/" element={<Home records={records}/>} />
                <Route path="/Records" element={<Records  records={records}/>} />
                <Route path="/Register" element={<Register onSubmit={handleFormSubmit}/>} />
              </Routes>
            </div>
        </div>
    );
}

export default Dashboard;
