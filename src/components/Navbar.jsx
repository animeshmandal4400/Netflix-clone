import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] =useState(false);
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
    <div className=' flex items-center space-x-2 md:space-x-10'>
        <img className=' ml-8' src='https://rb.gy/ulxxee' width={120} height={120}/>  
    </div>  
    <div className='font-light flex items-center space-x-4 text-sm'>   
        <h3 className='text-white mr-3 border-transparent rounded py-2 px-5 cursor-pointer'>Sign In</h3>
        <h3 className='text-white border rounded py-2 px-5 bg-red-700 cursor-pointer'>Sign Up</h3>
    </div> 
    
    </header>
  )
}

export default Navbar