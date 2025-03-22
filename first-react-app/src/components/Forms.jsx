import React from 'react'
import { useState } from 'react';
import "./Forms.css";
const isNameRequired=true;
function Forms() {
  const[values,setValues]=useState({
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    gender:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })
  function handleChange(e){
    setValues({...values,[e.target.name]:[e.target.value]})
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(values)
  }
  function ResetFun(){
    setValues({
      firstname:'',
      lastname:'',
      email:'',
      contact:'',
      gender:'',
      subject:'',
      resume:'',
      url:'',
      about:''
    })
  }
  return (
    <div className='form'>
        <h1>Form in React</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First name*</label>
            <input type="text"placeholder='Enter First Name' name="firstname" 
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.firstname}/>

            <label htmlFor="lastname">Last name*</label>
            <input type="text"placeholder='Enter Last Name'name='lastname'
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.lastname} />

            <label htmlFor="email">Email*</label>
            <input type="email"placeholder='Enter Email' name='email'
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.email} />

            <label htmlFor="contact">Contact*</label>
            <input type="text"placeholder='Enter Phone numner' name ="contact"
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.contact} />

            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" 
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.gender}/>Male
            <input type="radio" name="gender" 
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.gender}/>Female
            <input type="radio" name="gender"
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.gender} />Others 

            <label htmlFor="subject">Subjects</label>
            <select name="subject" id="subject"onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.subject} >
              <option value="select">--select--</option>
              <option value="math">Math</option> 
              <option value="science">Science</option>
              <option value="social">Social</option>
            </select>
            <label htmlFor="resume">Resume</label>
            <input type="file" placeholder='Select file' name="resume" 
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.resume}/>

            <label htmlFor="url">URl</label>
            <input type="text"name='url'placeholder='enter image url' 
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.url}/>

            <label htmlFor="about">About</label>
            <textarea name="about" id="about" cols={30} rows={10}
            onChange={(e)=>handleChange(e)} reduired={isNameRequired} value={values.about}>.........</textarea>

            <button type="button" onClick={ResetFun}>Reset</button>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Forms;