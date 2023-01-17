import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vw;
    background-color: var(--pages-background);
`;
export const Apresentation = styled.div`
    width: 100%;
    height: 95vh;
    background: var(--img-background-projects) no-repeat;
    background-size: cover;
    background-position: 0 -25rem;
    @media (max-width:768px) {
        background-position: 0 0rem;
        height: 90vh;
        
        }
    @media (max-width:425px) {
        background-position: -17rem 0rem;
        height: 90vh;
        
        }
`
export const DivTittle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-block: 50rem;
`;

export const Tittle = styled.h2`
    font-family: var( --fontFamily-Sora);
    font-size: 10rem;
    font-weight: 700;
    color: var(--pages-color);
     @media (max-width:425px) {
        font-size: 7rem;
        
        }
`;
