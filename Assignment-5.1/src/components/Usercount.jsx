// src/components/Usercount.jsx
import './Usercount.css';

function Usercount({ count }) {
  return (
    <div className="usercount-container">
      <h3>User Count: {count}</h3>
    </div>
  );
}

export default Usercount;