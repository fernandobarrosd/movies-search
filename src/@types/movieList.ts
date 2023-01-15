export interface MovieList {
    results: MovieTypeIMDBApi[];
}

export interface MovieTypeIMDBApi {
    id: string;
    image: string;
    title: string;
    description: string;

}

export interface MovieTypeOMDBApi {
    Title: string;
    Year: string;
    Plot: string;
    Director: string;
    Poster: string;
}
