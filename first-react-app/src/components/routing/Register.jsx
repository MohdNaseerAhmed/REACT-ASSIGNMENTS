import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import "./Register.css"
function Register() {
  const{register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();
  function onSubmit(data){
  //   console.log(data)
    fetch('http://localhost:3000/users',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(res=>{
      //console.log("res of post req is",res)
        navigate('/Login')
    }).catch(err=>{console.log("err for post req is",err)})
    }
  return (
    <div>
      <h1 className="display-2 text-success"style={{textAlign:"center"}}>User registration</h1>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label  htmlFor="username">Username</label> 
          <input id='username' type="text" {...register('username',{required:true})}/>
          {errors.username?.type=="required"&&<p className='text-danger' id='para'>Username is required</p>}
          <label  htmlFor="password">Password</label>
          <input id='password' type='password'{...register('password',{required:true})} />
          {errors.password?.type=="required"&&<p className='text-danger'id='para'>Password is required</p>}
          <label  htmlFor="email">Email</label>
          <input id='email' type="email"{...register("email",{required:true})}  />
          {errors.email?.type=="required"&&<p className='text-danger'id='para'>Email is required</p>}
          <label htmlFor="Dob">Date of  birth</label>
          <input id='Dob' type="date" {...register("Dob",{required:true})}  />
          {errors.Dob?.type=="required"&&<p className='text-danger'id='para'>Date of birth is required</p>}
          <button type="submit">Submit</button>
        </form>
      </div> 
    </div>
  )
}

export default Register