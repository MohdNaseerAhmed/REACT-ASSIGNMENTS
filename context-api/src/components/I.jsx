import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/CounterContext'
function I() {
  const {counter,setCounter}=useContext(counterContextObj)
  return (
    <div className='lead bg-danger'>
        <h1>Component-I</h1>
        <h2 className='text-white'>Counter - {counter}</h2>
        <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>Increment</button>
    </div>
  )
}

export default I