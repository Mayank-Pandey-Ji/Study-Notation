import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
function App() {

  const [isLoggedin , setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-[rgb(0,8,20)] flex flex-col'>
      <Navbar isLoggedin = {isLoggedin} setIsLoggedIn = {setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element= 
            {
              <PrivateRoute isLoggedin = {isLoggedin}>
              <Dashboard/>
              </PrivateRoute> 
            }
        />
      </Routes>
      
    </div>
  );
}

export default App;
