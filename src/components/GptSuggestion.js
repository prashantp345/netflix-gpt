import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      { movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} moviesList={movieResults[index]} />
      ))}
    </div>
  )
}

export default GptSuggestion;
