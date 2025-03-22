// src/components/Login.jsx
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation rules
    if (!formData.username) newErrors.username = 'Username is required';
    else if (formData.username.length < 4 || formData.username.length > 12)
      newErrors.username = 'Username must be between 4 and 12 characters';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login Form Data:', formData);
      setFormData({
        username: '',
        password: '',
      });
      setErrors({});
    }
  };

  return (
    <Container className="mt-5">
      <Card className="login-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                className="form-control-custom"
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                className="form-control-custom"
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 btn-custom">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;