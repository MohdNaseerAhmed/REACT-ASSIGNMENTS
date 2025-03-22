import { Container, Card, ButtonGroup, Button, Navbar, Nav } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { TodoProvider, useTodo } from './context/TodoContext.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function FilterButtons() {
  const { filter, setFilter } = useTodo();

  return (
    <ButtonGroup className="mb-4 d-flex justify-content-center">
      <Button
        variant={filter === 'all' ? 'primary' : 'outline-primary'}
        onClick={() => setFilter('all')}
      >
        All
      </Button>
      <Button
        variant={filter === 'active' ? 'primary' : 'outline-primary'}
        onClick={() => setFilter('active')}
      >
        Active
      </Button>
      <Button
        variant={filter === 'completed' ? 'primary' : 'outline-primary'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}

function TodoApp() {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/todo">
            To-Do App
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as="div">
              <span className="me-2">Welcome, {user.username}</span>
              <Button variant="outline-danger" size="sm" onClick={logout}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Card className="todo-card shadow-lg mx-auto">
          <Card.Body>
            <Card.Title as="h2" className="text-center mb-4">
              To-Do App
            </Card.Title>
            <TodoForm />
            <FilterButtons />
            <TodoList />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <TodoProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/todo"
              element={
                <ProtectedRoute>
                  <TodoApp />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
          <ToastContainer />
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;