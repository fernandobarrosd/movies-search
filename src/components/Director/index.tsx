import { Container, ProfileContainer, Image, Name } 
from "./style";

interface DirectorProps {
    
}

export const Director = () => {
    return (
        <Container>
            <ProfileContainer>
                <Image/>
            </ProfileContainer>
            <Name>Director name</Name>
        </Container>
    )
}