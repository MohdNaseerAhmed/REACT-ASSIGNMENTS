import React from 'react'
import { useContext } from 'react'
import {userContextObj} from '../contexts/UsersContext';
function E() {
  let {users}=useContext(userContextObj)
  return (
    <div className='lead bg-danger'>
        <h1>Component-E</h1>
        <h3>{users[0]?.name}</h3>
    </div>
  )
}

export default E