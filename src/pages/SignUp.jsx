import React from 'react'
import { BsChevronRight} from 'react-icons/bs'
const SignUp = () => {
  return (
    <div className='w-full h-full'>
        <img className='absolute h-screen w-full object-cover opacity-40' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''/>
          <div className='bg-black/30 fixed top-0 left-0 w-full h-screen'></div>
        <div className='w-full px-4 py-28 fixed'> 
            <div className='m-auto px-16 py-20 lg:w-[940px] lg:h-[550px] min-w-[320px] min-h-[320px]'>
              <div className='text-white text-center flex flex-col md:block  '>
                <h2 className='md:text-6xl text-4xl font-extrabold px-3 tracking-wide'>Unlimited movies, TV shows and more.</h2>
                <p className='md:text-3xl text-xl my-5 font-semibold'>Watch anywhere. Cancel anytime.</p>
                <p className='md:text-xl text-sm font-normal my-5'>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
              <form className='grid sm:grid-cols-3 gap-2 '>
                <input className=' sm:h-14 h-8 p-4 w-[100%]' placeholder='Email address' type='email'></input>
                <input className=' sm:h-14 h-8 p-4 w-[100%]' placeholder='Password' type='password'></input>
                <button className=' sm:h-14 h-8 flex justify-center items-center bg-[#e50914] text-white md:text-2xl text-base px-2 gap-2'>Get Started<BsChevronRight/></button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp
