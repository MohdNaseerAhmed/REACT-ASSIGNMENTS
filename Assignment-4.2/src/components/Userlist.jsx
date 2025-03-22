// src/components/Userlist.jsx
import './Userlist.css';

function Userlist({ users }) {
  return (
    <div className="userlist-container">
      <h3 className="userlist-title">List of Users</h3>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Date of Birth</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Userlist;