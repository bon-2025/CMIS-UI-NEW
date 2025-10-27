import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import Login from './Login/Login.jsx';
import Sidebar from './components/Sidebars.jsx';

function App() {
  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
