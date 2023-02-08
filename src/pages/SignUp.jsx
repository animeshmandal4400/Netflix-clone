import React, { useState } from 'react'
import { BsChevronRight} from 'react-icons/bs'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword ] = useState("")
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    }
    catch(error) {
      alert(error)
    }
  }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='absolute h-screen w-full object-cover opacity-40' src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''/>
          <div className='bg-black/30 fixed top-0 left-0 w-full h-screen'></div>
        <div className='relative px-4 py-28 h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center  '> 
            <div className='m-auto px-16 py-20 lg:w-[940px] lg:h-[550px] min-w-[320px] min-h-[320px]'>
              <div className='text-white text-center flex flex-col md:block  '>
                <h2 className='md:text-6xl text-4xl font-extrabold px-3 tracking-wide'>Unlimited movies, TV shows and more.</h2>
                <p className='md:text-3xl text-xl my-5 font-semibold'>Watch anywhere. Cancel anytime.</p>
                <p className='md:text-xl text-sm font-normal my-5'>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
              <form onSubmit={handleSubmit} className='grid sm:grid-cols-3 gap-2 text-black'>
                <input onChange={(e) => setEmail(e.target.value)} className=' sm:h-14 h-8 p-4 w-[100%]' placeholder='Email address' type='email'></input>
                <input onChange={(e) => setPassword(e.target.value)} className=' sm:h-14 h-8 p-4 w-[100%]' placeholder='Password' type='password'></input>
                <button className=' sm:h-14 h-8 flex justify-center items-center bg-[#e50914] text-white md:text-2xl text-base px-2 gap-2'>Get Started<BsChevronRight/></button>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
