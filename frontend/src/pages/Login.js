import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword]=useState(false)
const [formData, setFormData]=useState({
  email:"",
  password:""
})
const handleChange=(e)=>{
  const {name, value}=e.target
  setFormData((prev)=>{
    return{
    ...prev,
    [name]:value
}})
}
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("form data", formData)
  }
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>
          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                              <input type="email"
                               placeholder="email" className="w-full h-full outline-none bg-transparent" name="email" value={formData.email} onChange={handleChange}/>
                            </div>
                            </div>
                            <div>
                              <label>Password:</label>
                              <div className="bg-slate-100 p-2 flex">
                                <input placeholder="enter password" type={showPassword?"text":"password"} name="password" className="w-full h-full outline-none bg-transparent" value={formData.password} onChange={handleChange}/>
                                <div className="cursor-pointer text-1" onClick={()=>setShowPassword((prev)=>!prev)}>
                                <span>
                    {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
                  </span></div>                
                              </div>
                              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                              Forgot password ?
                              </Link>
                            </div>
                            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
          </form>
          <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
