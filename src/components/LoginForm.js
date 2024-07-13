import React, { useState } from 'react'
import { FaRegEye , FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) => {
    const  navigate = useNavigate();
    const [formData , setFormData] = useState({email:""  ,password:""});
    const [showPassword , setShowPassword] = useState(false);
    function changeHandler(event)
    {
        setFormData(prevdata=>{
            {
               return {...prevdata , [event.target.name] : event.target.value}
            }
        })
    }

    
    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("printing the form data");
        console.log(formData);
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-red-700 text-[15px] font-semibold'>*</sup>
            </p>
        
            <input type="email" 
                required
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>
                Password<sup className='text-red-700 text-[15px] font-semibold'>*</sup>
            </p>
        
            <input 
                type = {showPassword ? ('text') : ('password')}
                required
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px]   cursor-pointer' onClick={()=> setShowPassword((prev) => !prev)}>
            {showPassword ? (<FaEyeSlash  fontSize={24} fill='#AFB2BF' />) : (<FaRegEye fontSize={24} fill='#AFB2BF' />)}
            </span>

            <Link to='#'>
                <p className='text-xs text-blue-400 mt-1 max-w-max ml-auto' >
                    Forgot Password
                </p>
            </Link>
        </label>
        <button className='bg-yellow-400 rounded-[8px] px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm
