import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieTypeOMDBApi } from "../../@types/movieList";
import { ImdbService } from "../../services/imdbApi";
import { Button } from "../Button";
import { ButtonLink } from "../ButtonLink";
import { Container, ImageContainer, Title, Album,
Info, Description } 
from "./style";

interface MovieInfoProps {
    movie: MovieTypeOMDBApi;
}

export const MovieInfo = ({ movie } : MovieInfoProps) => {
   const [ youtubeTrailerUrl, setYoutubeTrailerUrl ] = 
   useState("");
   const { id } = useParams<{ id: string }>();
   

   const fetchData = async () => {
     try {
        const response = await ImdbService.getYoutbeTrailer(id);

        setYoutubeTrailerUrl(response.data.videoUrl);
     } catch (error) {
        
     }
   }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container>
            <ImageContainer>
            { movie.Poster ? (
                <Album src={movie.Poster}/>
                ) : <span>Imagem indisponível</span>}
            </ImageContainer>
            <Info>
                <Title>{movie.Title}</Title>
                <Description>{movie.Plot}</Description>
                { youtubeTrailerUrl.length !== 0 ? (
                    <ButtonLink
                    href={youtubeTrailerUrl}>
                        Youtube Trailer</ButtonLink>
                )  : <Button disabled>Trailer indisponível</Button>}
                
            </Info>
        </Container>
    )
}