import axios from "axios";
import { MovieList, MovieType, MovieTypeOMDBApi, YoutubeTrailerType } from "../@types/movieList";


const IMDB_API_KEY = "k_p17fx57h";


const imdbApi = axios.create({
    baseURL: "https://imdb-api.com"
});


const getMovies = (title: string)=> {
    return imdbApi.get<MovieList>(`/en/API/SearchMovie/${IMDB_API_KEY}/${title}`)
};

const getYoutbeTrailer = (movieId: string | undefined) => {
    return imdbApi.get<YoutubeTrailerType>
    (`/en/API/YouTubeTrailer/${IMDB_API_KEY}/${movieId}`)
}

export const ImdbService = {
    getMovies,
    getYoutbeTrailer
}
