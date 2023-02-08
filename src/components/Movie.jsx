import React,{useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

const movie = ({item}) => {
    const [wishlist, setWishlist] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();
    const movieId = doc(db, 'users', `${user?.email}`);

    const saveMovie = async() => {
      if(user?.email) {
        setWishlist(!wishlist)
        setSaved(true)
        await updateDoc(movieId,{
          savedMovies:arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          })
        })
      } else{
        alert("please login before save a movie")
      } 
      console.log(user);
    }
   
  return (
    <div>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2 shadow-lg'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt='movie?.title'/>
                    <div className='absolute  top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className=' whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ' >{item?.title}</p>
                        <div className='absolute flex items-center justify-end gap-2 right-2 top-2'>
                            <p className=' whitespace-normal text-xs md:text-sm font-medium text-yellow-500 text-center '>IMDb:⭐{item?.vote_average}</p>
                            <p onClick={saveMovie}>
                              { wishlist ? (<FaHeart className=' text-red-600'/>) :
                              (<FaRegHeart className=' '/>) }  
                            </p>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default movie