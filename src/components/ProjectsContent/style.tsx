import styled from "styled-components";

export const Content = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    padding-bottom: 3rem;
`;

export const Project = styled.div`
    width: 100%;
    height: 60rem;
    background-color: var(--projects-bgd-ballons);
    color: var(--projects-color-ballons);
    border-radius: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
     &:hover .divHover{
    pointer-events: all;
    visibility: visible;
    opacity: 1;
    }

`;

export const Image = styled.div`
    height: 100%;
    width: 40%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 6rem 0 0 6rem;
    `;

export const ContentProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    & h2{
    font-size: 3.5rem;
    color:var(--projects-color-ballons);
    }
    & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 3rem;
    li{
        background-position: center;
        background-size: cover;
    }
    
    }
    #sinopseLong{
        width: 60rem;
        font-size: 2rem;
        color:var(--projects-color-ballons);
    }
    #legendShort{
        font-size: 2.2rem;

    }

    `;

export const CodeAndDeploy = styled.div`
    background-color: black;
    width: 6rem;
    height: 100%;
    border-radius: 0 6rem 6rem 0;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    transition: 0.9s  all ease-in-out;
`;

export const ItemHover = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    .githubLogo{
        transform: rotate(90deg);
        transition: 0.4s ease-in-out transform;
    }
    .vercelLogo1{
        width: 10rem;
        transform: rotate(90deg);
        transition: 1s ease-in all;
    }
    .vercelLogo2{
        opacity:0;
        visibility: hidden;
        pointer-events: none;
        transition: 1s ease-in all;
        width: 5rem;
    }
    &:hover .githubLogo{
        transform: rotate(0deg);
    }
    &:hover .vercelLogo1{
        transform: rotate(0deg);
        opacity:0;
        visibility: hidden;
        width: 0;

    }
    &:hover .vercelLogo2{
        opacity:1;
        visibility: visible;
        pointer-events: all;
    }
`;
export const ItemHover2 = styled.div` 
`