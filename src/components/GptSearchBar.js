import React, { useRef, useState } from 'react';
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
    const config = useSelector((store) => store.config);
    const searchTxt = useRef(null);
    const dispatch = useDispatch();
    
    let [ searchCount, setSearchCount ] = useState(0)
    
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
            API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async ()  => {
        setSearchCount(++searchCount);
        if(searchCount < 3) {
            const searchQuery = "Act as a movie recommendation system and suggest some movies for the query:" + searchTxt.current.value + "only give me name of 5 movies, comma seperated like the example giver ahead. Example Result: Don, Dur, Gudar, Hum Tum, Kabhi Hai Kadhi Na";
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: searchQuery }],
                model: 'gpt-3.5-turbo',
            });
            if(!gptResults.choices) {
                return // handle gpt error
            }
            const gptSearchList = gptResults.choices?.[0].message?.content;
            //const gptSearchList = "La La Land, Roman Holiday, Midnight in Paris, The Great Gatsby, Titanic";
            const gptMovies = gptSearchList.split(",");
            const promiseArr = gptMovies.map(movie => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArr);
            dispatch(addGptMovies({ movieNames: gptMovies, movieResults :tmdbResults}));
        } else {
            // Search limit ecid
        }
    }
    return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
                <input
                    ref={searchTxt}
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[config.lang].gptSearchPlaceHolder}
                />
                <button className='col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg disabled:bg-red-400'
                    disabled={(searchCount<3)? false : true}
                    onClick={handleGptSearchClick}>
                    {lang[config.lang].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;
