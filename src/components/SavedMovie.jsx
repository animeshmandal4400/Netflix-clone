import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {MdRemoveCircle} from 'react-icons/md'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { async } from '@firebase/util';
const SavedMovie = () => {
    const [movies, setMovies] =useState();
    const {user} = UserAuth()
    const leftSlide = () => {
        var slider= document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft+500;
        } 
    const RightSlide = () => {
        var slider= document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft-500;
        }

    useEffect (() => {
        onSnapshot(doc(db, 'users', `${user?.email}`) , (doc) => {
            setMovies(doc.data()?.savedMovies)
        }
        )
    },[user?.email])    
    
    const movieRef = doc(db, 'users', `${user.email}`)
    const deleteShow = async (passedId) => {
      try {
          const result = movies.filter ((item) => item.id !== passedId)
          await updateDoc(movieRef, {
            savedMovies:result,
          })
      } catch(error) {
        console.log(error)
      }
    }

  return (
   <>
     <h2 className='text-white font-bold text-xl p-4'>my wishlist</h2>
    <div className='relative flex items-center group mt-40'>
        <BsChevronLeft onClick={leftSlide} className= 'hidden bg-white rounded-full opacity-30 hover:opacity-80 p-1 m-1 z-40 absolute group-hover:block' size={30}/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
            {movies?.map((item,id) => (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt='movie?.title'/>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className=' white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center' >{item?.title}</p>
                <div className='absolute flex items-center justify-end gap-2 right-2 top-2'>
                    <p><MdRemoveCircle onClick={()=> deleteShow(item.id)} size={20}/></p>
                </div>
            </div>
            </div>
            ))}
        </div>
        <BsChevronRight onClick={RightSlide} className='hidden  bg-white border rounded-full opacity-30 hover:opacity-80 p-1 m-1 z-40 absolute right-0 group-hover:block' size={30}/>
    </div>
   </>
   
  )
}

export default SavedMovie