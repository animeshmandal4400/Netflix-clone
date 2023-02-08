import React from 'react'
import{BsFillHeartFill} from "react-icons/bs"
import { collection, getDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const Account = () => {
  
  
  return (
    <div className='w-full h-[580] text-white'>
      <img className='w-screen h-[280px] overflow-hidden object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
        <div className='text-white flex flex-col gap-3 mx-8 my-6'>
          <p className=' text-xl inline-flex items-center gap-2'>Your Wishlist<BsFillHeartFill className='text-red-700'/></p>
          <div>

          </div>
        </div>
    </div>
  )
}

export default Account