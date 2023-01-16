import { useNavigate } from "react-router-dom";
import { useMovieIMDBApi } from "../../hooks/useMovieIMDBApi";
import { Button } from "../Button"
import { Album, Container, ImageContainer, Title, Year } 
from "./style"




export const MovieCard = () => {
    const { movieIMDBApi: { description, image, title, id } } = useMovieIMDBApi();
    const navigate = useNavigate();
    return (
        <>
            { !description.includes("Video") && (
                <Container>
                <ImageContainer>
                    { image ? (
                        <Album src={image}/>
                    ) : <span>Imagem indisponível</span>}
                    
                </ImageContainer>
                <Title>{title}</Title>
                <Year>{description}</Year>
                <Button onClick={() => 
                navigate(`/movie/${title}/${id}`)}>Show more</Button>
            </Container>
            ) }
             
        </>
       
    )
}