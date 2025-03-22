// src/components/Adduser.jsx
import { useState } from 'react';
import './Adduser.css';

function Adduser({ onAddUser }) {
  const [formData, setFormData] = useState({
    username: '',
    dateOfBirth: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Rule 1: All fields are mandatory
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.city) newErrors.city = 'City is required';

    // Rule 2: Username length (min 4, max 8)
    if (formData.username && (formData.username.length < 4 || formData.username.length > 8)) {
      newErrors.username = 'Username must be between 4 and 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Pass the new user data to the parent component
      onAddUser({
        id: Date.now(), // Simple unique ID based on timestamp
        username: formData.username,
        dateOfBirth: formData.dateOfBirth,
        city: formData.city,
      });
      // Reset the form
      setFormData({
        username: '',
        dateOfBirth: '',
        city: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="adduser-container">
      <h3 className="adduser-title">User Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default Adduser;