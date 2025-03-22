import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Routing from './components/routing/Routing';
import { createBrowserRouter ,Navigate,RouterProvider} from 'react-router-dom';
import Routing from './components/routing/Routing'
import Home from './components/routing/Home';
import Login from './components/routing/Login';
import Register from './components/routing/Register';
import Tech from './components/routing/Tech';
import RouteError from './components/routing/RouteError';
import Userprofile from './components/routing/Userprofile';
import Java from './components/routing/Java';
import Nodejs from './components/routing/Nodejs';
import Vue from './components/routing/Vue';
//import Forms from './components/Forms';
// import First from './components/first/First'
// import Second from './components/second/Second'
// import Products from './components/react-session-2/Products';
// import Eventdemo from './components/eventdemo/Eventdemo';
//import Statechanges from './components/eventdemo/Statechanges';
//import Effectdemo from './components/Effectdemo';
function App(){
  const browserRouterObj=createBrowserRouter([
    {
      path:"",
      element:<Routing/>,
      errorElement:<RouteError/>,
      children:[
        {
          path:"",
          element:<Home/>,
        },
        {
          path:"Login",
          element:<Login/>,
        },
        {
          path:"Register",
          element:<Register/>,
        },
        {
          path:"Tech",
          element:<Tech/>,
          children:[
            {
              path:"java",
              element:<Java/>,
            },
            {
              path:"nodejs",
              element:<Nodejs/>,
            },
            {
              path:"vue",
              element:<Vue/>,
            },
            {
              path:"",
              element:<Navigate to={"java"}/>
            }
          ]
        },
        {
          path:"Profile",
          element:<Userprofile/>,
        }
      ]
    }
  ])





return(
  <RouterProvider router={browserRouterObj}/>
  // <div className='conainer text-center'>
  //   {/* <h1 className='display-1 tect-primary bg-warning'>WELCOME TO REACT</h1> */}
  //   {/* <First/> */}
  //   {/*<Second/>*/}
  //   {/* <Products/> */}
  //   {/* <Eventdemo/> */}
  //   {/* <Statechanges/> */}
  //   {/* <Effectdemo/> */}
  //   {/* <Forms/> */}
    
  // </div>
);
}

export default App;