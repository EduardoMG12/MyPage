import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: var(--pages-background);
   overflow-x: hidden;
   max-width: 100vw;
`;
export const HeroSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: var(--img-background) center no-repeat;
    background-size: cover;   
    background-position: center;
    
    @media (max-width:1000px) {
        background-image: var(--img-background-media);
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100vh;
        background-size: cover;   
        background-position: center;
    }
`;

export const HomeAbout = styled.section`
    display:flex;
    justify-content: space-between;
    align-items: flex-center;
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
    @media (max-width:1260px) {}
    @media (max-width:1600px) {
        padding-inline: 1rem;
    }
    @media (max-width:1060px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 0;
        height: 110vh;
        padding: 0;
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
    height: 100%;
    max-height:70rem;
    width: 100%;
    max-width: 70rem;
    opacity: 1;
    
    @media (max-width:868px) {
        height:60rem;
        width: 60rem;
    }
    @media (max-width:600px) {
        height: 35rem;
        width: 35rem;
    }
`;

export const BallonAbout = styled.div`
    width: 40%;
    max-width: 100vw;
    max-height: 60rem;
    padding: 0 6rem;
    background: var(--ballon-message);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 39px;
    & p{
        font-family: var(--fontFamily-PtSans);
        font-weight: 400;
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
        line-height: 3.5rem;
    }
    opacity: 1;
    color: var(--pages-color);
    @media (max-width:1060px) {
        width:60%;
        & p{
            font-size: 2rem;
            text-align: center;
            line-height: 3rem;
        }
        margin-block: 5rem;
        padding: 6rem 3rem;
    }
    @media (max-width:600px) {
        width: 95%;
        & p{
            font-size: 2rem;
        }
    }
    @media (max-width:400px) {
        & p{
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
        padding: 4rem 3rem;
    }

`;
export const ProjectsContainer = styled.div`
    height: 180vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto; 
    & h2{
        color: var(--pages-color);
        font-family: var(--fontFamily-Sora);
        font-weight: 400;
        font-size: 5.5rem;
    }
    & p{
        color: var(--pages-color);
        font-size: 2rem;
        & a{
            color: #003060;
        
        }
    }
    `;