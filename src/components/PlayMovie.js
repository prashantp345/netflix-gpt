import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const PlayMovie = () => {
  const [showMovie, setShowMovie] = useState(false);
  const [ movieVideo, setMovieVideo ] = useState(null);
  const navigate = useNavigate();

  const movieClip = useSelector((store) => store.movies.movieClip);

  const watchMovie = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieClip?.id}/videos?language=en-US`, API_OPTIONS);
    const clipsOfMovie = await data.json();
    const filterTrailers = clipsOfMovie.results.filter(video => video?.type === "Trailer");
    const trailer = filterTrailers.length ? filterTrailers[0] : clipsOfMovie.results[0];
    setMovieVideo(trailer);
  }

  useEffect(()=> {
    movieClip && watchMovie();
  }, []);

  if(!movieClip) return;
  const { original_title, overview, poster_path } = movieClip;

  return (
    <div className='pt-[0%] bg-black md:pt-0'>
      <div className='text-end'>
        <button onClick={()=> { navigate("/browse") }} className='justify-end md:p-2 md:m-2 p-2 m-2 bg-blue-700 rounded-lg font-bold text-white text-xs md:text-base'>
          Homepage
        </button>
      </div>
      { !showMovie ?
        (<><VideoTitle title={original_title} overview={overview} movie={movieClip} playMovie={setShowMovie}/>
          <div className='w-screen'>
            <img alt="Movie card" src={IMG_CDN_URL + poster_path}
            className="w-screen aspect-video" />
          </div>
        </>)
        :
        (<div className='bg-black text-white'>
            <div className='w-screen'>
                <iframe 
                    className="w-screen aspect-video"
                    src={ "https://www.youtube.com/embed/"+movieVideo?.key+"?autoplay=1&mute=1&loop=1&rel=0" }
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                ></iframe>
            </div>
            <div className='p-2 m-2'>
                <h1 className='text-1xl md:text-3xl font-bold'>{movieClip?.title}</h1>
                <hr/>
                <p className='py-6 text-xs md:text-lg '>{movieClip?.overview}</p>
            </div>
        </div>)
      }
    </div>
  )
}

export default PlayMovie;