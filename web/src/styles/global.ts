import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #ffffff;
    --black: #000000;
    --red: #E52E4D;
    --background: #f2f0f5;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --primary: #002f54;
    --primary-light: #395881;
    --primary-dark: #00042b;
    --secondary: #ffff56;
    --secondary-light: #ffff8a;
    --secondary-dark: #c9cc17;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`;