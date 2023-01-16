import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";


export const useMovieOMDBApi = () => {
    const { movieOMDBApi, setMovieOMDBApi } = useContext(AppContext);


    return { movieOMDBApi, setMovieOMDBApi };
}