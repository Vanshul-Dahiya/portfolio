import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
}
body{
    background-color:#1E1E1E ;
    font-family: 'Inter', sans-serif;
    font-size:clamp(1rem, 1.5vw, 1.2rem)
}

#tsparticles{
    height:100vh;
}

`;
