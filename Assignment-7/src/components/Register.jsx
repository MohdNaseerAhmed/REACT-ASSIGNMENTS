// src/components/Register.jsx
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputStates, setInputStates] = useState({
    username: false,
    password: false,
    email: false,
    dateOfBirth: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Update input state to reflect whether the input has a value
    setInputStates({ ...inputStates, [name]: !!value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setInputStates({ ...inputStates, [name]: true });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setInputStates({ ...inputStates, [name]: !!value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    else if (formData.username.length < 4 || formData.username.length > 12)
      newErrors.username = 'Username must be between 4 and 12 characters';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';

    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkUserExists = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          username: formData.username,
        },
      });
      if (response.data.length > 0) {
        return { exists: true, field: 'username', message: 'Username already exists' };
      }

      const emailResponse = await axios.get('http://localhost:5000/users', {
        params: {
          email: formData.email,
        },
      });
      if (emailResponse.data.length > 0) {
        return { exists: true, field: 'email', message: 'Email already exists' };
      }

      return { exists: false };
    } catch (error) {
      toast.error('Error checking user existence');
      return { exists: false };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const userCheck = await checkUserExists();
    if (userCheck.exists) {
      setErrors({ [userCheck.field]: userCheck.message });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/users', {
        ...formData,
        id: Date.now(),
      });
      toast.success('Registration successful!');
      console.log('Registered User:', response.data);
      setFormData({
        username: '',
        password: '',
        email: '',
        dateOfBirth: '',
      });
      setInputStates({
        username: false,
        password: false,
        email: false,
        dateOfBirth: false,
      });
      setErrors({});
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Card className="register-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group" controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isInvalid={!!errors.username}
                className={`form-control-custom ${inputStates.username ? 'has-value-or-focus' : ''}`}
                placeholder=" "
                disabled={loading}
              />
              <Form.Label>Username</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-group" controlId="password">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isInvalid={!!errors.password}
                className={`form-control-custom ${inputStates.password ? 'has-value-or-focus' : ''}`}
                placeholder=" "
                disabled={loading}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-group" controlId="email">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
                className={`form-control-custom ${inputStates.email ? 'has-value-or-focus' : ''}`}
                placeholder=" "
                disabled={loading}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-group" controlId="dateOfBirth">
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isInvalid={!!errors.dateOfBirth}
                className={`form-control-custom ${inputStates.dateOfBirth ? 'has-value-or-focus' : ''}`}
                disabled={loading}
              />
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.dateOfBirth}</Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 btn-custom"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;