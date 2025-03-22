// src/context/TodoContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

// Create the TodoContext
const TodoContext = createContext();

// Create a provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingTodo, setEditingTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
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

  // Edit an existing todo
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

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success('Task deleted successfully!');
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.info('Task status updated!');
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    toast.success('Completed tasks cleared!');
  };

  // Filter todos based on the current filter
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

// Custom hook to use the TodoContext
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};