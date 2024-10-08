import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

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
        },
        {
          path:'sign-up',
          element:<SignUp/>
        },
        {
          path:'forgot-password',
          element:<ForgotPassword/>
        }
    ]
  }])
  export default router