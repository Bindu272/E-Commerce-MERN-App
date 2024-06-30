import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";

  const router=createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:'',
            element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        }
    ]
  }])
  export default router