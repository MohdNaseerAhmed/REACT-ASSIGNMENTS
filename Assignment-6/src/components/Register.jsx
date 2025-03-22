// src/components/Register.jsx
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Register Form Data:', formData);
      setFormData({
        username: '',
        password: '',
        email: '',
        dateOfBirth: '',
      });
      setErrors({});
    }
  };

  return (
    <Container className="mt-5">
      <Card className="register-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                className="form-control-custom"
                placeholder=" "
              />
              <Form.Label>Username</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                className="form-control-custom"
                placeholder=" "
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                className="form-control-custom"
                placeholder=" "
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dateOfBirth">
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                isInvalid={!!errors.dateOfBirth}
                className="form-control-custom"
                placeholder=" "
              />
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control.Feedback type="invalid">{errors.dateOfBirth}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 btn-custom">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;