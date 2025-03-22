import React from 'react'
import {Link} from 'react-router-dom';
import { useContext} from 'react';
import { loginContextObj } from '../../contexts/LoginContext';
function Header() {
    const {currentUser,loginStatus,userLogout}=useContext(loginContextObj)
  return (
    <div  className='bg-dark text-white d-flex justify-content-end py-3'>
        <ul className="nav">
            {
                loginStatus==false?<>
                <li className="nav-item">
                    <Link to=""className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="Register"className='nav-link'>Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="Tech"className='nav-link'>Technologies</Link>
                </li>
                <li className="nav-item">
                    <Link to="Login"className='nav-link'>Login</Link>
                </li>
                </>:
                <li className="nav-item">
                    <Link to="Login"className='nav-link'onClick={userLogout}>Logout</Link>
                    <span className='text-warning lead ms-3'>{currentUser.username}</span>
                </li>
            }
            
            
        </ul>
    </div>
  )
}

export default Header