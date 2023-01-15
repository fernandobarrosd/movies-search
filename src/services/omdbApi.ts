import axios from "axios";
import { MovieTypeOMDBApi } from "../@types/movieList";

const OMDB_API_KEY = "15e8b77a";

const omdbApi = axios.create({
    baseURL: 
    `http://www.omdbapi.com`
});

const getMovie = (movieTitle: string | undefined) => {
    const title = movieTitle?.replace(" ", "+");

    return omdbApi.get<MovieTypeOMDBApi>(`/?apikey=${OMDB_API_KEY}&t=${title}`);

}

export const omdbApiService = {
    getMovie
}