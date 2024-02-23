import React from 'react'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';
import { addMovieClip } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ posterPath, movie }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMovieClick = async () => {
    dispatch(addMovieClip(movie));
    navigate("/movie");
  }

  return (
    <div className='w-36 md:w-48 pr-4 cursor-pointer' onClick={() => handleMovieClick()}>
        <img alt="Movie card" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard;
