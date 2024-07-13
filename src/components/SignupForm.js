import React, { useState } from 'react'
import { FaRegEye , FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';


const SignupForm = ({setIsLoggedIn}) => {

  const [showPassword , setShowPassword] = useState(false)
  const [s2 , sets2] = useState(false);
  const [accountType , setAccountType] = useState("student");
  let navigate = useNavigate();

  const [formData , setFormData] = useState({
    firstname:"" ,
    lastname:"" ,
    email:"",
    password:"",
    confirmPassword:""
  })

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
      if(formData.password != formData.confirmPassword)
        {
          toast.error("Password not matched");
          return;
        }
      else
      {
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
          ...formData
        };

        const finalData = {
          ...accountData , accountType
        }

        console.log("printing final account data");
        console.log(finalData);
        navigate("/dashboard");
      }
    }

  return (
    <div>
      {/* student - instructor tab */}
      <div className='flex bg-[#161d29] gap-x-1 my-6 rounded-full max-w-max p-1'>
        <button onClick={()=> setAccountType("student")} className={ `1${accountType === "student" ? " bg-[#000814] text-[#f1f2ff]" : "bg-transparent text-[#999daa]"} py-2 px-5 rounded-full transition-all duration-200 `}>
          Student
        </button>
        <button onClick={() => setAccountType("instructor")} className={ `1${accountType === "instructor" ? " bg-[#000814] text-[#f1f2ff]" : "bg-transparent text-[#999daa]"} py-2 px-5 rounded-full transition-all duration-200`}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        
        <div className='flex w-full justify-between items-center gap-x-4 mt-[20px]'>
          <label className='w-full' htmlFor="">
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]' >First Name <sup className='text-red-700 text-[15px] font-semibold' >*</sup></p>
            <input type="text"
              required
              name='firstname'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstname}
               className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
          </label>

          <label className='w-full'  htmlFor="">
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]' >last Name <sup className='text-red-700 text-[15px] font-semibold'>*</sup></p>
            <input type="text"
              required
              name='lastname'
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastname}
               className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
          </label>
        </div>

            <div className='w-full mt-[20px]'>
            <label className='w-full mt-[20px]'  htmlFor="">
              <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Email Address <sup className='text-red-700 text-[15px] font-semibold'>*</sup></p>
              <input type="email"
                required
                name='email'
                onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.email}
                 className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
              />
            </label>
            </div>

        <div className='w-full flex justify-between items-center gap-x-4 mt-[20px]'>
          <label htmlFor="" className='w-full relative'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Create Password <sup className='text-red-700 text-[15px] font-semibold'>*</sup></p>
          <input 
                type = {showPassword ? ('text') : ('password')}
                required
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                 className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px]   cursor-pointer'  onClick={()=> setShowPassword((prev) => !prev)}>
                {showPassword ? (<FaEyeSlash  fontSize={24} fill='#AFB2BF'  />) : (<FaRegEye  fontSize={24} fill='#AFB2BF'  />)}
            </span>

          </label>

          <label htmlFor="" className='w-full relative '>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-red-700 text-[15px] font-semibold'>*</sup></p>
          <input 
                type = {s2 ? ('text') : ('password')}
                required
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder='Confirm Password'
                name='confirmPassword'
                 className='bg-[#161d29] rounded-[0.5rem] text-[#f1f2ff] w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={()=> sets2((prev) => !prev)}>
            {s2 ? (<FaEyeSlash  fontSize={24} fill='#AFB2BF' />) : (<FaRegEye fontSize={24} fill='#AFB2BF' />)}
            </span>

          </label>
        </div>

        <button className='w-full bg-yellow-400 rounded-[8px] px-[12px] py-[8px] mt-6'>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm
