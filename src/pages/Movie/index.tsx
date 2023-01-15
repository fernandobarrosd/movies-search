import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header"
import { MovieInfo } from "../../components/MovieInfo";
import { Main, MovieInfoSection } 
from "./style";
import { MovieTypeOMDBApi } from "../../@types/movieList";
import { omdbApiService } from "../../services/omdbApi";
export const Movie = () => {
    const { title, id } = useParams<{title: string, id: string}>();
    const [ movie, setMovie ] = useState<MovieTypeOMDBApi>({} as MovieTypeOMDBApi);

    const fetchData = async () => {
        try {
            const response = await 
            omdbApiService.getMovie(title);

            setMovie(response.data);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Header/>
            <Main>
                <MovieInfoSection>
                    <MovieInfo movie={movie}/>
                </MovieInfoSection>
            </Main>
        </>
        
    )
}