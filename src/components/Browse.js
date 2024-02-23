import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContaner from './SecondaryContaner';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePolularMovies from '../hooks/usePolularMovies';
import useTopratedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {

  const gpt = useSelector((store)=> store.gpt);

  useNowPlayingMovies();
  usePolularMovies();
  useTopratedMovies()
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {
        gpt?.showGptSearch ? <GptSearchPage /> :
        <>
          <MainContainer />
          <SecondaryContaner />
        </>
      }
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContaner
          - MovieList * n
            - cards * n       
       */}
    </div>
  )
}

export default Browse;
