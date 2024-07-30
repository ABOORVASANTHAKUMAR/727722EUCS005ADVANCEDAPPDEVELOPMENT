import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    settings: {
      notifications: false,
      darkMode: false,
    },
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch profile data from the server
    // Example placeholder data
    const fetchProfile = async () => {
      const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        settings: {
          notifications: true,
          darkMode: false,
        },
      };
      setProfile(userData);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProfile((prevProfile) => ({
        ...prevProfile,
        settings: {
          ...prevProfile.settings,
          [name]: checked,
        },
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data to the server
    console.log('Profile updated:', profile);

    // Show success message
    setSuccessMessage('Changes saved successfully!');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="user-profile">
      <h2>Profile Management</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={profile.settings.notifications}
            onChange={handleChange}
          />
        </label>
        <label>
          Dark Mode:
          <input
            type="checkbox"
            name="darkMode"
            checked={profile.settings.darkMode}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
