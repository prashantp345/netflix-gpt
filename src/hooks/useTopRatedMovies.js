import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_TOP_RATED_MOVIES } from '../utils/constants'; 

const useTopratedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
      const data = await fetch(
        API_TOP_RATED_MOVIES,
        API_OPTIONS
      );
      const moviesList = await data.json();
      dispatch(addTopRatedMovies(moviesList.results));
    }
  
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopratedMovies;
