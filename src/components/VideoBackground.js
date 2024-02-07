import React from 'react';
import { useSelector } from 'react-redux';
import useMovietrailer from '../hooks/useMovietrailer';

const VideoBackground = ({movieId}) => {
    
    const movieTrailer = useSelector((store) => store.movieSlice?.movieTrailer);

    useMovietrailer(movieId);

    return (
        <div>
            <iframe 
                className="w-screen aspect-video"
                src={ "https://www.youtube.com/embed/SzINZZ6iqxY?si="+movieTrailer?.key+"&autoplay=1&mute=1" }
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
    )
}

export default VideoBackground
