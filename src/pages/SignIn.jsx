import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='w-full h-screen'>
        <img className='absolute h-screen w-full hidden md:block object-cover opacity-40' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''/>
        <div className='bg-black/30 fixed top-0 left-0 w-full h-screen'></div>
        <div className=' w-full px-4 py-28 fixed'>
            <div className='bg-black/60 m-auto px-16 py-20 rounded-md w-full md:max-w-[450px] h-[550px]'>
                
                <h2 className='text-white text-3xl font-bold mb-8'>Sign In</h2>
                <input className=' bg-[#333] w-full p-4 h-14 rounded-md mb-8 text-white' placeholder='Enter your Email' type="email"></input>
                <input className='bg-[#333] w-full p-4 h-14 rounded-md mb-8 text-white' placeholder='Password' type='password'></input>
                
                <button className='flex justify-center items-center bg-red-700 w-full h-12 font-semibold text-white rounded-md '>
                    Sign In
                </button>
                <div className='flex  w-full justify-between my-2 font-light text-white'>
                     <p> <input type="checkbox"></input> Remember me</p>
                     <p>Need help?</p>
                </div>
                <p className='text-white flex gap-2 my-4'>
                    <span className='text-gray-400'>New to Netflix?</span>
                    <Link to='/SignUp'>Sign up now.</Link></p>
            </div>
        </div>

    </div>
  )
}

export default SignIn