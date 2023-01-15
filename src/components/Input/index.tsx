import React from "react";
import { Container } from "./style";

interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
    label: string;
    id: string;

}

export const Input = ({ label, id, ...props} : InputProps) => {
    return (
        <Container>
           <label htmlFor={id}>{label}</label>
           <input id={id} {...props}/>
        </Container>
    )
}