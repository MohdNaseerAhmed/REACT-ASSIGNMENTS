import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container className="mt-5">
      <Card className="login-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">
            Login
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="form-control-custom"
              />
            </Form.Group>

            <Form.Group className="form-group mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="form-control-custom"
              />
            </Form.Group>

            <Button type="submit" className="w-100 btn-custom">
              Login
            </Button>
          </Form>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;