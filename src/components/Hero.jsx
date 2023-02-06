import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../requests'
import {BsFillPlayFill} from "react-icons/bs"
import {BiInfoCircle} from "react-icons/bi"
const Hero = () => {
    const [movies, setMovies] = useState([])
    const movie  = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(requests.requestPopular).then ((response) => {
            setMovies(response.data.results)
        })
    },[])
    //console.log(movie);
    const truncateString = (str,num) => {
      if(str?.length > num) {
        return str.slice(0,num) + '....';
      }
      else {
        return str;
      }
    };

  return (
    <div className='w-full h-[550px]'>
      <div className='w-full h-full '>
        <div className='absolute w-full h-[550px]  bg-gradient-to-r from-black'>
        </div>
        <img className='w-full h-full object-cover overflow-hidden ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='movie?.title'/>
        <div className='absolute w-full top-[20%] flex flex-col md:pl-16 pl-6'>
            <h1 className='text-white md:text-6xl mb-4 text-4xl '>
            {movie?.title}
            </h1>
            <p className="text-gray-300 w-[85%] sm:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-ellipsis mb-4 ">
                {truncateString(movie?.overview,150)}
              </p>
              <p className="text-gray-400 mb-4">
                Released:{movie?.release_date}
              </p>
              <div className='flex gap-2'>
                <button className='flex gap-1 items-center border rounded-md bg-white px-4 py-2 transition hover:opacity-75' >
                  <BsFillPlayFill className=' cursor-not-allowed'/> Play
                </button>
                <button className='flex gap-1 items-center bg-transparent border border-gray-500 rounded-md text-white font-semibold px-4 py-2 transition hover:opacity-75 ' >
                  <BiInfoCircle className=' cursor-not-allowed'/>More Info
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero