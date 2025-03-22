import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { loginContextObj } from '../../contexts/LoginContext';
function Login() {
  const{register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();
  //const [userLoginErr,setuserLoginErr]=useState(null);
  const {loginError,loginStatus,onUserLogin}=useContext(loginContextObj)
  // function onUserLogin(data){
  //   //console.log(data)
  //   //we can destructure the data to username and password^^^
  //   fetch(`http://localhost:3000/users?username=${data.username}&password=${data.password}`)
  //   .then(res=>res.json())
  //   .then(userObjList=>{
  //     if(userObjList.length==0){
  //       setuserLoginErr({message:"Username or Password is incorrect"})
  //     }else{
  //          //console.log(userObjList[0])
  //         navigate('/Profile',{state:userObjList[0]})
  //     }
  //   }).catch(err=>setuserLoginErr(err))
  // }
  useEffect(()=>{
    if(loginStatus==true){
      navigate('/Profile')
    }
  },[loginStatus])
  return (
    <div>
      <h1 className="display-2 text-success"style={{textAlign:"center"}}>User Login</h1>
      {
        loginError!== null && <p className='text-danger fs-1 text-center'>{loginError.message}</p>
      }
      <div className="form">
        <form onSubmit={handleSubmit(onUserLogin)}>
          <label  htmlFor="username">Username</label> 
          <input id='username' type="text" {...register('username',{required:true})}/>
          {errors.username?.type=="required"&&<p className='text-danger'id='para'>Username is required</p>}
          <label  htmlFor="password">Password</label>
          <input id='password' type='password'{...register('password',{required:true})} />
          {errors.password?.type=="required"&&<p className='text-danger'id='para'>Password is required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login