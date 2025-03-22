// src/components/User.jsx
import './User.css';

function User({ name, description }) {
  return (
    <div className="user-card">
      <div className="user-image"></div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default User;