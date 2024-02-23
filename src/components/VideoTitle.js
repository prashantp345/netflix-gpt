import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({title, overview, movie, playMovie}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    if(playMovie) {
      playMovie(true);
    } else { 
      navigate("/movie");
    }
  }

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-tr from-black">
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='pt-6 text-lg lg:w-1/4 lg:line-clamp-3 line-clamp-2 hidden'>{overview}</p>
        <div className='md:mt-1 mt-2 pt-6'>
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg font-bold'
            onClick={()=>handlePlayClick()}> Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-70 rounded-lg font-bold'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
