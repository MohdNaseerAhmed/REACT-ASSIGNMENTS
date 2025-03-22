import React from 'react'
import C from './components/C'
import B from './components/B'
import A from './components/A'
function App() {
  return (
    <div>
      <h1 className='text-info text-center display-1 '>Context demo</h1>
      <div className='d-flex justify-content-around  flex-wrap'>
      <A/>
      <B/>
      <C/>
      </div>
    </div>
  )
}

export default App