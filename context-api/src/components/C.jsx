import React from 'react'
import H from './H'
import I from './I'

function C() {
  return (
    <div className='lead bg-warning p-5 text-center'>
        <h1>Component-C</h1>
        <div  className='d-flex justify-content-around '>
            <H/>
            <I/>
        </div>
    </div>
  )
}

export default C