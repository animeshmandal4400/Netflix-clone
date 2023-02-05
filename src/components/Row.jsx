import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Row = ({title,fetchUrl}) => {
    const [movies,setMovies]= useState([]);
    useEffect(()=> {
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchUrl])
    console.log(movies);
  return (
    <>
    <div className=' bottom-96'>
    <h1 className='text-white font-bold ms-text-xl p-4'>
        {title}
    </h1>
    <div className='relative flex items-center'>
        <div id={'slider'}>
            {movies?.map((item,id) => (
                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt='movie?.title'/>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p>{item?.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Row