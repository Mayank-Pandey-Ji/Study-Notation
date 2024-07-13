import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import{FcGoogle} from 'react-icons/fc'
const Template = ({title , desc1 , desc2 , image , formType , setIsLoggedIn}) => {
  return (
    <div className='flex  justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0'>
      
      <div className=' w-11/12 max-w-[450px]'>
        <h1 className='text-[#f1f2ff] font-semibold text-[1.876rem] tracking-wide leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-[#afb2bf]'>{desc1}</span>
            <br />
            <span className='text-[#47a5c5] italic'>{desc2}</span>
        </p>

        {
            formType === "signup" ?
            ( <SignupForm setIsLoggedIn = {setIsLoggedIn}/> ) :
            (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)
        }

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='bg-[#2c333f] w-full h-[1px]'></div>
            <p className='text-[#2c333f] font-medium leading-[1.375rem]'>OR</p>
            <div className='bg-[#2c333f] w-full h-[1px]'></div>
        </div>

        <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-[#afb2bf] border-[#2c333f] border px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle/>
            <p>Sign in with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} alt="Pattern"  width={558} height={504} loading='lazy'/>
        <img className=' absolute -top-4 right-4' src={image} alt="Pattern"  width={558} height={504} loading='lazy'/>
      </div>

    </div>
  )
}

export default Template
