import React, { useState } from 'react';
import './AdminDashboard.css';
import AdminStatistics from './AdminStatistics';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([
    { id: 1, text: 'Inquiry 1', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 2, text: 'Inquiry 2', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 3, text: 'Inquiry 3', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 4, text: 'Inquiry 4', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 5, text: 'Inquiry 5', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 6, text: 'Inquiry 6', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 7, text: 'Inquiry 7', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
    { id: 8, text: 'Inquiry 8', assignedTo: '', priority: '', status: 'Pending', response: '', category: '' },
  ]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showPriorityModal, setShowPriorityModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [responseText, setResponseText] = useState('');

  const staffMembers = ['Abishiya', 'Angel', 'Bharani', 'Chandra', 'Aruthra', 'Denisha'];
  const priorityLevels = ['High', 'Medium', 'Low'];
  const categories = ['Academic', 'Administrative', 'Technical', 'Other'];

  const handleAssign = (id, assignedTo) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, assignedTo } : inq));
    setShowAssignModal(false);
  };

  const handlePriority = (id, priority) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, priority } : inq));
    setShowPriorityModal(false);
  };

  const handleStatusChange = (id, status) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status } : inq));
  };

  const handleResponseChange = (id, response) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, response } : inq));
    setShowResponseModal(false);
  };

  const handleCategoryChange = (id, category) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, category } : inq));
    setShowCategoryModal(false);
  };

  return (
    <div className="admin-dashboard">
      <AdminStatistics inquiries={inquiries} />
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Inquiry</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Category</th>
            <th>Response</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map(inquiry => (
            <tr key={inquiry.id}>
              <td>{inquiry.text}</td>
              <td>{inquiry.assignedTo}</td>
              <td>{inquiry.priority}</td>
              <td>{inquiry.status}</td>
              <td>{inquiry.category}</td>
              <td>{inquiry.response}</td>
              <td>
                <button onClick={() => { setSelectedInquiry(inquiry); setShowAssignModal(true); }}>Assign</button>
                <button onClick={() => { setSelectedInquiry(inquiry); setShowPriorityModal(true); }}>Set Priority</button>
                <button onClick={() => { setSelectedInquiry(inquiry); setShowCategoryModal(true); }}>Set Category</button>
                <button onClick={() => handleStatusChange(inquiry.id, 'Resolved')}>Mark as Resolved</button>
                <button onClick={() => { setSelectedInquiry(inquiry); setResponseText(inquiry.response); setShowResponseModal(true); }}>Add Response</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAssignModal && selectedInquiry && (
        <div className="modal">
          <div className="modal-content">
            <h3>Assign to Staff</h3>
            <select onChange={(e) => handleAssign(selectedInquiry.id, e.target.value)} defaultValue={selectedInquiry.assignedTo}>
              <option value="" disabled>Select staff</option>
              {staffMembers.map((staff, index) => (
                <option key={index} value={staff}>{staff}</option>
              ))}
            </select>
            <button onClick={() => setShowAssignModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showPriorityModal && selectedInquiry && (
        <div className="modal">
          <div className="modal-content">
            <h3>Set Priority</h3>
            <select onChange={(e) => handlePriority(selectedInquiry.id, e.target.value)} defaultValue={selectedInquiry.priority}>
              <option value="" disabled>Select priority</option>
              {priorityLevels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
            <button onClick={() => setShowPriorityModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showCategoryModal && selectedInquiry && (
        <div className="modal">
          <div className="modal-content">
            <h3>Set Category</h3>
            <select onChange={(e) => handleCategoryChange(selectedInquiry.id, e.target.value)} defaultValue={selectedInquiry.category}>
              <option value="" disabled>Select category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <button onClick={() => setShowCategoryModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showResponseModal && selectedInquiry && (
        <div className="modal">
          <div className="modal-content">
            <h3>Response to {selectedInquiry.text}</h3>
            <textarea 
              value={responseText} 
              onChange={(e) => setResponseText(e.target.value)} 
              rows="4" 
              cols="50"
            />
            <button onClick={() => handleResponseChange(selectedInquiry.id, responseText)}>Save Response</button>
            <button onClick={() => setShowResponseModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
