// src/App.jsx
import Navbar from 'c:/Users/nasee/Documents/react/Assignment-2.3.1/src/components/NavBar';
import UsersList from './components/UsersList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <UsersList />
      <Footer />
    </div>
  );
}

export default App;