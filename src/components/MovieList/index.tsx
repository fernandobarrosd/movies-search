import { MovieTypeIMDBApi } from "../../@types/movieList";
import { MovieCard } from "../MovieCard";
import { Container, List } from "./style";

interface MovieListProps {
    movies: MovieTypeIMDBApi[];
}

export const MovieList = ({ movies } : MovieListProps) => {
    return (
        <Container>
            <h2>Movies</h2>
            <List>
                { movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                )) }
            </List>
        </Container>
    )
}