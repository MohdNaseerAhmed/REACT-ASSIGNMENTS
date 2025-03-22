import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/CounterContext'
function F() {
  const {counter,setCounter}=useContext(counterContextObj)
  return (
    <div className='lead bg-secondary'>
        <h1>Component-F</h1>
        <h2 className='text-white'>Counter - {counter}</h2>
        <button className="btn btn-warning" onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  )
}

export default F