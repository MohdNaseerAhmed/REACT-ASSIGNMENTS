// src/components/RegistrationForm.jsx
import { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
    phoneNumber: '',
    subject: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.birthday) newErrors.birthday = 'Birthday is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';

    if (formData.firstName && (formData.firstName.length < 4 || formData.firstName.length > 6)) {
      newErrors.firstName = 'First Name must be between 4 and 6 characters';
    }
    if (formData.lastName && (formData.lastName.length < 4 || formData.lastName.length > 6)) {
      newErrors.lastName = 'Last Name must be between 4 and 6 characters';
    }

    if (formData.phoneNumber && formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Phone Number must be exactly 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        email: '',
        phoneNumber: '',
        subject: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="registration-form-container">
      <div className="card shadow-lg p-4 form-card">
        <h2 className="card-title text-center mb-4 form-title">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label form-label-custom">First Name</label>
              <input
                type="text"
                className={`form-control form-control-custom ${errors.firstName ? 'is-invalid' : ''}`}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label form-label-custom">Last Name</label>
              <input
                type="text"
                className={`form-control form-control-custom ${errors.lastName ? 'is-invalid' : ''}`}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="birthday" className="form-label form-label-custom">Birthday</label>
              <input
                type="date"
                className={`form-control form-control-custom ${errors.birthday ? 'is-invalid' : ''}`}
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
              {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label form-label-custom">Gender</label>
              <div className="d-flex gap-3">
                <div className="form-check form-check-custom">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-custom">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
              {errors.gender && <div className="text-danger small">{errors.gender}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label form-label-custom">Email</label>
              <input
                type="email"
                className={`form-control form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label form-label-custom">Phone Number</label>
              <input
                type="text"
                className={`form-control form-control-custom ${errors.phoneNumber ? 'is-invalid' : ''}`}
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label form-label-custom">Subject</label>
            <select
              className={`form-select form-select-custom ${errors.subject ? 'is-invalid' : ''}`}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Choose option</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-custom">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;