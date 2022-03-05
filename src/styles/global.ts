import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --red: #E62E4D;
        --white: #FFFFFF;
        --title: #363F5F;
        --text: #969CB3;
        --background: #F0F2F5; 
    }

    html {
        
        
        @media(max-width:1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87,5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;