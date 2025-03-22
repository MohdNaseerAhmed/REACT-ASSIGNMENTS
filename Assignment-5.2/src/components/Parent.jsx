// src/components/Parent.jsx
import { useState } from 'react';
import Child from './Child';
import './Parent.css';

function Parent() {
  const [counter, setCounter] = useState(10); // Initial counter value is 10

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className="parent-container">
      <h2>Parent</h2>
      <div className="counter-display">
        Counter: {counter}
      </div>
      <Child onIncrement={incrementCounter} onDecrement={decrementCounter} />
    </div>
  );
}

export default Parent;