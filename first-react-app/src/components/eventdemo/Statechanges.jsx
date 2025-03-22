import React from 'react'
import {useState} from 'react';
function Statechanges() {
    let [a,setA]= useState(10)
    let [companyName,setCompanyName]=useState('masterConding');
    let [person,setperson] = useState({
      pid:100,
      name:"naseer",
      age:19
    })
    let [marks,setmarks]=useState([10,20,30]);
    function changemarks(){
      setmarks([...marks,50]);
    }

    function changeA() {
        setA(a+1);
    }
    function changeString(){
      setCompanyName('FULL STACK DEV');
    }
    function changeObject(){
      setperson({...person,pid:200,name:"zakir",age:20})
    }
  return (
    <div>
        <h1>Statechanges</h1>
        <h2>a is {a}</h2>
        <button className='btn btn-info' onClick={changeA}>change value of a </button>
        <h2>company name:{companyName}</h2>
        <button className="btn btn-warning" onClick={changeString}>chnge company</button>
        <p className="lead fs-2">person id :{person.pid}</p>
        <p className="lead fs-2">person id :{person.name}</p>
        <p className="lead fs-2">person id :{person.age}</p>
        <button className="btn btn-success"onClick={changeObject}>change person details</button>
        {marks.map((m,index)=><p className='fs-2'key={index}>{m}</p>)}
        <button className="btn btn-danger" onClick={changemarks}>marks</button>
    </div>
    
  )
}

export default Statechanges