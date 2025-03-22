import React, { createContext } from 'react'
import {useState} from 'react';
export const counterContextObj = createContext();

function CounterContext({children}) {
  const [counter,setCounter]=useState(10)
  return (
    <counterContextObj.Provider value={{counter,setCounter}}>
      {children}
    </counterContextObj.Provider>
  )
}

export default CounterContext