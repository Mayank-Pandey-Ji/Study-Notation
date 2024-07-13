
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import {toast} from 'react-hot-toast'
const Navbar = (props) => {

  let isLoggedIn = props.isLoggedin;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (

    <div className=' flex  justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto'>
      
      <Link to="/" >
        <img src={Logo} alt="" width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex  gap-x-6 text-[#dbddea] tracking-wide text-[16px]'>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
      </nav>

      {/* Login singup logout dashboard */}
      <div className='flex items-center gap-x-4 '>
        { !isLoggedIn &&  <Link to='/login'><button className='bg-[#161d29] text-[#afb2bf] py-[8px] px-[12px] rounded-[8px] border border-[#2c333f] '>Log in</button></Link>}
        { !isLoggedIn && <Link to='signup' ><button className='bg-[#161d29] text-[#afb2bf]  py-[8px] px-[12px] rounded-[8px] border border-[#2c333f] '>Sign up</button></Link>}
        { isLoggedIn && <Link to='/'  onClick={() => {setIsLoggedIn(false) 
          toast.success("Logged Out") }} ><button className='bg-[#161d29] text-[#afb2bf]  py-[8px] px-[12px] rounded-[8px] border border-[#2c333f] '>Log Out</button></Link>}
        { isLoggedIn &&  <Link to='/dashboard'><button className='bg-[#161d29] text-[#afb2bf] py-[8px] px-[12px] rounded-[8px] border border-[#2c333f] '>Dashboard</button></Link>}
      </div>

    </div>
  )
}

export default Navbar
