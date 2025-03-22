// src/components/Navbar.jsx
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;