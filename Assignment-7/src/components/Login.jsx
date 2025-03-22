// src/components/Login.jsx
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputStates, setInputStates] = useState({
    username: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          username: formData.username,
          password: formData.password,
        },
      });

      if (response.data.length > 0) {
        toast.success('Login successful!');
        console.log('Logged In User:', response.data[0]);
        setFormData({
          username: '',
          password: '',
        });
        setInputStates({
          username: false,
          password: false,
        });
        setErrors({});
      } else {
        toast.error('Invalid username or password');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Card className="login-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Login</Card.Title>
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

            <Button
              variant="primary"
              type="submit"
              className="w-100 btn-custom"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;