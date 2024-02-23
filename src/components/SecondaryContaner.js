import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContaner = () => {
  const movies = useSelector((store)=> store.movies)

  return (
    movies && (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-44 pl-0 md:pl-4 relative z-20'>
        <MovieList title={"Now Playing Movies"} moviesList={ movies?.nowPlayingMovies } />
        <MovieList title={"Polupar"} moviesList={ movies?.popularMovies } />
        <MovieList title={"Trending"} moviesList={ movies?.topRatedMovies } />
        <MovieList title={"Upcoming"} moviesList={ movies?.upcomingMovies } />
      </div>
      {/*      
        Movie List - Now Playing Movies
        - Movie Card :n
        Movie List - Popular Movies
        - Movie Card :n
        Movie List - Trending Movies
        - Movie Card :n
        Movie List - Upcoming Movies
        - Movie Card :n
      */} 
    </div>)
  )
}

export default SecondaryContaner
