import { useEffect } from "react";
import { API_NOW_PLAYING_MOVIES } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";;

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.useNowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        API_NOW_PLAYING_MOVIES,
        API_OPTIONS
      );
      const moviesList = await data.json();
      dispatch(addNowPlayingMovies(moviesList.results));
    }
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;