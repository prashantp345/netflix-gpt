import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className='md:h-full h-screen object-cover' src={BACKGROUND_IMG} alt="logo"></img>
    </div>      
    <div >
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
    </>
  )
}

export default GptSearchPage

