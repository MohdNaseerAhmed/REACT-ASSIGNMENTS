// src/components/Users.jsx
import Usercount from './Usercount';
import './Users.css';

function Users({ users, userCount, onAddUser }) {
  // Take only the first 4 users
  const displayedUsers = users.slice(0, 4);

  return (
    <div className="users-container">
      <Usercount count={userCount} />
      <div className="row">
        {displayedUsers.map(user => (
          <div key={user.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <button className="btn btn-primary" onClick={onAddUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;