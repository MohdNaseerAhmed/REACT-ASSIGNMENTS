// src/App.jsx
import { Container, Card, ButtonGroup, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { TodoProvider, useTodo } from './context/TodoContext.jsx';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
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

function App() {
  return (
    <TodoProvider>
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
        <ToastContainer />
      </Container>
    </TodoProvider>
  );
}

export default App;