// src/components/TodoList.jsx
import { ListGroup, Button, Form } from 'react-bootstrap';
import { useTodo } from '../context/TodoContext.jsx';

function TodoList() {
  const { filteredTodos, deleteTodo, toggleComplete, setEditingTodo, clearCompleted } = useTodo();

  return (
    <>
      {filteredTodos.length > 0 && (
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant="outline-danger"
            onClick={clearCompleted}
            className="btn-action"
          >
            Clear Completed
          </Button>
        </div>
      )}
      <ListGroup>
        {filteredTodos.length === 0 ? (
          <p className="text-center text-muted">No tasks match the current filter.</p>
        ) : (
          filteredTodos.map((todo) => (
            <ListGroup.Item
              key={todo.id}
              className="d-flex align-items-center justify-content-between todo-item"
            >
              <div className="d-flex align-items-center gap-2">
                <Form.Check
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="todo-checkbox"
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#6c757d' : '#2c3e50',
                  }}
                >
                  {todo.text}
                </span>
              </div>
              <div className="d-flex gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setEditingTodo(todo)}
                  className="btn-action"
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="btn-action"
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </>
  );
}

export default TodoList;