import React from 'react'
import{BsFillHeartFill} from "react-icons/bs"
import SavedMovie from '../components/SavedMovie'

const Account = () => {
  
  
  return (
    <>
      <div className='w-full h-[580] text-white'>
      <img className=' absolute w-screen h-[280px] overflow-hidden object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
      <div className='absolute w-full h-[280px]  bg-gradient-to-r from-black'></div>
          <p className=' relative text-3xl font-bold top-24 left-[2%] inline-flex text-white items-center gap-2 mx-8 my-6'>My Wishlist<BsFillHeartFill className='text-red-700'/></p>  
    </div>
    <SavedMovie/> 
    </>
    
    
  )
}

export default Account