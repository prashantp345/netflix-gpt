import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const MovieList = ({ title, moviesList}) => {
    
    const scollToRef = useRef();
    const [scrollbarIconLeft, setScrollbarIconLeft] = useState(false);

    if(!moviesList) return;

    const scrollRight = () => {
        scollToRef.current.scrollBy(350,0);
        setScrollbarIconLeft(scollToRef.current.scrollLeft !== 0);
    }

    const scrollLeft = () => {
        scollToRef.current.scrollBy(-350,0);
        setScrollbarIconLeft(scollToRef.current.scrollLeft !== 0);
    }

    return (
        <div className='px-6'>
            <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
            <div ref={scollToRef} className='flex overflow-x-scroll no-scrollbar'>
                { scrollbarIconLeft &&  <button onClick={() => scrollLeft()}
                    className='text-white shadow-black shadow-lg mt-28 hover:text-yellow-400 text-4xl outline-none border-none cursor-pointer absolute justify-between'>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button> 
                }
                <div className='flex'> 
                    { moviesList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} posterPath={movie.poster_path} />
                    ))}
                </div>
                <button onClick={()=>scrollRight()} className='text-white mt-28 right-0 hover:text-yellow-400 text-4xl outline-none border-none cursor-pointer absolute justify-end'>
                    <FontAwesomeIcon icon={faAngleDoubleRight}/> 
                </button>
            </div>
        </div>
    )
}

export default MovieList;
