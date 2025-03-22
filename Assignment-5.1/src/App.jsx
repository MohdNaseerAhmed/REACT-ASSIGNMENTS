// src/App.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Increment user count when "Add User" is clicked
  const handleAddUser = () => {
    setUserCount(prevCount => prevCount + 1);
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <div className="app">
      <h1 className="app-title">User Management System</h1>
      <Users users={users} userCount={userCount} onAddUser={handleAddUser} />
    </div>
  );
}

export default App;