import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  //Colors black theme;
  :root{
    --header-background: rgba(0, 0, 0, 0.7);
    --header-color: #FFFFFF;
    --pages-background:#0D0D0D;
    --pages-color:#FFFFFF;
    --ballon-message: rgba(0, 0, 0, 0.7);
    --projects-bgd-ballons: #1F1D1D;
    --projects-color-ballons: #000000; 
    --select: #1F1D1E;
  }
  
  //Colors white theme;
  :root.light{
    --header-background: rgba(255, 255, 255, 0.7);
    --header-color: #000000;
    --pages-background:#E7E7E7;
    --pages-color:#000000;
    --ballon-message: rgba(192, 192, 192, 0.7);
    --projects-bgd-ballons: #A3A3A3;
    --projects-color-ballons: #FFFFFF;   
    --select: #B5C7D4;
  }
  
  :root{
  //Fonts
    --fontfamily-header: 'Sora', sans-serif;//card, tittleQuemSomos;
    --fontsize-header: 2rem;
    --fontsize-logo-header: 2.5rem;
    --fontweight-header: 400;
    --fontFamily-Sora: 'Sora', sans-serif;//card, tittleQuemSomos
    --fontFamily-Roboto: 'Roboto', sans-serif;//about
    --fontFamily-Montserrat: 'Montserrat', sans-serif;
  }
  ::selection {
    background-color: var(--select) !important;
  }
  *{
    /* border: 2px solid green; */
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style: none;
    text-decoration: none;
  }
  html{
  font-size: 62.5%
  }
  
`;

export default GlobalStyle;