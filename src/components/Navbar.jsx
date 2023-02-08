import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

const Navbar = () => {

  const {user, logOut} = UserAuth()
  const [isScrolled, setIsScrolled] =useState(false);
  const navigate = useNavigate()
  const handleLogout = async() => {
    try {
      await logOut();
      navigate('/SignIn');
    }catch(error){
      alert(error)
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}>
      <Link to="/">
        <div className=' flex items-center space-x-2 md:space-x-10'>
        <img className=' ml-8' src='https://rb.gy/ulxxee' width={120} height={120}/>  
        </div> 
      </Link>
     
    {user?.email ?
    <div className='font-light flex items-center text-sm'>   
      <Link to='/Account'>
        <h3 className='text-white mr-3 border-transparent rounded py-2 px-5 cursor-pointer'><img className='w-8 rounded-sm' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/></h3></Link>    
        <button onClick={handleLogout} className='text-white rounded py-2 px-5 bg-red-700 cursor-pointer'>Log Out</button>
     </div>:
    <div className='font-light flex items-center text-sm'>   
      <Link to='/SignIn'>
        <h3 className='text-white mr-3 border-transparent rounded py-2 px-5 cursor-pointer'>Sign In</h3></Link>
      <Link to='/SignUp'>
        <h3 className='text-white rounded py-2 px-5 bg-red-700 cursor-pointer'>Sign Up</h3>
      </Link>
    </div>
  } 
    
    </header>
  )
}

export default Navbar