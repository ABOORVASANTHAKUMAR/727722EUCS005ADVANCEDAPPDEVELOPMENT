import React, { useContext, useState } from 'react';
import { EnquiryContext } from './EnquiryContext';

const InquiryAssignment = () => {
  const { enquiries, assignEnquiry } = useContext(EnquiryContext);
  const [staff, setStaff] = useState('');

  const handleAssignment = (index) => {
    assignEnquiry(index, staff);
    setStaff('');
  };

  return (
    <div>
      <h2>Inquiry Assignment</h2>
      <ul>
        {enquiries.map((enquiry, index) => (
          <li key={index}>
            <p>{enquiry.enquiry}</p>
            <input
              type="text"
              value={staff}
              onChange={(e) => setStaff(e.target.value)}
              placeholder="Assign to staff"
            />
            <button onClick={() => handleAssignment(index)}>Assign</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InquiryAssignment;
