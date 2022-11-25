//@ts-ignore
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  :root{
  //Colors black theme;
    --header-background-dark: rgba(0, 0, 0, 0.7);;
    --header-color-dark: #FFFFFF;
    --pages-background-dark:#0D0D0D;
    --pages-color:#FFFFFF;
    --ballon-message-dark: rgba(0, 0, 0, 0.7);
    --background-projects-ballons: #1F1D1D;
  //Colors white theme;
    --header-background-white: rgba(255, 255, 255, 0.7);;
    --header-color-white: #000000;
    --pages-background-white:#E7E7E7;
    --pages-color:#000000;
    --ballon-message-white: rgba(192, 192, 192, 0.7);
    --projects-background-ballons: #A3A3A3;
    --projects-color-ballons: #FFFFFF;   
  //Fonts
    --fontfamily-header: 'Sora', sans-serif;//card, tittleQuemSomos;
    --fontsize-header: 2rem;
    --fontweight-header: 400;
  //
    --fontFamily-Sora: 'Sora', sans-serif;//card, tittleQuemSomos
    --fontFamily-Roboto: 'Roboto', sans-serif;//about
    --fontFamily-Montserrat: 'Montserrat', sans-serif;

    --fontSize-Midia1800-Tittle: 3.5rem;
    --fontSize-Midia1600-Tittle: 3.5rem;
    --fontSize-Midia1024-Tittle: 3.5rem;
    --fontSize-Midia750-Tittle: 3.5rem;
    --fontSize-P: 3.5rem;
    --fontSize-Midia1800-P: 2.5rem;
    --fontSize-Midia1600-P: 2.5rem;
    --fontSize-Midia1024-P: 2.5rem;
    --fontSize-Midia750-P: 2.5rem;
    --fontSize-Header-Tittle: 4.5rem;
    --fontSize-Header-P: 3rem;
    --fontSizeMidia1024-Tittle-Header: 3.5rem;
    --fontSizeMidia768-Tittle-Header: 2.5rem;
    --fontSizeMidia1024-P-Header: 2rem;
    --fontSizeMidia768-P-Header: 1.5rem;
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