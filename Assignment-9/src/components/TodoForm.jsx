import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTodo } from '../context/TodoContext.jsx';

function TodoForm() {
  const [task, setTask] = useState('');
  const { addTodo, editTodo, editingTodo, setEditingTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      editTodo(editingTodo.id, task);
    } else {
      addTodo(task);
    }
    setTask('');
    setEditingTodo(null);
  };

  const handleCancelEdit = () => {
    setTask('');
    setEditingTodo(null);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="form-group d-flex align-items-center gap-2">
        <Form.Control
          type="text"
          value={editingTodo ? editingTodo.text : task}
          onChange={(e) => {
            if (editingTodo) {
              setEditingTodo({ ...editingTodo, text: e.target.value });
            } else {
              setTask(e.target.value);
            }
          }}
          placeholder="Add a new task"
          className="form-control-custom"
        />
        <Button
          type="submit"
          className="btn-custom"
          disabled={!task.trim() && !editingTodo?.text.trim()}
        >
          {editingTodo ? 'Update' : 'Add'}
        </Button>
        {editingTodo && (
          <Button
            variant="secondary"
            onClick={handleCancelEdit}
            className="btn-cancel"
          >
            Cancel
          </Button>
        )}
      </Form.Group>
    </Form>
  );
}

export default TodoForm;