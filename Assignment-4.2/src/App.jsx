// src/App.jsx
import { useState } from 'react';
import Adduser from './components/Adduser';
import Userlist from './components/Userlist';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]); // Add the new user to the list
  };

  return (
    <div className="app">
      <h1 className="app-title">User Registration System</h1>
      <Adduser onAddUser={handleAddUser} />
      <Userlist users={users} />
    </div>
  );
}

export default App;