import styled from "styled-components";


export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

export const ImageContainer = styled.div`
    width: 150px;
    height: 230px;
    background-color: var(--blue-900);
    border: 4px solid var(--blue-600);
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        text-align: center;
    }
`

export const Album = styled.img`
    width: 100%;
    height: 100%;
    
`

export const Title = styled.span`
    margin-bottom: 20px;
    margin-top: 20px;
   
`

export const Year = styled.span`
   margin-bottom: 26px;
`