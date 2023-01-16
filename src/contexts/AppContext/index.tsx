import { createContext, useState } from "react";
import { MovieTypeIMDBApi, MovieTypeOMDBApi } from "../../@types/movieList";
import { AppContextType, AppProviderProps } from "./type";


export const AppContext = createContext<AppContextType>({} as AppContextType);


export const AppProvider = ({ children } : AppProviderProps) => {
    const [ movieIMDBApi, setMovieIMDBApi ] = useState<MovieTypeIMDBApi>({} as MovieTypeIMDBApi);
    const [ movieOMDBApi, setMovieOMDBApi ] = useState<MovieTypeOMDBApi>({} as MovieTypeOMDBApi);
    const [ movieList, setMovieList ] = useState<MovieTypeIMDBApi[]>([]); 

    
    return (
        <AppContext.Provider value={{
            movieOMDBApi, movieIMDBApi, movieList, setMovieOMDBApi, setMovieIMDBApi, 
        setMovieList }}>
            { children }
        </AppContext.Provider>
    )
}