import { AppContextType } from "./type";

export const initialState : AppContextType = {
    movieIMDBApi: { description: "", id: "", image: "", title: "" },
    movieOMDBApi: { Director: "", Plot: "", Poster: "", Title: "", Year: "" },
    movieList: [],
    setMovieIMDBApi: () => {},
    setMovieOMDBApi: () => {},
    setMovieList: () => {}
};