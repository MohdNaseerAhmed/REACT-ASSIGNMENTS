import React from 'react'

function Eventdemo() {
    function handleClick(){
        console.log("clicked")
    }
  return (
    <div>
      <h1>Eventdemo</h1> 
      <button className='btn btn-success' onClick={handleClick}>Click</button>

    </div>
  )
}

export default Eventdemo