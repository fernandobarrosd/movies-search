import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";


export const useMovieIMDBApi = () => {
    const { movieIMDBApi, movieList, setMovieIMDBApi, setMovieList } = useContext(AppContext);


    return { movieIMDBApi, movieList, setMovieIMDBApi, setMovieList };
}