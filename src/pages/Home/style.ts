import styled, { keyframes } from 'styled-components'


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
export const HeroSection = styled.section`
    width: 100%;
    height: 100vh;
    background: var(--img-background) center no-repeat;
    background-size: cover;    
`

export const HomeAbout = styled.section`
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    background-color: var(--pages-background);
    padding-inline: 10rem;
    p{
    color:var(--pages-color);
    font-size: 2.5rem;
    
    }

`;
export const MyImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:70rem;
    width: 70rem;
`;