import React from 'react'
import { useState,useEffect } from 'react'
function Effectdemo() {
    let [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(postList=>setPosts(postList))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h1>Effectdemo</h1>
        <table className='table'>
            <tbody>
                {
                    posts.map(postObj=><tr key={postObj.id}>
                        <td>{postObj.userId}</td>
                        <td>{postObj.title}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Effectdemo; 