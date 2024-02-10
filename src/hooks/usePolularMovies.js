import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_POPULAR_MOVIES } from '../utils/constants';

const usePolularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPolularMovies = async () => {
      const data = await fetch(
        API_POPULAR_MOVIES,
        API_OPTIONS
      );
      const moviesList = await data.json();
      dispatch(addPopularMovies(moviesList.results));
    }
  
    useEffect(() => {
      !popularMovies && getPolularMovies();
    }, []);
}

export default usePolularMovies;
