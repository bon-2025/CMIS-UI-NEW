import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.jsx";
import Login from "./Login/Login.jsx";
import { AuthProvider } from "./shared/components/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <Dashboard />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
