import React from 'react'
import F from './F'
import G from './G'
function B() {
  return (
    <div className='lead bg-primary p-5 text-center'>
        <h1>Component-B</h1>
        <div  className='d-flex justify-content-around '>
            <F/>
            <G/>
        </div>
    </div>
  )
}

export default B