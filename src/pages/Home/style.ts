import styled, { keyframes } from 'styled-components'


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: var(--pages-background);
`;
export const HeroSection = styled.section`
    width: 100%;
    height: 100vh;
    background: var(--img-background) center no-repeat;
    background-size: cover;   
    background-position: center;
`;

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
    @media (max-width:1800px) {
      padding-inline: 1rem;
    }
    @media (max-width:1060px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    height: 110vh;
    padding: 0;
    }
`;
export const MyImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:70rem;
    width: 70rem;
    @media (max-width:1600px) {
    height:60rem;
    width: 60rem;
    }
    @media (max-width:1300px) {
    height:55rem;
    width: 55rem;
     }
@media (max-width:1060px) {
    height:75rem;
    width: 75rem;
}
@media (max-width:868px) {
    height:60rem;
    width: 60rem;
}
@media (max-width:600px) {
    height:35rem;
    width: 35rem;
}

`;
export const ProjectsContainer = styled.div`
    width: 100%;
    height: 1000vh;
`
export const BallonAbout = styled.div`
    width: 90rem;
    padding: 6rem;
    background: var(--ballon-message);
`;
export const ProjectsContainer = styled.div`
    width: 100%;
    height: 100vh;
`;
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
    color: var(--pages-color);
    p{
    }
    @media (max-width:1060px) {
    width: 60rem;
    font-size: 1rem;
    line-height: 30px;
     padding: 6rem 3rem;
    }
    @media (max-width:600px) {
    width: 40rem;
    font-size: 1rem;
    line-height: 30px;
     padding: 6rem 3rem;
    }
    @media (max-width:400px) {
    width: 30rem;
    font-size: 0.8rem;
    line-height: 25px;
     padding: 4rem 3rem;
    }
`;