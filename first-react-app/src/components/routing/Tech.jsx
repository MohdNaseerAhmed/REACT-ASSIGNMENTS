import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Tech() {
  return (
    <div>
        <ul className="nav text-dark d-flex justify-content-between fs-1 py-4 px-4">
            <li className="nav-item">
                <Link to="java"className='nav-link'>Java</Link>
            </li>
            <li className="nav-item">
                <Link to="nodejs"className='nav-link'>NodeJs</Link>
            </li>
            <li className="nav-item">
                <Link to="vue"className='nav-link'>Vue</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Tech