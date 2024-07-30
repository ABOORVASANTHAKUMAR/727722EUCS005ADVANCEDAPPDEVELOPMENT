// AdminStatistics.js
import React from 'react';
import './AdminStatistics.css';

const AdminStatistics = ({ inquiries }) => {
  const getMostAssignedStaff = () => {
    const staffAssignments = inquiries.reduce((acc, inquiry) => {
      if (inquiry.assignedTo) {
        acc[inquiry.assignedTo] = (acc[inquiry.assignedTo] || 0) + 1;
      }
      return acc;
    }, {});
    const mostAssigned = Object.entries(staffAssignments).reduce((a, b) => b[1] > a[1] ? b : a, ['', 0]);
    return mostAssigned[0];
  };

  const pendingInquiriesCount = inquiries.filter(inq => inq.status === 'Pending').length;

  return (
    <div className="admin-statistics">
      <h2>Admin Statistics</h2>
      <div className="stat-item">
        <h3>Most Assigned Staff:</h3>
        <p>{getMostAssignedStaff()}</p>
      </div>
      <div className="stat-item">
        <h3>Pending Inquiries:</h3>
        <p>{pendingInquiriesCount}</p>
      </div>
    </div>
  );
};

export default AdminStatistics;
