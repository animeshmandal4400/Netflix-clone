import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-between h-16 items-center my-3 absolute z-[100]'>
        <img className='w-28 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'/>        
        <button className='flex mr-8'>
        <h3 className='text-white mr-3 border-transparent rounded py-2 px-5 '>Sign In</h3>
        <h3 className='text-white border rounded py-2 px-5 bg-red-700'>Sign Up</h3>
        </button>
        
    </div>
  )
}

export default Navbar