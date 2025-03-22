// src/components/Profile.jsx
import './Profile.css';

function Profile({ title, description, author, date }) {
  return (
    <div className="profile-card">
      <div className="profile-image"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="profile-meta">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Profile;