import styled from "styled-components";




export const Button = styled.button`
    color: var(--white);
    border-radius: var(--border-radius);
    background-color: var(--blue-900);
    padding: 15px;
    width: 220px;
    border: 4px solid var(--blue-600);
    margin-top: 36px;
    --font-family: "Poppins Bold";
    font-family: var(--font-family);
    font-size: 14px;

    &:disabled {
        opacity: 0.6;
        cursor: auto;
    }
`;