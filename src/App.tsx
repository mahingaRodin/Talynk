import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './components/user/UserManagment';
import VideoManagement from './components/video/VideoManagment';
import Approvers from './components/Approver/Approver';
import Home from './components/overview/Home';
import './App.css'
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<div><Home></Home></div>} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/video-management" element={<VideoManagement />} />
        <Route path="/approvers" element={<Approvers />} />
      </Routes>
    </Router>
  );
}

export default App;
