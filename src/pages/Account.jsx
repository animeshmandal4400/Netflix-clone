import React from 'react'
import{BsFillHeartFill} from "react-icons/bs"
const Account = () => {
  return (
    <div className='w-full h-screen'>
        <div className='text-white flex flex-col gap-3'>
          <p className='text-2xl'>Your Account</p>
          <p className=' text-lg inline-flex items-center gap-2'>Your Wishlist<BsFillHeartFill className='text-red-700'/></p>
        </div>
    </div>
  )
}

export default Account