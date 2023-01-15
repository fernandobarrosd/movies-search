import { createGlobalStyle } from "styled-components";
import poppinsMedium from "../../assets/fonts/poppins-medium.ttf";
import poppinsBold from "../../assets/fonts/poppins-bold.ttf";
import poppinsExtraBold from "../../assets/fonts/poppins-extra-bold.ttf";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --blue-600: #335C81;
        --blue-700: #274060;
        --blue-900: #1B2845;
        --border-radius: 4px;
        --outlined-color: var(--blue-600);
        --max-width: 1920px;
        --font-family: "Poppins Medium";
    }

    @font-face {
        font-family: "Poppins Medium";
        src: url(${poppinsMedium});
    }

    @font-face {
        font-family: "Poppins Bold";
        src: url(${poppinsBold});
    }

    @font-face {
        font-family: "Poppins ExtraBold";
        src: url(${poppinsExtraBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--blue-900);
        color: var(--white);
        font-family: var(--font-family);
        width: 100%;
        height: 100vh;
    }

    fieldset, input, button {
        border: 0;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    
`;