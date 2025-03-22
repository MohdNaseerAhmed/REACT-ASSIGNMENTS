import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingTodo, setEditingTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) {
      toast.error('Task cannot be empty!');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    toast.success('Task added successfully!');
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      toast.error('Task cannot be empty!');
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingTodo(null);
    toast.success('Task updated successfully!');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success('Task deleted successfully!');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.info('Task status updated!');
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    toast.success('Completed tasks cleared!');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleComplete,
        clearCompleted,
        editingTodo,
        setEditingTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};