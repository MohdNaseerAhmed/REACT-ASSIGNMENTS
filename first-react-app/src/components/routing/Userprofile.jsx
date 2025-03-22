import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
//import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { loginContextObj } from '../../contexts/LoginContext';
function Userprofile() {
  // const obj=useLocation() it is not required while using context
  const {register,handleSubmit,setValue}=useForm()
  //const [currentUser,setcurrentUser]=useState(obj.state)
  const [isEdit,setIsEdit]=useState(false)
  const {currentUser,setcurrentUser}=useContext(loginContextObj)
  function onEdit(){
    setIsEdit(true)
    setValue('username',currentUser.username||"")
    setValue('password',currentUser.password||"")
    setValue('email',currentUser.email||"")
    setValue('Dob',currentUser.Dob||"")
  }
  function onSave(modifideUserObj){
    //console.log(modifideUserObj)
    modifideUserObj.id=currentUser.id;
    fetch(`http://localhost:3000/users/${modifideUserObj.id}`,
     {
       method:'PATCH',
       headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(modifideUserObj)

     }
    ).then(res=>res.json())
    .then(data=>setcurrentUser(data))
    .catch(err=>console.log(err))
  }
  return (
    <div className='container my-5'>
      {
       isEdit==false? <div>
        <ul className="list-unstyled fs-1 text-primary text-center">
        <li>{currentUser.username}</li>
        <li>{currentUser.password}</li>
        <li>{currentUser.email}</li>
        <li>{currentUser.Dob}</li>
      </ul>
      <button className="btn btn-warning d-block mx-auto" onClick={onEdit}>Edit</button>
      </div>:
       <div>
        <h1 className="text-center text-warning mb-5 ">Edit User</h1>
        <form className='w-50 mx-auto bg-secondary my-4 rounded' onSubmit={handleSubmit(onSave)}>
        
        <input type="text" {...register('username') } className="form-control  mb-3"/>
        <input type="text" {...register('password') } className="form-control mb-3"/>
        <input type="email" {...register('email') } className="form-control mb-3"/>
        <input type="date" {...register('Dob') } className="form-control mb-3"/>   
        <button className="btn btn-success d-block mx-auto" >Save</button>  
       </form>
       </div>
       
      }
      
    </div>
  )
}

export default Userprofile