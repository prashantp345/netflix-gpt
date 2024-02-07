import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
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

export default Browse
