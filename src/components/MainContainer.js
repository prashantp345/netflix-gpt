import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovieClip } from '../utils/moviesSlice'

const MainContainer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;
    
    const { original_title, overview, id } = movies[0];

    const handleMovieClick = () => {
       dispatch(addMovieClip(movies[0]));
       navigate("/movie");
    }

    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} movie={movies[0]} 
                onClick={() => handleMovieClick()} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
