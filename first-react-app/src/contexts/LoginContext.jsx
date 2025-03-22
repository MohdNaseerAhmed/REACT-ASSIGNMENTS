import { createContext,useState,useEffect } from "react";
export const loginContextObj=createContext()

function LoginContext({children}) {
    const [currentUser,setCurrentUser]=useState(null);
    const [loginStatus,setLoginStatus]=useState(false);
    const [loginError,setLoginError]=useState(null)
     // user login
    function onUserLogin(data){
        //console.log(data)
        //we can destructure the data to username and password^^^
        fetch(`http://localhost:3000/users?username=${data.username}&password=${data.password}`)
        .then(res=>res.json())
        .then(userObjList=>{
          console.log(userObjList)
          if(userObjList.length==0){
            setLoginError({message:"Username or Password is incorrect"});
          }else{
              //console.log(userObjList[0])
              //navigate('/Profile',{state:userObjList[0]})
              //update the state of context
              setCurrentUser(userObjList[0]);
              setLoginError(null);
              setLoginStatus(true);
          }
        }).catch(err=>{
            setLoginError(err)
        })
      }
    // user logout
    function userLogout(){
        setCurrentUser(null);
        setLoginError(null);
        setLoginStatus(false);
    }
  return (
   <loginContextObj.Provider value={{currentUser,setCurrentUser,loginError,loginStatus,userLogout,onUserLogin}}>
        {children}
   </loginContextObj.Provider>
  );
}

export default LoginContext