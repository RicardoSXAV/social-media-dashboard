import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100vw;
        height: 100vh;
    }
    *, button, input {
        font-family: 'Inter', sans-serif;
        border: 0;
        outline: 0;
    }
`;
