import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components_one/Home';
import AdminLogin from './Components_one/AdminLogin';
import AdminDashboard from './Components_one/AdminDashboard';
import StudentEnquiry from './Components_one/StudentEnquiry';
import { EnquiryProvider } from './Components_one/EnquiryContext';
import InquiryAssignment from './Components_one/InquiryAssignment';
import PrioritySetting from './Components_one/PrioritySetting';
import UserProfile from './Components_one/UserProfile';

function App() {
  return (
    <EnquiryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-enquiry" element={<StudentEnquiry />} />
          <Route path="/inquiry-assignment" element={<InquiryAssignment />} />
          <Route path="/priority-setting" element={<PrioritySetting />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </EnquiryProvider>
  );
}

export default App;
