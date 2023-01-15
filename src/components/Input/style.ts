import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        padding: 14px;
        border-radius: var(--border-radius);
        background-color: var(--blue-600);
        width: 651px;
    }

    label {
        margin-bottom: 16px;
    }
`