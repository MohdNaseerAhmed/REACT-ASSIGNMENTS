// src/App.jsx
import NumberList from './components/NumberList';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Assignment: Numbers and Users</h1>
      <div className="main-frame">
        <div className="left-column">
          <NumberList />
        </div>
        <div className="right-column">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;