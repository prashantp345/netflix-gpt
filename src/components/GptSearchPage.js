import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
        <div className="fixed z-[-1]">
            <img src={BACKGROUND_IMG} alt="logo"></img>
        </div>
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
  )
}

export default GptSearchPage

