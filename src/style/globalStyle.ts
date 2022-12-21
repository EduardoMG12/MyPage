import { createGlobalStyle } from 'styled-components'
import imageDark from '/bgdHomeDark.jpg'
import imageLight from '/bgdHomeLigth.jpg'
import myImage from '/MyImage.png'
import myImage2 from '/MyImage1.png'
import projectsDark from '/projectsDark.jpg'
import projectsWhite from '/projectsWhite.jpg'
import MyIcon from '/MyIcon.png'
import MyIcon2 from '/MyIcon2.png'
import bgdMediaDark from '/bgdHomeDarkMedia.jpg'
import bgdMediaWhite from '/bgdHomeWhiteMedia.jpg'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');


//Colors black theme;
  :root{
    --header-background: rgba(0, 0, 0, 0.7);
    --header-color: #FFFFFF;
    --pages-background:#0D0D0D;
    --pages-color:#FFFFFF;
    --ballon-message: rgba(0, 0, 0, 0.7);
    --projects-bgd-ballons: #1F1D1D;
    --projects-color-ballons: #FFFFFF;   
    --select: #1F1D1E;
    --img-background: url(${imageDark});
    --img-background-media: url(${bgdMediaDark});
    --my-image: url(${myImage});
    --my-icon: url(${MyIcon});
    
  //animationTheme
    --transform-positionXMoon: translateX(-150%);
    --transform-positionYMoon: translateY(0%);
    --button-BgdTheme:#FFFFFF;
    --button-ColorTheme: #184392;
    --button-SubColorTheme:rgba(0, 0, 0, 1);
    --visibility-ThemeWhite: visible;
    --visibility-ThemeDark: hidden;
    --height-sun: 0rem;

    //Projects
    --img-background-projects: url(${projectsDark});

    //Scroll
    ::-webkit-scrollbar {
    width: 10px;
    height: 14px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9C9C9C;
    border: 0px none #ffffff;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9C9C9C;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #9C9C9C;
  }
  ::-webkit-scrollbar-track {
    background: #080808;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #080808;
  }
  ::-webkit-scrollbar-track:active {
    background: #080808;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  }
  
//Colors white theme;
  :root.light{
    --header-background: rgba(255, 255, 255, 0.7);
    --header-color: #000000;
    --pages-background:#E7E7E7;
    --pages-color:#000000;
    --ballon-message: rgba(192, 192, 192, 0.7);
    --projects-bgd-ballons: #A3A3A3;
    --projects-color-ballons: #000000; 
    --select: #B5C7D4;
    --img-background: url(${imageLight});
    --img-background-media: url(${bgdMediaWhite});
    --my-image: url(${myImage2});
    --my-icon: url(${MyIcon2});

  //animationTheme
    --transform-positionYMoon: translateY(-150%);
    --transform-positionXMoon: translateX(50%);
    --button-BgdTheme:#000000;
    --button-ColorTheme: #fdd835;
    --button-SubColorTheme:#FDB813;
    --visibility-ThemeWhite: hidden;
    --visibility-ThemeDark: visible;
    --height-sun: 1.3rem;

    //Projects
    --img-background-projects: url(${projectsWhite});
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
    --fontFamily-PtSans: 'PT Sans', sans-serif;
  }

  ::selection {
    background-color: var(--select) !important;
  }
  
  *{
    border: 2px solid green;
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