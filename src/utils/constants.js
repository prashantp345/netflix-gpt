
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const API_NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const API_TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const API_UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const API_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?page=1";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hi", name: "हिंदी" },
    { identifier: "ma", name: "मराठी" }
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;