import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { API_UPCOMING_MOVIES } from '../utils/constants';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
      const data = await fetch(
        API_UPCOMING_MOVIES,
        API_OPTIONS
      );
      const moviesList = await data.json();
      dispatch(addUpcomingMovies(moviesList.results));
    }
  
    useEffect(() => {
      !upcomingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;
