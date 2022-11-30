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
    /* background-attachment:fixed; */
`

export const HomeAbout = styled.section`
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    background-color: var(--pages-background);
    padding-inline: 20rem;
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
export const ProjectsContainer = styled.div`
    width: 100%;
    height: 100vh;
`
export const BallonAbout = styled.div`
    width: 60rem;
    padding: 6rem;
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 39px;
    font-family: var(--fontFamily-PtSans);
    font-weight: 400;
    font-size: 2.5rem;
    letter-spacing: 3px;
    line-height: 134.02%;
`;