import React, { createContext, useState } from 'react';

export const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState([
    { enquiry: 'First enquiry', assignedTo: null, response: null, priority: 'Low' },
    { enquiry: 'Second enquiry', assignedTo: 'Admin1', response: null, priority: 'High' }
  ]);

  const addEnquiry = (enquiry) => {
    setEnquiries((prevEnquiries) => [...prevEnquiries, { enquiry, assignedTo: null, response: null, priority: 'Low' }]);
  };

  const assignEnquiry = (index, assignedTo) => {
    setEnquiries((prevEnquiries) => {
      const updatedEnquiries = [...prevEnquiries];
      updatedEnquiries[index].assignedTo = assignedTo;
      return updatedEnquiries;
    });
  };

  const addResponse = (index, response) => {
    setEnquiries((prevEnquiries) => {
      const updatedEnquiries = [...prevEnquiries];
      updatedEnquiries[index].response = response;
      return updatedEnquiries;
    });
  };

  const setPriority = (index, priority) => {
    setEnquiries((prevEnquiries) => {
      const updatedEnquiries = [...prevEnquiries];
      updatedEnquiries[index].priority = priority;
      return updatedEnquiries;
    });
  };

  return (
    <EnquiryContext.Provider value={{ enquiries, addEnquiry, assignEnquiry, addResponse, setPriority }}>
      {children}
    </EnquiryContext.Provider>
  );
};
