// src/components/Child.jsx
import './Child.css';

function Child({ onIncrement, onDecrement }) {
  return (
    <div className="child-container">
      <h2>Child</h2>
      <div className="button-group">
        <button className="btn btn-increment" onClick={onIncrement}>
          Increment
        </button>
        <button className="btn btn-decrement" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Child;