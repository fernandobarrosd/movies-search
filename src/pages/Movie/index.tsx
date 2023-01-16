import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieInfo } from "../../components/MovieInfo";
import { Main, MovieInfoSection } from "./style";
import { omdbApiService } from "../../services/omdbApi";
import { Layout } from "../../components/Layout";
import { useMovieOMDBApi } from "../../hooks/useMovieOMDBApi";


export const Movie = () => {
    const { title } = useParams<{title: string }>();
   const { setMovieOMDBApi: setMovie } = useMovieOMDBApi();
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await 
                omdbApiService.getMovie(title);
    
                setMovie(response.data);

                
            } catch (error) {
                
            }
        }

        fetchData();
    }, [])
    return (
        <>
            <Layout>
                <Main>
                    <MovieInfoSection>
                        <MovieInfo/>
                    </MovieInfoSection>
                </Main>
            </Layout>
        </>
        
    )
}