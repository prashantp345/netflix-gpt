import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';

const useMovietrailer = (movieId) => {
    
    const movieTrailer = useSelector((store) => store.movies.movieTrailer);
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const clipsOfMovie = await data.json();
        const filterTrailers = clipsOfMovie.results.filter(video => video?.type === "Trailer");
        const trailer = filterTrailers.length ? filterTrailers[0] : clipsOfMovie.results[0];
        dispatch(addMovieTrailer(trailer));
    }
  
    useEffect(()=> {
        !movieTrailer && getMovieVideos();
    }, []);

}

export default useMovietrailer;
