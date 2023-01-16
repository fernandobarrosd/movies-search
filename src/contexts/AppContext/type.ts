import React from "react";
import { MovieTypeIMDBApi, MovieTypeOMDBApi } from "../../@types/movieList";

export interface AppContextType {
    movieOMDBApi: MovieTypeOMDBApi;
    movieIMDBApi: MovieTypeIMDBApi;
    movieList: MovieTypeIMDBApi[];
    setMovieOMDBApi: (newMovieOMDBApi: React.SetStateAction<MovieTypeOMDBApi>) => void;
    setMovieIMDBApi: (newMovieIMDBApi: React.SetStateAction<MovieTypeIMDBApi>) => void;
    setMovieList: (newMovieList: React.SetStateAction<MovieTypeIMDBApi[]>) => void;
}


export interface AppProviderProps {
    children: React.ReactNode;
}
