import { FormEvent, useState } from "react";
import { MovieTypeIMDBApi } from "../../@types/movieList";
import { Button } from "../Button";
import { Input } from "../Input";
import { FormContainer, FormSection, Main } from "./style";
import { ImdbService } from "../../services/imdbApi";
import { MovieList } from "../MovieList";

export const Form = () => {
   const [ title, setTitle ] = useState("");
    const [ movieList, setMovieList ] = useState<MovieTypeIMDBApi[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);
    

    const handleSearch = async (e : FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await ImdbService.getMovies(title);
            setMovieList(response.data.results);
            
        } catch (error) {
            
        }
        finally {
            setIsLoading(false);
        }
    }


    return (
        <Main>
            <FormSection>
                <FormContainer onSubmit={handleSearch}>
                    <fieldset>
                    <Input label="Movie Title"
                    id="movie-title"
                    defaultValue={title}
                    onChange={(e) => 
                    setTitle(e.currentTarget.value)}/>
                </fieldset>
                <Button>Search</Button>
            </FormContainer>
            { isLoading ? <p>Carregando...</p> : 
            movieList.length === 0 ? 
            <p>Nenhum resultado</p> : 
            <MovieList movies={movieList}/> }
            </FormSection>
        </Main>
    )
}