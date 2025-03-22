import React, { useEffect ,useState} from 'react'
import { createContext } from 'react'
export const userContextObj=createContext();

function UsersContext({children}) {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(userData=>setUsers(userData))
        .catch(err=>console.log(err))
    },[])
  return (
    <userContextObj.Provider value={{users}}>
        {children}
    </userContextObj.Provider>
  )
}

export default UsersContext