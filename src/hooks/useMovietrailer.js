import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';

const useMovietrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const videos = await data.json();
        const filterTrailer = videos.results.filter(video => video?.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer : videos.results[0];
        dispatch(addMovieTrailer(trailer));
    }
  
    useEffect(()=> {
        getMovieVideos();
    }, []);

}

export default useMovietrailer;
