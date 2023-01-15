import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    position: relative;

    a {
        position: absolute;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
    }
    button {
        position: absolute;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
    
    }
   
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 320px;
    border: 4px solid var(--blue-600);
    position: relative;
`

export const Title = styled.h2`
    position: absolute;
    top: -50px;
    font-size: 20px;
`

export const Album = styled.img`
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

export const Description = styled.span`
    margin-bottom: 22px;
    max-width: 600px;
`