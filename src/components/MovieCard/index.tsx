import { useNavigate } from "react-router-dom";
import { MovieTypeIMDBApi } from "../../@types/movieList"
import { Button } from "../Button"
import { Album, Container, ImageContainer, Title, Year } 
from "./style"


interface MovieCardProps {
    movie: MovieTypeIMDBApi;
}


export const MovieCard = ({ movie: { id, title, description, image } } : MovieCardProps) => {
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