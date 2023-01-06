import styled from 'styled-components';

export const Container = styled.section`
    min-width:63rem;
    min-height:70rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 4rem;
    background-color: var(--projects-bgd-ballons);

`;
export const Image = styled.div`
    min-width:63rem;
    height: 40rem;
    border-radius: 4rem 4rem 1rem 1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

`;
export const Content = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .tittleContent{
        font-weight: 700;
        font-family: var(--fontFamily-PtSans);
        font-size: 3.5rem;
    }
    .legendShort{
        font-family: var(--fontFamily-PtSans);
        font-weight: 400;
        font-size: 2.5rem;
    }
    .toolsProjects{
    display: flex;
    justify-content: space-evenly;
        & li{
        width: 3.5rem;
        height: 3.5rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        }
    }
`;
