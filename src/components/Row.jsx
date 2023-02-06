import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
const Row = ({title,fetchUrl, rowID}) => {
    const [movies,setMovies]= useState([]);
    useEffect(()=> {
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchUrl])
    //console.log(movies);
    const leftSlide = () => {
        var slider= document.getElementById('slider'+rowID);
        slider.scrollLeft= slider.scrollLeft+500;
    } 
    const RightSlide = () => {
        var slider= document.getElementById('slider'+rowID);
        slider.scrollLeft= slider.scrollLeft-500;
    } 

    return (
    <>
    <h2 className='text-white font-bold text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <BsChevronLeft onClick={leftSlide} className= 'hidden bg-white border rounded-full opacity-30 hover:opacity-80 p-1 m-1 z-40 absolute group-hover:block' size={30}/>
        <div id={'slider' +rowID} className='flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
            {movies?.map((item,id) => (
            <Movie key={id} item={item} />
            ))}
        </div>
        <BsChevronRight onClick={RightSlide} className='hidden  bg-white border rounded-full opacity-30 hover:opacity-80 p-1 m-1 z-40 absolute right-0 group-hover:block' size={30}/>
    </div>
    </>
  )
}

export default Row