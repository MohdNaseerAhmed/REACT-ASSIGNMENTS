// src/components/NumberList.jsx
import { useState } from 'react';
import './NumberList.css';

function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [newNumber, setNewNumber] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');

  const addNumberAtStart = () => {
    if (newNumber === '') return;
    setNumbers([parseInt(newNumber), ...numbers]);
    setNewNumber('');
  };

  const addNumberAtEnd = () => {
    if (newNumber === '') return;
    setNumbers([...numbers, parseInt(newNumber)]);
    setNewNumber('');
  };

  const deleteNumber = () => {
    if (deleteIndex === '' || deleteIndex < 0 || deleteIndex >= numbers.length) {
      alert('Please enter a valid index to delete');
      return;
    }
    const updatedNumbers = numbers.filter((_, index) => index !== parseInt(deleteIndex));
    setNumbers(updatedNumbers);
    setDeleteIndex('');
  };

  return (
    <div className="number-list">
      <h2>Number List</h2>
      <div className="numbers">
        <h3>Numbers: [{numbers.join(', ')}]</h3>
      </div>
      <div className="add-section">
        <h4>Add a Number</h4>
        <input
          type="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={addNumberAtStart}>Add at Start</button>
        <button onClick={addNumberAtEnd}>Add at End</button>
      </div>
      <div className="delete-section">
        <h4>Delete a Number</h4>
        <input
          type="number"
          value={deleteIndex}
          onChange={(e) => setDeleteIndex(e.target.value)}
          placeholder="Enter index to delete"
        />
        <button onClick={deleteNumber}>Delete</button>
      </div>
    </div>
  );
}

export default NumberList;