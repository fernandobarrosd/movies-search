import { useMovieIMDBApi } from "../../hooks/useMovieIMDBApi";
import { MovieCard } from "../MovieCard";
import { Container, List } from "./style";



export const MovieList = () => {
    const { movieList: movies } = useMovieIMDBApi();
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