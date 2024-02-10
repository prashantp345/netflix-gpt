import React from 'react';
import { useSelector } from 'react-redux';
import useMovietrailer from '../hooks/useMovietrailer';

const VideoBackground = ({movieId}) => {
    
    useMovietrailer(movieId);
    const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
    if(!movieTrailer) return;
    return (
        <div className='w-screen'>
            <iframe 
                className="w-screen aspect-video"
                src={ "https://www.youtube.com/embed/"+movieTrailer?.key+"?autoplay=1&mute=1" }
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
    )
}

export default VideoBackground
