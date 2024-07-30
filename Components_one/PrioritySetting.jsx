import React, { useContext, useState } from 'react';
import { EnquiryContext } from './EnquiryContext';

const PrioritySetting = () => {
  const { enquiries, setPriority } = useContext(EnquiryContext);
  const [priority, setPriorityState] = useState('');

  const handlePriorityChange = (index) => {
    setPriority(index, priority);
    setPriorityState('');
  };

  return (
    <div>
      <h2>Set Priority</h2>
      <ul>
        {enquiries.map((enquiry, index) => (
          <li key={index}>
            <p>{enquiry.enquiry}</p>
            <input
              type="text"
              value={priority}
              onChange={(e) => setPriorityState(e.target.value)}
              placeholder="Set priority"
            />
            <button onClick={() => handlePriorityChange(index)}>Set Priority</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrioritySetting;
