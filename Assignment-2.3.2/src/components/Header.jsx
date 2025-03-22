// src/components/Header.jsx
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">The Project</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;