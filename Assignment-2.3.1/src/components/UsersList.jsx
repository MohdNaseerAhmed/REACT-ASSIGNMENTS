// src/components/UsersList.jsx
import User from './User';
import './UsersList.css';

function UsersList() {
  // Mock user data
  const users = [
    { id: 1, name: 'User 1', description: 'Profile 1' },
    { id: 2, name: 'User 2', description: 'Profile 2' },
    { id: 3, name: 'User 3', description: 'Profile 3' },
    { id: 4, name: 'User 4', description: 'Profile 4' },
    { id: 5, name: 'User 5', description: 'Profile 5' },
    { id: 6, name: 'User 6', description: 'Profile 6' },
    { id: 7, name: 'User 7', description: 'Profile 7' },
    { id: 8, name: 'User 8', description: 'Profile 8' },
  ];

  return (
    <div className="users-list">
      {users.map(user => (
        <User key={user.id} name={user.name} description={user.description} />
      ))}
    </div>
  );
}

export default UsersList;